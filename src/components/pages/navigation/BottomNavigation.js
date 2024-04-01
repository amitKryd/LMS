import React, { useState } from "react";
import "../../../css/navigation.css";
import Logo from "../../../images/Logo.png";
import downArrow from "../../../images/downArrow.png";
import search from "../../../images/search.png";
import JoinFreeBtn from "../../button/PrimaryButton";
import Navigation from "./TopNavigation";
const BottomNav = () => {
  return (
    <>
      <div className=" bottom_head_nav sm:invisible max-sm:invisible lg:visible py-2">
        <div className="flex  container mx-auto justify-between items-center">
          {/* logo */}
          <div className="logo_with_btn">
            <img src={Logo} alt="nav-logo" className="cursor-pointer" />
          </div>
          {/* dropdown  */}

          <div class="inline-block ml-10 relative">
            <select class=" font-semibold block cursor-pointer appearance-none  bg-customBlue text-bgWhite px-2 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:border-blue-500 w-21">
              <option>Explore</option>
              <option>LMS Data</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-gray-700">
              <img src={downArrow} alt="downarrow" />
            </div>
          </div>
          {/* search field */}
          <div className="flex ">
            <input
              className="input_search__nav outline-none"
              type="text"
              placeholder="What do you want to learn today?"
            />
            <span className="img_search_icon">
              <img src={search} alt="search-image" />
            </span>
          </div>
          <div>
          <Navigation />
        </div>

          
        <div className="btns_nav">
          <button className="login_btn_nav">Login</button>
          <JoinFreeBtn
            title={"Join for Free"}
            bgColor={"bg-blue-600"}
            color={"text-white"}
          />
        </div>

        </div>
   
      </div>
    </>
  );
};
export default BottomNav;
