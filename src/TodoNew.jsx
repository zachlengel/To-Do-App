export function TodoNew() {
  return (
    <div>
      <h1>New Todo</h1>
      <form>
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
