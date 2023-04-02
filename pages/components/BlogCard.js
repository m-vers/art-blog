import styles from "../../styles/BlogCard.module.css";
import Link from "next/link";

function BlogPost({ title, author, coverPhoto, datePublish, slug }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
      <Link href={`/posts/${slug}`}>
        <img src={coverPhoto.url} alt="" />
          <div className={styles.textContainer}>
            <h2 className={styles.text}>{title}</h2>
            <div className={styles.details}>
              <div className={styles.author}>
                <img src={author.avatar.url} alt={author.name} />
                <h3 className={styles.author}>{author.name}</h3>
              </div>
              <div className={styles.text}>
                <h3 className={styles.text}>{datePublish}</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;