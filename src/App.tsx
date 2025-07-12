import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import "./App.css";
import { lightThemeOptions, darkThemeOptions } from "./ThemeOptions.tsx";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CssBaseline />

        <TodoList />
      </Container>
    </>
  );
}

export default App;
