import { useEffect, useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoLists from "./TodoLists";
import TodoListAdd from "./TodoListAdd.tsx";
import Footer from "./Footer.tsx";
import "./App.css";
import { lightThemeOptions, darkThemeOptions } from "./ThemeOptions.tsx";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import { ListProvider } from "./ListContext.tsx";

import ResponsiveAppBar from "./ResponsiveAppBar.tsx";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = useMemo(
    () => createTheme(mode === "dark" ? darkThemeOptions : lightThemeOptions),
    [mode]
  );

  useEffect(() => {
    const favicon = document.querySelector(
      "link[rel='icon']"
    ) as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = mode === "dark" ? "/icon2.png" : "/icon.png";
    }
  }, [mode]);

  return (
    <BrowserRouter>
      <ListProvider>
        <ThemeProvider theme={theme}>
          <Container
            maxWidth="lg"
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CssBaseline />
            <ResponsiveAppBar mode={mode} setMode={setMode} />
            <Routes>
              <Route path="/add" element={<TodoListAdd />} />
              <Route path="/lists" element={<TodoLists />} />
            </Routes>
            <Footer />
          </Container>
        </ThemeProvider>
      </ListProvider>
    </BrowserRouter>
  );
}

export default App;
