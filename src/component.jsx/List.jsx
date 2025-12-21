
import Todoitem from "./Todoitem"

export default function List({todos,setTodos}) {
  return(
  <div>
     {todos.map((item)=>(
        <Todoitem key={item} item={item} todos={todos} setTodos={setTodos}/>
        ))}
   </div>
   ) 
}