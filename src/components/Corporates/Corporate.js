import React  from "react";
import CoursesComp from "../CoursesComp";
import Hero from "../Hero";
import { ExpertHelp } from "../expertHelp/expertHelp";
export const Individual = () =>{
    return(
      <>
       <Hero />
      <CoursesComp  />
      <ExpertHelp/>
      </>
    )
}