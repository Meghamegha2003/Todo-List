import Empty from "./Empty";
import Form from "./Form";
import List from "./List";
import useTodos from "../hooks/useTodos";

export default function Todo() {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo
  } = useTodos();

  return (
    <div>
      <Form addTodo={addTodo} />
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
