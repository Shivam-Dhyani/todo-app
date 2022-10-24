import React from "react";

const TodoList = (props) => {
  const { todoList, handleEditTodo, handleDeleteTodo } = props;
  return (
    <ul className="all-todos">
      {todoList.map((currTodo) => {
        return (
          <li className="single-todo" key={currTodo.id}>
            <span className="todo-text">{currTodo.todo}</span>
            <button onClick={() => handleEditTodo(currTodo.id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(currTodo.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
