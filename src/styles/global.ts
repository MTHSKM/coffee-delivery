import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme['purple-700']};
    }

    body {
        background: ${props => props.theme['background']};
        color: ${props => props.theme['white']};
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        outline: none;
    }

    button {
        outline: none;
        box-shadow: none;
        border: none;
    }

    button:focus {
        outline: none;
        box-shadow: none;
    }
`