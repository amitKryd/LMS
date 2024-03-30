import React from "react";
import CardTwo from "../card/CardTwo";

const TeacherCoolCourses = () => {
  const data = [
    {
      img: "/images/image ten.png",
      title: "Programming and Software Development",
      courses: 688,
    },
    {
      img: "/images/image four.png",
      title: "Data Sccience and Analytics",
      courses: 228,
    },
    {
      img: "/images/image one.png",
      title: "Cybersecurity",
      courses: 89,
    },
    {
      img: "/images/image two.png",
      title: "Networking and System Admministration",
      courses: 132,
    },
    {
      img: "/images/image five.png",
      title: "Cloud Computting",
      courses: 45,
    },
    {
      img: "/images/image six.png",
      title: "Database Management",
      courses: 198,
    },
    {
      img: "/images/image seven.png",
      title: "Web Development",
      courses: 120,
    },
    {
      img: "/images/image three.png",
      title: "Artificial Intelligence (AI)",
      courses: 20,
    },
    {
      img: "/images/image eight.png",
      title: "Internet of Things (IOT)",
      courses: 180,
    },
    {
      img: "/images/image nine.png",
      title: "Software Testing",
      courses: 160,
    },
  ];
  return (
    <>
      <div className="container  mx-auto py-10">
        <div>
          <h2 className="font-bold text-2xl">
            Explore TeacherCool <span className="text-blue-500">Courses</span>
          </h2>
          <p className="text-sm pt-1 text-gray-600 pr-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div>
            <CardTwo data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherCoolCourses;
