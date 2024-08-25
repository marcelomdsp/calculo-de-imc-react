import { createGlobalStyle } from "styled-components";
import img from "./assets/images/fundo.jpg";

export const GlobalStyle = createGlobalStyle`

    * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #27282be3;
    font-family: sans-serif;
    
}
`;
