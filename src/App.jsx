import { useState } from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Login from "./components/Login";
import theme from "./Theme";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <ThemeProvider theme={theme(mode)}>
      <Box
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <Login />
      </Box>
    </ThemeProvider>
  );
}

export default App;
