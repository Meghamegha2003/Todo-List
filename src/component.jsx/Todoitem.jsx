import { useState } from "react";
import style from "./todoitem.module.css";
import { FaPencilAlt, FaCheck } from "react-icons/fa";

export default function Todoitem({ item, todos, setTodos }) {
  const [isEdited, setIsEdited] = useState(false);
  const [edit, setEdit] = useState(item.name);

  function completed() {
    const complete = todos.map((todo) =>
      todo.name == item.name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(complete);
  }

  function deleteButton(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function editButton() {
    if (isEdited) {
      setTodos(
        todos.map((todo) =>
          todo.name === item.name ? { ...todo, name: edit } : todo
        )
      );
    }
    setIsEdited(!isEdited);
  }


  return (

    <div
      className={style.todoBox}
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <input
        type="checkbox"
        checked={item.done}
        onChange={completed}
        className={style.checkList}
      />
      <span
        className={`${style.textSpan} ${item.done ? style.completedText : ""}`}
      >
        {item.text}
      </span>

      {isEdited ? (
        <input
          type="text"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          className={style.inputBox}
        />
      ) : (
        <span className={`${style.text} ${item.done ? style.completed : ""}`}>
          {item.name}
        </span>
      )}

      <button
        onClick={() => {
          deleteButton(item);
        }}
        className={style.squareBtn}
      >
        x
      </button>

      <button
        onClick={() => {
          editButton();
        }}
        className={style.squareBtn}
      >
        {isEdited ? <FaCheck /> : <FaPencilAlt />}
      </button>

    </div>

  );
}
