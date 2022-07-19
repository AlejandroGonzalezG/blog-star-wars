import TodoItem from './TodoItem';

const FavoritesList = ({
  todos,
  setTodos,
  isDeleteActive,
  setIsDeleteActive,
}) => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-primary btn-toggle dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              isDeleteActive={isDeleteActive}
              setIsDeleteActive={setIsDeleteActive}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FavoritesList;
