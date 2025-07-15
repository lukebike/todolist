import { useEffect, useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoLists from "./TodoLists";
import Footer from "./Footer.tsx";
import "./App.css";
import { lightThemeOptions, darkThemeOptions } from "./ThemeOptions.tsx";
import { Container, createTheme, ThemeProvider } from "@mui/material";

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

          <TodoLists />
          <Footer />
          {/* <TodoList /> */}
        </Container>
      </ThemeProvider>
    </ListProvider>
  );
}

export default App;
