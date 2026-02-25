import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [message,setMessage] = useState("")
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(""), 2000);
    return () => clearTimeout(timer);
  }, [message]);


  function addTodo(todo) {
    if (!todo.name.trim()){
        setMessage("Todo is empty")
        return
      }
    setTodos(prev => {
      if(prev.find(t=>t.name === todo.name)){
        setMessage("Todo item is alredy exist!")
        return prev
      }
      setMessage("Todo item added")
      return [todo,...prev]
    });
  }

  function deleteTodo(name) {
    setTodos(prev => prev.filter(todo => todo.name !== name));
    setMessage("Todo is deleted")
  }

  function toggleTodo(name) {
    setTodos(prev =>
      prev.map(todo =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    const todoItem = todos.find(t => t.name === name);
  if (todoItem) {
    setMessage(`Todo ${todoItem.name} marked as ${todoItem.done ? "not done" : "done"}`);
  }
  }

  function editTodo(oldName, newName) {
    setTodos(prev =>
      prev.map(todo =>
        todo.name === oldName ? { ...todo, name: newName } : todo
      )
    );
     setMessage(" Todo status updated!");
  }

 

    function clearMessage() {
    setMessage("");
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    message,
    clearMessage
  };
}
