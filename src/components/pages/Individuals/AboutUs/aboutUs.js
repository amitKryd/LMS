import React from "react";
import { AboutLeft } from "./AboutLeft";
import { AboutRight } from "./AboutRight";

export const AboutUs = () =>{
    return(
        <>
        <div class="container mx-auto grid lg:grid-cols-8 sm:grid-cols-1  max-sm:grid-cols-1 gap-10 mt-10 mb-5 px-4">

          <div class="col-span-3 sm:order-2 max-sm:order-2 xl:order-1  max-sm:col-span-1 ">
          <AboutLeft/>
          </div>

            <div class="col-span-5 max-sm:col-span-1 sm:order-1 max-sm:order-1 xl:order-2 ">
           <AboutRight/>
            </div>

            </div>
        </>
    )
}