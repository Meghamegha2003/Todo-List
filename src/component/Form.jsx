import { useState } from "react";
import style from "./form.module.css";

export default function Form({ addTodo }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    addTodo({ name, done: false });
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.alignment}>
        <input
          className={style.inputBox}
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Add a todo..."
        />
        <button className={style.button}>Submit</button>
      </div>
    </form>
  );
}
