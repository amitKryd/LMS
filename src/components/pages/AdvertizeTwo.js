import React from "react";
import JoinFreeBtn from "../button/PrimaryButton";

const AdvertizeTwo = () => {
  return (
    <>
      <div className="w-full bg-blue-100 h-[509px] relative mb-20">
        <div className="w-[577px] min-h-[572px]  z-10 left-20  bottom-4 relative">
          <img
            src={process.env.PUBLIC_URL + "/images/student2.png"}
            alt="no img"
            className="w-[230px] h-[300px] mb-4 ms-8"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/group_study.png"}
            alt="no img"
            className="w-[265px] h-[252px]"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/student.png"}
            alt="no img"
            className="z-0 absolute left-72 top-10 w-[280px] h-[470px]"
          />
        </div>
        <div className="w-[564px] min-h-[276px]  absolute top-[23%] left-[50%] flex items-center justify-center flex-wrap">
          <h1 className="text-4xl text-center font-bold">
            Learners outcomes on TeacherCool
          </h1>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            suscipit rhoncus nunc id aliquet. Vestibulum ante ipsum primis in
            faucibus
          </p>
          <JoinFreeBtn
            title={"Join for free"}
            bgColor={"bg-blue-600"}
            color={"text-white"}
            className="px-[10px]"
          />
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/Ellipse 1.png"}
          alt="ellipe"
          className="absolute top-40"
        />
      </div>
    </>
  );
};

export default AdvertizeTwo;
