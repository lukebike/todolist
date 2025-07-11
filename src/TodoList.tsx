import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import List from "@mui/material/List";

const initialTodos = [
  { id: 1, text: "Get coffee", completed: false },
  { id: 2, text: "Get cat", completed: true },
  { id: 3, text: "Get poop", completed: false },
  { id: 4, text: "Get dog", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text: string) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, id: Math.random(), completed: false },
      ];
    });
  };
  // const handleClick = (clickedTodo: TodoTypes) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === clickedTodo.id
  //         ? { ...todo, completed: !todo.completed }
  //         : todo
  //     )
  //   );
  // };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          remove={removeTodo}
          toggle={toggleTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}
