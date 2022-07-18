const TodoItem = ({
  text,
  todo,
  todos,
  setTodos,
  isDeleteActive,
  setIsDeleteActive,
}) => {
  const deleteTodo = () => {
    // Delete todo
    setTodos(todos.filter(elem => elem.id !== todo.id));
    setIsDeleteActive(!isDeleteActive);
  };
  return (
    <div className="todo d-flex flex-row align-items-center">
      <li className="dropdown-item text-light">{text}</li>
      <span
        onClick={deleteTodo}
        className="trash-btn d-flex align-items-center ms-auto text-light"
      >
        <i className="fa-solid fa-trash-can"></i>
      </span>
    </div>
  );
};

export default TodoItem;
