import { useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoLists from "./TodoLists";
import Footer from "./Footer.tsx";
import "./App.css";
import { lightThemeOptions, darkThemeOptions } from "./ThemeOptions.tsx";
import {
  Box,
  Button,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CssBaseline />
          <Box display="flex" sx={{ margin: 3, alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginLeft: 3 }}>
              {mode === "dark" ? "light mode" : "dark mode"}
            </Typography>
            <Button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              sx={{ margin: 0, padding: 0 }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
          </Box>
          <TodoLists />
          <Footer />
          {/* <TodoList /> */}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
