import { TodoIndex } from "./TodoIndex";
import axios from "axios";
import { useEffect, useState } from "react";
import { TodoNew } from "./TodoNew";

export function Content() {
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

  // useEffect(handleIndexTodos, []);

  return (
    <main>
      <TodoNew />
      <TodoIndex todos={todos} />
    </main>
  );
}
