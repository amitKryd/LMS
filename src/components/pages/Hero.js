import React from "react";
import JoinFreeBtn from "../button/PrimaryButton";
import "../../css/hero.css";
import Group_one from "../../images/Group_one.png";
import Navigation from "../../components/pages/navigation/TopNavigation";

import { motion } from "framer-motion";
import BottomNav from "./navigation/BottomNavigation";
const Hero = () => {
  return (
    <>
      
      <BottomNav />
      <div className="main_hero_div">
        <div>
          <h1 className="learn_without_hero">Learn Without Limits</h1>
        </div>
        <div className="max-w-[600px] mx-auto flex justify-center items-center pt-5 max-sm:mx-2">
          <p className="text-center text-gray-700 break-words text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            suscipit rhoncus nunc id aliquet. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia
          </p>
        </div>
        <div className="flex justify-center items-center my-10 mx-0 gap-10 max-sm:flex-col max-sm:gap-5">
          <JoinFreeBtn title={"Join for Free"} bgColor={"bg-blue-600"} color={"text-white"} />
          <button className="try_coolBtn_hero">
            Try CoolTeacher for Universities
          </button>
        </div>
        <div className="img_group_onn">
        <img src={process.env.PUBLIC_URL + "/images/Hero image.png"} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
