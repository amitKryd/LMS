import React from "react";
import SecondaryButton from "../button/SecondaryButton";
import CardOne from "../card/CardOne";
import JoinFreeBtn from "../button/PrimaryButton";

const NewTeacherCool = () => {
  const data = [
    { popular: "Popular" },
    { popular: "Programming and Software Development" },
    { popular: "Data Science and Analytics" },
    { popular: "Cybersecurity" },
    { popular: "Cloud Computing" },
    { popular: "Database" },
  ];
  const dataOne = [
    {
      img: "Media.png",
      title: "Web Development",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      btnText: "Beginner Course",
    },
    {
      img: "Media one.png",
      title: "Data Science and Machine Learning",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      btnText: "Beginner Course",
    },
    {
      img: "Media two.png",
      title: "Artificial Intelligence",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      btnText: "Beginner Course",
    },
    {
      img: "Media three.png",
      title: "Cyber Security",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      btnText: "Beginner Course",
    },
  ];
  return (
    <>
      <div className="w-[90%] m-auto py-10">
        <div>
          <h2 className="font-bold text-2xl">
            <span className="text-blue-500">New</span> on TeacherCool
          </h2>
          <p className="text-sm pt-1 text-gray-600 pr-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <SecondaryButton data={data} />
          <CardOne dataOne={dataOne} />
{/* <JoinFreeBtn
title={"View all Courses"}
bgColor={"bg-gray-600"}
color={"text-blue-500"}
/> */}
<div className="pt-10 py-6">
<button className="bg-white text-blue-500 rounded-md text-base px-5 h-10 cursor-pointer border border-solid border-blue-400">View all courses <span>&raquo;</span></button>
</div>
        </div>
      </div>
    </>
  );
};

export default NewTeacherCool;


