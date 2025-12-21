import { useState } from "react";
import style from "./form.module.css"

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (!todo.trim()) return; 
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
   
      <form onSubmit={addTodo} className={style.form}>
        <div className={style.alignment}>
          <input
          className={style.inputBox}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="Add a todo..."
        />
        <button className={style.button} type="submit">Submit</button>
        </div>
      </form>
    
  );
}
