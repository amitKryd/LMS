import React from "react";
import JoinFreeBtn from "../button/PrimaryButton";
import "../../css/hero.css";
import Group_one from "../../images/Group_one.png";
import BottomNav from "../navigation/BottomNavigation";
import Navigation from "../navigation/TopNavigation";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <Navigation />
      <BottomNav />
      <div className="main_hero_div">
        <div>
          <h1 className="learn_without_hero">Learn Without Limits</h1>
        </div>
        <div className="lorem_title_nav">
          <p className="heading_title_nav">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            suscipit rhoncus nunc id aliquet. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia
          </p>
        </div>
        <div className="btn_part_hero">
          <JoinFreeBtn title={"Join for Free"} />
          <button className="try_coolBtn_hero">
            Try CoolTeacher for Universities
          </button>
        </div>
        <div className="img_group_onn">
          
            <img src={Group_one} alt="header-photo" />
          
        </div>
      </div>
    </>
  );
};

export default Hero;
