import TodoItem from "./TodoItem/Todoitem";

export default function List({ todos, deleteTodo, toggleTodo, editTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.name}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}
