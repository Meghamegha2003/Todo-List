import { useState } from "react";
import style from "./form.module.css"

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"",done:false});

  function addTodo(e) {
    e.preventDefault();
    if (!todo.name.trim()) return; 
    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }

  return (
   
      <form onSubmit={addTodo} className={style.form}>
        <div className={style.alignment}>
          <input
          className={style.inputBox}
          onChange={(e) => setTodo({...todo,name:e.target.value})}
          type="text"
          value={todo.name}
          placeholder="Add a todo..."
        />
        <button className={style.button} type="submit">Submit</button>
        </div>
      </form>
    
  );
}
