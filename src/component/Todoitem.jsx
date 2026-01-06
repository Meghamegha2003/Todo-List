import { useState } from "react";
import style from "./todoitem.module.css";
import { FaPencilAlt, FaCheck } from "react-icons/fa";

export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.name);

  function handleEdit() {
    if (isEditing) {
      editTodo(todo.name, text);
    }
    setIsEditing(!isEditing);
  }

  return (
    <div className={style.todoBox}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.name)}
        className={style.checkList}
      />

      {isEditing ? (
        <input
          className={style.inputBox}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      ) : (
        <span className={`${style.text} ${todo.done ? style.completed : ""}`}>
          {todo.name}
        </span>
      )}

      <button
        className={style.squareBtn}
        onClick={() => deleteTodo(todo.name)}
      >
        x
      </button>

      <button className={style.squareBtn} onClick={handleEdit}>
        {isEditing ? <FaCheck /> : <FaPencilAlt />}
      </button>
    </div>
  );
}
