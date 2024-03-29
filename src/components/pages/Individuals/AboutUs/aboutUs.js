import React from "react";

import { AboutLeft } from "./AboutLeft";
import { AboutRight } from "./AboutRight";

export const AboutUs = () =>{
    return(
        <>
        <div class="container mx-auto grid lg:grid-cols-8 sm:grid-cols-1  max-sm:grid-cols-1 gap-4 mt-10 mb-5 px-8">

          <div class="col-span-3 ">
          <AboutLeft/>
          </div>

            <div class="col-span-5 ">
           <AboutRight/>
            </div>

            </div>
        </>
    )
}