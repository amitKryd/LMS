import React from "react";
import { ExpertLeft } from "./ExpertLeft";
import { ExpertRight } from "./ExpertRight";

export const ExpertHelp = () =>{
    return(
        <>
        <div class="container mx-auto grid lg:grid-cols-8 sm:lg:grid-cols-1 gap-4 mt-10 mb-5 px-8">

          <div class="col-span-5 ">
          <ExpertLeft/>
          </div>

            <div class="col-span-3 ">
            <ExpertRight/>
            </div>

            </div>
        </>
    )
}