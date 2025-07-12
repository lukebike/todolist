import { useState, useEffect } from "react";
import TodoItem, { type TodoTypes } from "./TodoItem";
import TodoForm from "./TodoForm";
import List from "@mui/material/List";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, Typography, IconButton, useTheme } from "@mui/material";

type TodoListProps = {
  listId: number;
  name: string;
  removeList: (id: number) => void;
};

// const initialTodos = () => {
//   const data = localStorage.getItem("todos");
//   if (!data) return [];

//   return JSON.parse(data);
// };
export default function TodoList({ listId, name, removeList }: TodoListProps) {
  const storageKey = `todos-list-${listId}`;
  const initialTodos = () => {
    const data = localStorage.getItem(storageKey);
    if (!data) return [];
    return JSON.parse(data);
  };
  const [todos, setTodos] = useState(initialTodos);
  const theme = useTheme();
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todos));
  }, [todos, storageKey]);

  const removeTodo = (id: number) => {
    setTodos((prevTodos: TodoTypes[]) => {
      return prevTodos.filter((t: TodoTypes) => t.id !== id);
    });
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos: TodoTypes[]) => {
      return prevTodos.map((todo: TodoTypes) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  const addTodo = (text: string) => {
    setTodos((prevTodos: TodoTypes[]) => {
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
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.primary.main,
          textAlign: "center",
          mb: 1,
          fontWeight: 500,
        }}
      >
        {name}{" "}
        <IconButton onClick={() => removeList(listId)}>
          <DeleteForeverIcon />
        </IconButton>
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.primary.contrastText,
          textAlign: "center",
          mb: 2,
          fontWeight: 200,
        }}
      >
        what would you like to do?
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          border: `3px solid ${theme.palette.warning.main}`,
          borderRadius: "20px",
        }}
      >
        {todos.map((todo: TodoTypes) => (
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
