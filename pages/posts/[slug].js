import { GraphQLClient, gql } from "graphql-request";
import styles from "../../styles/Slug.module.css";
import {Image} from "next/image"; 

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/clfsoo4kq26ga01t714pq4g9a/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublish
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        createdBy {
          id
        }
        url
      }
      altImage {
        html
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
};

export default function BlogPost({ post }) {
  return (

    
    <main className={styles.blog}>
      <div className={styles.title}>
        <div className={styles.authdetails}>
          <img src={post.author.avatar.url} alt={post.author.name} />
          <div className={styles.authtext}>
            <h6>By {post.author.name} </h6>
            <h6 className={styles.date}>
              {post.datePublish}
            </h6>
          </div>
        </div>
        <h1>{post.title}</h1>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>

      <div
        className={styles.image}
        dangerouslySetInnerHTML={{ __html: post.altImage.html }}
      ></div>
      
    </main>
  );
};