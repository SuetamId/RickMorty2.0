import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes"
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
