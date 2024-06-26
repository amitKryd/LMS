import React from "react";
import { RiH1 } from "react-icons/ri";
import img1 from "../../../../assests/images/Ellipse 4.png"

export const AboutRight = () => {
  return (
    <>
    <div className=" relative ">
    <div>
    <h1 className="text-blue-700 text-2xl">About us</h1>
      <h1 className="text-6xl max-sm:text-4xl font-bold py-3">Who We Are</h1>
      <p className="text-md font-medium text-gray-700 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        facilisis ipsum at accumsan eleifend. Curabitur et scelerisque magna,
        faucibus bibendum ex. Mauris nisl odio, facilisis sit amet justo
        maximus, interdum malesuada urna. Donec ac metus sed dui iaculis
        consequat. Nunc molestie <br></br> <br></br> 
      </p>
      <p className="text-md font-medium text-gray-700">      Phasellus maximus neque id eros vestibulum ultricies. Nunc fermentum
        dolor id ante egestas, in suscipit mauris vulputate. Etiam ac metus
        mauris</p>

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded focus:outline-none mt-5"
        type="button"
      >
        Start Learning Now
      </button>
    </div>
      <div className=" absolute  right-[-48px] max-sm:top-[200px] max-sm:right-[-15px] -z-10 ">
        <img src={img1} alt="" />
      </div>
    </div>
    </>
  );
};
