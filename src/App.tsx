import {createGlobalStyle, ThemeProvider} from "styled-components";
import ToDoList from "./ToDoList";
import {darkTheme} from "./theme";
import React from "react";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset} // reset css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Source+Sans+Pro&display=swap'); // font install
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
function App() {
  return (
    <>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <ToDoList />
        </ThemeProvider>
    </>
  );
}

export default App;
