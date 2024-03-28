import React from "react";
import Hero from "./components/pages/Hero";
import CoursesComp from "./components/pages/CoursesComp";
import { Individual } from "./components/pages/Individuals/Individual";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     {/* <Navigation /> */}
     <Individual/>

     </BrowserRouter>
    </div>
  );
}

export default App;
