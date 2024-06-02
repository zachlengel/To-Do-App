export function TodoIndex(props) {
  return (
    <div>
      <h1>All Todos</h1>
      {props.todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.name}</p>
        </div>
      ))}
    </div>
  );
}
