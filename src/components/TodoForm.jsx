import React from "react";

const TodoForm = (props) => {
  const { todo, setTodo, editId, handleTodoSubmit } = props;
  return (
    <form className="todo-form" onSubmit={handleTodoSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button>{editId ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
