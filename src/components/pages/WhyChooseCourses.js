import React from "react";

const WhyChooseCourses = () => {
  return (
    <div className="w-[90%] m-auto mb-4 mt-4 flex justify-between">
      <div className="w-[40%]">
        <h1 className="text-4xl bold font-extrabold pb-4">
          Why Choose Our Courses
        </h1>
        <p className="text-gray-500 text-sm pb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div className="pb-4 flex justify-between">
          <span className="w-fit flex items-center justify-center flex-col">
            <h3 className="text-2xl font-semibold">231+</h3>
            <p className="text-gray-500 text-sm">Courses & Subjects</p>
          </span>
          <span className="w-fit flex items-center justify-center flex-col">
            <h3 className="text-2xl font-semibold">89+</h3>
            <p className="text-gray-500 text-sm">Instructors</p>
          </span>
          <span className="w-fit flex items-center justify-center flex-col">
            <h3 className="text-2xl font-semibold">12k</h3>
            <p className="text-gray-500 text-sm">Using the App</p>
          </span>
        </div>
        <div className="flex items-center justify-start flex-row">
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
            <h3 class="text-2xl font-semibold">72k+</h3>
            <p class="text-gray-500 text-sm">Happy Student</p>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="flex items-center w-[100%] m-0 justify-between">
          <img
            src={process.env.PUBLIC_URL + "/images/Frame 90.png"}
            alt=""
            className="w-[50%]"
          />
          <div className="bg-white shadow-md text-center rounded-lg border-2 p-4 border-gray-200 w-[30%] h-[150px] overflow-hidden me-24">
            <h1 className="text-blue-500 text-4xl font-extrabold">95%</h1>
            <h3 className="font-semibold">Lorem Ipsum</h3>
            <p className="text-gray-400 text-sm">It is a long established</p>
          </div>
        </div>
        <div className="flex items-center w-[100%] m-0 justify-between">
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-[40%] border-2 border-gray-100 ms-12 ">
            <div className="flex  w-[100%] items-center relative justify-between mb-4 p-4">
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
              <h3 className="me-4 text-lg w-[35%] font-semibold">1.5k+ Instructors</h3>
            </div>
            <div className="flex items-center justify-center flex-wrap p-4">
              <h4 className="text-xl font-semibold mr-2">Lorem Ipsum</h4>
              <p className="text-sm">
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
