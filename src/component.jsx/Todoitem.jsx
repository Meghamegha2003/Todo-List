import { useState } from "react";
import style from "./todoitem.module.css";
import { FaPencilAlt, FaCheck } from "react-icons/fa";

export default function Todoitem({ item, todos, setTodos }) {
  const [isEdited, setIsEdited] = useState(false);
  const [edit, setEdit] = useState(item);
  const [isChecked, setIsChecked] = useState(false);

  function completed() {
    setIsChecked(!isChecked);
  }

  function deleteButton(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function editButton(item) {
    if (isEdited) {
      setTodos(todos.map((todo) => (todo === item ? edit : todo)));
    }
    setIsEdited(!isEdited);
  }

  return (
    <label className={style.todoBox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={completed}
        className={style.checkList}
      />
      <span className={`${style.customBox} ${isChecked ? style.checkedBox : ""}`}></span>

      {isEdited ? (
        <input
          type="text"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          className={style.inputBox}
        />
      ) : (
        <span className={`${style.text} ${isChecked ? style.completed : ""}`}>
          {item}
        </span>
      )}

      <button
        onClick={() => deleteButton(item)}
        className={style.squareBtn}
      >
        x
      </button>

      <button onClick={() => editButton(item)} className={style.squareBtn}>
        {isEdited ? <FaCheck className={style.editIcon} /> : <FaPencilAlt className={style.editIcon} />}
      </button>
    </label>
  );
}