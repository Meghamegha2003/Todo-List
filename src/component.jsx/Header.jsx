import style from "./header.module.css"

export default function Header(){
    return(
        <div className={style.head}>
            <h1 className={style.text}>
                ToDo List
            </h1>
        </div>
    )
}