import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import List from "@mui/material/List";
import { Box, Typography } from "@mui/material";

const initialTodos = () => {
  const data = localStorage.getItem("todos");
  if (!data) return [];

  return JSON.parse(data);
};
export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    <Box sx={{ m: 3 }}>
      <Typography variant="h5">what would you like to do?</Typography>
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
    </Box>
  );
}
