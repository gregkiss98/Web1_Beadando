import React from "react";
import ReactDOM from "react-dom";
import Main from "Main";
import "./css/index.css";
import { ThemeProvider } from 'theme-context'

 
ReactDOM.render(
  <ThemeProvider>
    <Main/>
  </ThemeProvider>, 
  document.getElementById("root")
);