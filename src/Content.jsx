import { TodoIndex } from "./TodoIndex";
import axios from "axios";
import { useEffect, useState } from "react";
import { TodoNew } from "./TodoNew";

export function Content() {
  // const [todos, setTodos] = useState([]);

  const todos = [
    { id: 1, name: "Get milk" },
    { id: 2, name: "Break code" },
    { id: 3, name: "Cry" },
  ];

  //   -- Once backend can be linked --
  // const handleIndexTodos = () => {
  //   console.log("handleIndexTodos");
  //   axios.get("http://localhost:3000").then((response) => {
  //     setTodos(response.data);
  //   });
  // };

  const handleCreateTodo = (params) => {
    axios.post("http://localhost:3000", params).then((response) => {
      setTodos([...todos, response.data]);
    });
  };

  // useEffect(handleIndexTodos, []);

  return (
    <main>
      <TodoNew onCreateTodo={handleCreateTodo} />
      <TodoIndex todos={todos} />
    </main>
  );
}
