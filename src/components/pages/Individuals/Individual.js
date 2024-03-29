import React  from "react";
import CoursesComp from "../CoursesComp";
import Hero from "../Hero";
import { ExpertHelp } from "../../expertHelp/expertHelp";
import { AboutUs } from "./AboutUs/aboutUs";


export const Individual = () =>{
    return(
      <>
       <Hero />
       <ExpertHelp/>
       <AboutUs />
      <CoursesComp  />  
    
    
      </>
    )
}