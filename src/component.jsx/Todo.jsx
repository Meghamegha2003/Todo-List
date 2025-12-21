import Empty from "./Empty";
import Form from "./form";
import List from "./List";
import { useState } from "react";

export default function Todo(){
   const [todos, setTodos] = useState([])
     
   return(
    <div>
    
       <Form todos={todos} setTodos={setTodos} />
       {todos.length === 0 ? <Empty /> : <List todos={todos} setTodos={setTodos}  />}
      
    </div>
   )
}