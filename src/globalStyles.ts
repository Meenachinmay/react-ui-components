import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap'); 
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Montserrat, 'sans-serif'
  }
`;

export default GlobalStyle;
