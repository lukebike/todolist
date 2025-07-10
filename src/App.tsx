import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </>
  );
}

export default App;
