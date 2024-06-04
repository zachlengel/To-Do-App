export function TodoNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTodo(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Todo: <input type="text" name="name" />
        </div>
        <div>
          Date: <input type="text" name="date" />
        </div>
        <div>
          Time: <input type="text" name="time" />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
