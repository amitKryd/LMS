import React, { useState } from "react";
import "../../css/courses.css";
import roundedbar from "../../images/roundedbar.png";
import imageOne from "../../images/ImageOne.png";
import Card from "../card/Card";
import { NavLink } from "react-router-dom";
const CoursesComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <div className="main_courses_div">
        <h2 className="font-semibold text-3xl">
          Get Started with your Courses today!
        </h2>

        <div className="for_listing_courses">
          <p
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => handleItemClick(0)}
          >
            Data Analyst
          </p>
          <p
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => handleItemClick(1)}
          >
            Project Manager
          </p>
          <p
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => handleItemClick(2)}
          >
            Digital Markketer
          </p>
          <p
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => handleItemClick(3)}
          >
            IT Support Specialist
          </p>
          <p
            className={activeIndex === 4 ? "active" : ""}
            onClick={() => handleItemClick(4)}
          >
            Bookkeeper
          </p>
          <p
            className={activeIndex === 5 ? "active" : ""}
            onClick={() => handleItemClick(5)}
          >
            Cybersecurity
          </p>
          <p
            className={activeIndex === 6 ? "active" : ""}
            onClick={() => handleItemClick(6)}
          >
            Front End Developer
          </p>
          <hr
            style={{
              backgroundColor: "#e5e7e8",
              minWidth: "90%",
              height: "4px",
              position: "absolute",
              bottom: "0px",
              zIndex: "-1",
            }}
          />
        </div>

        <DataAnalyst />
      </div>
    </>
  );
};

export default CoursesComp;
const DataAnalyst = () => {
  const data = [
    {
      img: imageOne,
      title: "Data Science and Machine Learning",
      about: "Lorem ipsum want to secure your future for better fullfillment",
      rating: 8,
      btnText:"Begineer Course"
    },
    {
      img: imageOne,
      title: "AI and Machine Learning",
      about: "Lorem ipsum want to secure your future for better fullfillment",
      rating: 4.7,
      btnText:"Begineer Course"
    },
  ];
  return (
    <>
      <div class="border-2 border-solid border-gray-300  rounded ">
        <div className="mt-10 mx-10 max-lg:mt-5">
          <h1 className="font-semibold text-3xl max-lg:text-center">Data Analyst</h1>
          <p className="text-textColor max-lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            suscipit rhoncus nunc id{" "}
          </p>
          <div className="mt-10 mb-2 flex flex-row justify-between  gap-[100px] max-xl:gap-[100px] max-lg:flex-col max-lg:items-center">
            <div className="min-w-40">
              <img src={roundedbar}  alt="graph" className="pb-8" />
              <hr  className="border-gray-300  m-auto h-4  " />
              <div className="flex pt-2">
                <p className="text-gray-600 ">Job openings:</p>
                <p className="pl-2">82,489</p>
              </div>
            </div>
            <div className="flex justify-between  flex-col min-w-60 ">
              <h2 className="pt-10 font-semibold ">
                Recommended Professional Certificates
              </h2>
              <Card data={data} />
              <div className="flex justify-end items-center pt-6 pb-4">
              <NavLink to='/' className="font-medium text-base text-gray-900 shadow-md">Explore all courses <span>&raquo;</span></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
