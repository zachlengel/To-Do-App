import { TodoIndex } from "./TodoIndex";

export function Content() {
  const todos = [
    { id: 1, name: "Get milk" },
    { id: 2, name: "Break code" },
    { id: 3, name: "Cry" },
  ];

  return (
    <main>
      <TodoIndex todos={todos} />
    </main>
  );
}
