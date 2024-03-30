import React  from "react";
import CoursesComp from "../CoursesComp";
import Hero from "../Hero";
import { ExpertHelp } from "../../expertHelp/expertHelp";
import { AboutUs } from "./AboutUs/aboutUs";
import NewTeacherCool from "../NewTeacherCool";
import CourseToday from "../CourseToday";
import WhyChooseCourses from "../WhyChooseCourses";
import AdvertizeTwo from "../../Advertize/AdvertizeTwo";
import TeacherCoolCourses from "../TeacherCoolCourses";
import FrequentlyAskQuest from "../../FrequentlyAskQuestion/FrequentlyAskQuest";


export const Individual = () =>{
    return(
      <>
      <div className="bg-[red]">
       <Hero  />
       <ExpertHelp/>
       <CoursesComp  />  
       <NewTeacherCool />
       {/* <WhyChooseCourses /> */}
       {/* <AboutUs /> */}
        {/* <AdvertizeTwo /> */}
        <CourseToday />
        <TeacherCoolCourses />
        <FrequentlyAskQuest/>
        </div>
      </>
    )
}