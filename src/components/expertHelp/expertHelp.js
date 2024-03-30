import React from "react";
import { ExpertLeft } from "./ExpertLeft";
import { ExpertRight } from "./ExpertRight";

export const ExpertHelp = () =>{
    return(
        <>
        <div class="container mx-auto grid lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1  max-sm:grid-cols-1 lg:gap-10 max-sm:lg:gap-2 mt-10  px-8">
          <div class="md:col-span-5 ">
          <ExpertLeft/>
          </div>

            <div class="md:col-span-3 ">
            <ExpertRight/>
            </div>

            </div>
        </>
    )
}