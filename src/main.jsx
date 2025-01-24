import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { MyContext } from "./myContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider value={{ name: "Marcos Vinicius", email: "vinicius@email.com" }}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </StrictMode>
);
