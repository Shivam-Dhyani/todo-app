import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState("");

  const handleTodoSubmit = (event) => {
    event.preventDefault();

    if (todo !== null && todo.match(/^ *$/) === null) {
      // Edit Todo Mode
      if (editId) {
        todoList.map((currTodo) => {
          if (currTodo.id === editId) {
            currTodo.todo = todo;
            setTodoList(todoList);
            setEditId("");
          }
        });
      }
      // Add Todo Mode
      else {
        setTodoList([...todoList, { id: `${todo}-${Date.now()}`, todo }]);
      }
    } else {
      alert("Input is Empty!!");
    }
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    if (editId) {
      alert("This Todo is in Edit Mode.Wait untill it's Edited!!");
    } else {
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
    }
  };

  const handleEditTodo = (id) => {
    const editTodo = todoList.find((todo) => todo.id === id);
    setTodo(editTodo.todo);
    setEditId(editTodo.id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List App</h1>

        <TodoForm
          todo={todo}
          setTodo={setTodo}
          editId={editId}
          handleTodoSubmit={handleTodoSubmit}
        />

        <TodoList
          todoList={todoList}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
