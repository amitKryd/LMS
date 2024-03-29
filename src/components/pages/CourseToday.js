import React from "react";
import Card from "../card/Card";

const CourseToday = () => {
  const data = [
    {
      img: "/images/Media (3).png",
      title: "Data Science and Machine Learning",
      about: "Lorem ipsum want to secure your future for better fullfillment",
      rating: 8,
      btnText:"Begineer Course"
    },
    {
      img: "/images/city.png",
      title: "Data Science and Machine Learning",
      about: "Lorem ipsum want to secure your future for better fullfillment",
      rating: 8,
      btnText:"Intermediate Course"
    },
    {
      img: "/images/Media (1).png",
      title: "Data Science and Machine Learning",
      about: "Lorem ipsum want to secure your future for better fullfillment",
      rating: 8,
      btnText:"Begineer Course"
    },
    {
      img: "/images/Media (2).png",
      title: "Data Science and Machine Learning",
      about: "Lorem ipsum want to secure your future for better fullfillment",
      rating: 8,
      btnText:"Begineer Course"
    },
  ];
  return (
    <>
      <div className="w-[90%] m-auto pt-5 pb-10">
        <div>
          <h2 className="font-bold text-2xl">
            Get Started with your Courses today!
          </h2>
          <p className="text-sm pt-1 text-gray-600 pr-1 text-wrap">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div >
          <Card data={data} />
        </div>
      </div>
    </>
  );
};

export default CourseToday;
