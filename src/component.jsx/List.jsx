
import Todoitem from "./Todoitem"

export default function List({todos}) {
  return(
  <div>
     {todos.map((item,index)=>(
        <Todoitem key={index} item={item}/>
        ))}
   </div>
   ) 
}