import React from "react";
import { Individual } from "./components/pages/Individuals/Individual";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Individual />
      </BrowserRouter>
    </div>
  );
}

export default App;
