import { useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import "./App.css";
import { lightThemeOptions, darkThemeOptions } from "./ThemeOptions.tsx";
import { Container, createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = useMemo(
    () => createTheme(mode === "dark" ? darkThemeOptions : lightThemeOptions),
    [mode]
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="lg"
          style={{
            height: "100%",
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
      </ThemeProvider>
    </>
  );
}

export default App;
