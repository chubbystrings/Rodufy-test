import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --primary: #301446;
  --secondary: #E5E5E5;
  --button: #EA7052;
  --blackish: hsl(0, 0%, 18%);
}
body, ul, h1, h2, h3, h4, h6, p, button, a, small, button div, input{
    font-family: 'Chalkboard SE', sans-serif;                                             
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-decoration: none;
    box-sizing: border-box ;
}
`;
