import React from "react";
import Hero from "./components/pages/Hero";
import CoursesComp from "./components/pages/CoursesComp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     {/* <Navigation /> */}
     <Hero />
     <CoursesComp  />
     </BrowserRouter>
    </div>
  );
}

export default App;
