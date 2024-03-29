import React from "react";
import Hero from "./components/pages/Hero";
import CoursesComp from "./components/pages/CoursesComp";
import { Individual } from "./components/pages/Individuals/Individual";
import { BrowserRouter } from "react-router-dom";
import WhyChooseCourses from "./components/pages/WhyChooseCourses";
import AdvertizeTwo from "./components/pages/AdvertizeTwo";
import NewTeacherCool from "./components/pages/NewTeacherCool";
import CourseToday from "./components/pages/CourseToday";
import TeacherCoolCourses from "./components/pages/TeacherCoolCourses";
import FrequentlyAskQuest from "./components/pages/FrequentlyAskQuest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navigation /> */}
        {/* <Hero /> */}
        {/* <CoursesComp /> */}
        <Individual />
        {/* <NewTeacherCool />
        <CourseToday />
        <WhyChooseCourses />
        <AdvertizeTwo />
        <CourseToday />
        <TeacherCoolCourses />
        <FrequentlyAskQuest/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
