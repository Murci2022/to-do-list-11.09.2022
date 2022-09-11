export function ListItem({ todos, handleDeleteTodo }) {
  return (
    <div className="list-item row jc-space-between">
      {/* <span>ListItem</span> */}
      <ul>
        {todos.map((todo) => (
          <li className="list" key={todo.id}>
            {todo.description}

            <img
              onClick={() => handleDeleteTodo(todo.id)}
              src="https://img.icons8.com/ios/50/1A1A1A/delete--v1.png"
              className="delete-icon"
              alt="delete-icon"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
