import React from "react";
import Hero from "./components/pages/Hero";
import CoursesComp from "./components/pages/CoursesComp";
import { Individual } from "./components/pages/Individuals/Individual";
import { BrowserRouter } from "react-router-dom";
import WhyChooseCourses from "./components/pages/WhyChooseCourses";
import AdvertizeTwo from "./components/pages/AdvertizeTwo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navigation /> */}
        <Individual />
        {/* <Hero /> */}
        {/* <CoursesComp /> */}
        {/* <WhyChooseCourses />
        <Hero /> */}
        {/* <CoursesComp /> */}
        <WhyChooseCourses />
        <AdvertizeTwo />
      </BrowserRouter>
    </div>
  );
}

export default App;
