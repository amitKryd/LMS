import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../css/navigation.css";
import Logo from "../../images/Logo.png";
import downArrow from "../../images/downArrow.png";
import search from "../../images/search.png";
import JoinFreeBtn from "../../utiles/PrimarButton";
const BottomNav = () => {
  return (
    <>
      <div className="bottom_head_nav">
        <div className="logo_with_btn">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }}>
            <img src={Logo} alt="nav-logo" />
          </motion.div>
          <button className="explore_btns_nav">
            Explore{" "}
            <span className="down_arrow">
              <img src={downArrow} alt="downarrow" />
            </span>
          </button>
          <input
            className="input_search__nav"
            type="text"
            placeholder="What do you want to learn today?"
          />
          <span className="img_search_icon">
            <img src={search} alt="search-image" />
          </span>
        </div>
        <div className="btns_nav">
          <button className="login_btn_nav">Login</button>
          <JoinFreeBtn />
        </div>
      </div>
    </>
  );
};
export default BottomNav;
