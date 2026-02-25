import Form from "./Form/Form";
import List from "./List";
import useTodos from "../hooks/useTodos";
import Popup from "./Popup/Popup";
import Empty from "./Empty/Empty";

export default function Todo() {
  

  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    message,
    clearMessage
  } = useTodos();

  
  return (
    <div>
     
      <Form addTodo={addTodo} />
      <Popup message={message} onClose={clearMessage} />
      {todos.length === 0 ? (
        <Empty />
      ) : (
        <List
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      )}
    </div>
  );
}
