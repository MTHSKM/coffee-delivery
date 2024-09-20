import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeeContextProvider } from "./contexts/CafesContext";
import { CartContextProvider } from "./contexts/CartContext";
import { AddressContextProvider } from "./contexts/AddressContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <AddressContextProvider>
            <CartContextProvider>
              <Router></Router>
            </CartContextProvider>
          </AddressContextProvider>
        </CoffeeContextProvider>
      </BrowserRouter>

      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}