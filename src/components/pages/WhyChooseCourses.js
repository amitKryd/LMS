import React from "react";

const WhyChooseCourses = () => {
  return (
    <div className="border-2 border-red-600 w-[90%] h-[500px] m-auto flex justify-between">
      <div className="border-2 border-green-300 w-[40%] ">
        <h1 className="text-4xl bold font-extrabold">Why Choose Our Courses</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div>
          <span>
            <h3>231+</h3>
            <p>Courses & Subjects</p>
          </span>
          <span>
            <h3>89+</h3>
            <p>Instructors</p>
          </span>
          <span>
            <h3>12k</h3>
            <p>Using the App</p>
          </span>
        </div>
        <div>
          <img src="" />
          <span>
            <h3>72k+</h3>
            <p>Happy Student</p>
          </span>
        </div>
      </div>
      <div className="border-2 border-yellow-400 w-[50%]  columns-2">
        <img src={process.env.PUBLIC_URL + "/images/Frame 90.png"} alt="" />
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-[60%] border-2 border-gray-100 h-[200px]  ms-10">
          <div className="p-4">
            <div className="flex items-start justify-between mb-4">
              <img
                src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
                alt=""
                className="h-[20px] w-[20px] rounded-full"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
                alt=""
                className="h-[20px] w-[20px] rounded-full"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
                alt=""
                className="h-[20px] w-[20px] rounded-full"
              />
              <h3 className="text-lg font-semibold">1.5k+ Instructors</h3>
            </div>
            <div className="flex items-center justify-center flex-wrap">
              <h4 className="text-xl font-semibold mr-2">Lorem Ipsum</h4>
              <p className="text-sm">
                It is a long established fact that a reader will be distracted
                by the
              </p>
            </div>
          </div>
        </div>

        <div className="border-2 border-yellow-400 w-[50%] h-[50%">
          <h1>95 %</h1>
          <h3>Lorem Ipsum</h3>
          <p>It is a long established</p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/Frame 89.png"}
          alt=""
          h-10
        />
      </div>
    </div>
  );
};

export default WhyChooseCourses;
