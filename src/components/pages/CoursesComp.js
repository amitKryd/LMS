import React, { useState } from "react";
import "../../css/courses.css";
import roundedbar from "../../images/roundedbar.png";
import imageOne from "../../images/ImageOne.png"
import Card from "../card/Card";
const CoursesComp = () => {
  const [activeIndex, setActiveIndex] = useState();

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
              bottom: "0",
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
      title:"Data Science and Machine Learning",
      about: "Lorem ipsum want to secure your future for better fullfillment",
      rating:8
    },
    {
      img: imageOne,
      title:"AI and Machine Learning",
      about: "Lorem ipsum want to secure your future for better fullfillment",
      rating:4.7,
    }
  ]
  return (
    <>
      <div class="border-2 border-solid border-gray-300 mb-3 rounded ">
        <div className="my-10 mx-10">
          <h1 className="font-semibold text-3xl">Data Analyst</h1>
          <p className="text-textColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            suscipit rhoncus nunc id{" "}
          </p>
          <div className="my-10 flex flex-row gap-[100px]">
            <img src={roundedbar} alt="graph" />
            <div className="flex flex-col ">
              <h2 className="pt-10 font-semibold ">
                Recommended Professional Certificates
              </h2>
              <Card data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
