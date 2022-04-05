import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./app/routes";
import { GlobalStyle } from "./app/styles/Global";

function App() {
  return (
    <>
       <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
