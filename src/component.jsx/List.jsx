
import Todoitem from "./Todoitem"
import style from "./list.module.css"
export default function List({todos}) {
  return(
  <div className={style.list}>
     {todos.map((item,index)=>(
        <Todoitem key={index} item={item}/>
        ))}
   </div>
   ) 
}