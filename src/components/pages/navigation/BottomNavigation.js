import React from "react";
import "../../../assests/css/navigation.css";
import Logo from "../../../assests/images/Logo.png";
import downArrow from "../../../assests/images/downArrow.png";
import search from "../../../assests/images/search.png";
import JoinFreeBtn from "../../button/PrimaryButton";
import Navigation from "./TopNavigation";
const BottomNav = () => {
  return (
    <>
      <div className="container mx-auto bottom_head_nav sm:invisible max-sm:invisible lg:visible">
        <div className="logo_with_btn">
          <img src={Logo} alt="nav-logo" className="cursor-pointer" />
          {/* <button className="explore_btns_nav">
            Explore{" "}
            <span className="down_arrow">
              <img src={downArrow} alt="downarrow" />
            </span>
          </button> */}

          {/* <div class="inline-block ml-10">
  <select class="block  w-full bg-customBlue text-bgWhite  px-2 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500">
    <option>Explore</option>
    <option>LMS Data</option>
  </select>
  
</div> */}
          <div class="inline-block ml-10 relative">
            <select class=" font-semibold block cursor-pointer appearance-none  bg-customBlue text-bgWhite px-2 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:border-blue-500 w-21">
              <option>Explore</option>
              <option>LMS Data</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-gray-700">
              <img src={downArrow} alt="downarrow" />
            </div>
          </div>
          <input
            className="input_search__nav"
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
    </>
  );
};
export default BottomNav;
