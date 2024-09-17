import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeContextProvider } from "./contexts/CafesContext";
import { CartContextProvider } from "./contexts/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContextProvider>
          <CartContextProvider>
            <Router></Router>
          </CartContextProvider>
        </CoffeContextProvider>
      </BrowserRouter>

      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}