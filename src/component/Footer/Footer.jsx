import style from "./footer.module.css";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        Made with <FaHeart style={{ color: "white" }} /> by Megha 
      </p>
    </footer>
  );
}