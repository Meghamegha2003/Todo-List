import style from "./todoitem.module.css";
import { FaPencilAlt } from "react-icons/fa";

export default function Todoitem({ item }) {
  return (
    <label className={style.todoBox}>
      <input type="checkbox" className={style.checkList} />
      <span className={style.customBox}></span>
      <span className={style.text}>{item}</span>
    <button className={style.squareBtn}>+</button>

<button className={style.squareBtn}>
  <FaPencilAlt className={style.editIcon} />
</button>


    </label>
  );
}
