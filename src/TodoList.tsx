import { useState } from "react";
import TodoItem from "./TodoItem";
import List from "@mui/material/List";

const initialTodos = [
  { id: 1, text: "Get coffee", completed: false },
  { id: 1, text: "Get cat", completed: true },
  { id: 1, text: "Get poop", completed: false },
  { id: 1, text: "Get dog", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
}
