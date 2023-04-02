import Link from "next/link";
import {
  AiFillInstagram,
  AiFillBehanceSquare
} from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { FaTumblrSquare } from "react-icons/fa";

function Nav() {
  return (
    <nav>
      <Link href="/">
        <h1>Sara Baldwin</h1>
      </Link>
      <div className="icons">
              <Link href="https://www.behance.net/SaraElizabethBaldwin" target="_blank">
                <AiFillBehanceSquare size={42}/>
              </Link>
              <Link href="https://www.instagram.com/lemonprisma/" target="_blank">
                <AiFillInstagram size={42}/>
              </Link>
              <Link href="https://www.tiktok.com/@lemonprisma" target="_blank">
                <BsTiktok size={42}/>
              </Link>
              <Link href="https://www.tumblr.com/lemonprisma" target="_blank">
                <FaTumblrSquare size={42}/>
              </Link>
            </div>
    </nav>
  );
}

export default Nav;