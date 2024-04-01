import React from "react";

const WhyChooseCourses = () => {
  return (
    <div className="container mx-auto mb-2 mt-4 flex justify-between lg:flex-row sm:flex-col gap-4 max-sm:flex-col px-4">
      <div className="container">
        <h1 className="text-6xl max-sm:text-4xl font-bold py-3 leading-[60px] pb-4 space-x-1 ">
          Why Choose Our Courses
        </h1>
        <p className="text-gray-500 text-base max-sm:font-medium sm:font-semibold pb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div className="py-4 flex justify-between">
          <span className="w-fit flex items-center justify-center flex-col">
            <h3 className="text-3xl text-gray-700 font-semibold">231+</h3>
            <p className="text-gray-500 text-sm font-medium">Courses & Subjects</p>
          </span>
          <span className="w-fit flex items-center justify-center flex-col">
            <h3 className="text-3xl text-gray-700 font-semibold">89+</h3>
            <p className="text-gray-500 text-sm font-medium">Instructors</p>
          </span>
          <span className="w-fit flex items-center justify-center flex-col">
            <h3 className="text-3xl text-gray-700 font-semibold">12k</h3>
            <p className="text-gray-500 text-sm font-medium">Using the App</p>
          </span>
        </div>

        <div className="flex items-center justify-start flex-row py-4">
          <div className="flex items-center relative">
            <img
              src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
              alt=""
              className="h-[50px] w-[50px] rounded-full z-0 "
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Frame 90.png"}
              alt=""
              className="h-[50px] w-[50px] rounded-full z-1 absolute left-6 border-2 border-white"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
              alt=""
              className="h-[50px] w-[50px] rounded-full z-2 absolute left-12 border-2 border-white"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Frame 90.png"}
              alt=""
              className="h-[50px] w-[50px] rounded-full z-3 absolute left-20 border-2 border-white"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
              alt=""
              className="h-[50px] w-[50px] rounded-full z-4 absolute left-28 border-2 border-white"
            />
          </div>
          <div class="ms-32 flex items-center gap-3">
            <h3 class="text-xl font-semibold">72k+</h3>
            <p class="text-gray-500 text-sm">Happy Student</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex items-center w-[100%] m-0 justify-between pb-4">
          <img
            src={process.env.PUBLIC_URL + "/images/Frame 90.png"}
            alt=""
            className="w-[50%]"
          />
          <div className="bg-white shadow-md text-center rounded-lg border-2 p-4 border-gray-200   h-[150px] overflow-hidden sm:me-24">
            <h1 className="text-blue-500 text-4xl  font-extrabold">95%</h1>
            <h3 className="font-semibold">Lorem Ipsum</h3>
            <p className="text-gray-400 text-sm">It is a long established</p>
          </div>
        </div>
        
        <div className="flex items-center w-[100%] m-0 justify-between py-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-[40%] max-sm:w-[100%] border-2 border-gray-100 sm:ms-12 max-sm:ms-0 ">
            <div className="flex max-sm:flex-col  w-[100%] items-center relative justify-between  p-4">
           <div className="flex relative max-sm:mr-10">
           <img 
                src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
                alt=""
                className="h-[50px] w-[50px] rounded-full z-0 "
              />
              <img
                src={process.env.PUBLIC_URL + "/images/Frame 90.png"}
                alt=""
                className="h-[50px] w-[50px] rounded-full z-1 absolute left-10 border-2 border-white"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
                alt=""
                className="h-[50px] w-[50px] rounded-full z-2 absolute left-16 border-2 border-white"
              />
           </div>
              <h3 className="me-4 max-sm:me-0 text-md sm:w-[35%] max-sm:w-[100%] text-blue-600  font-semibold">1.5k+ Instructors</h3>
            </div>

            <div className="flex items-center justify-center flex-wrap px-4 py-2">
              <h4 className="text-medium text-gray-600 font-semibold mr-2 ">Lorem Ipsum</h4>
              <p className="text-sm sm:px-4 max-sm:px-2 text-gray-500">
                It is a long established fact that a reader will be distracted
                by the
              </p>
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
            alt="no image"
            className="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCourses;
