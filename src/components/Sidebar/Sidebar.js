import React,{useState, useEffect} from "react";

import downArrow from "../../assests/images/downArrow.png";
import search from "../../assests/images/search.png";
import JoinFreeBtn from "../button/PrimaryButton";
import Navigation from "../../components/pages/navigation/TopNavigation";
import { ToastContainer, toast } from 'react-toastify'



export const Sidebar = () =>{
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showSidebar, setShowSidebar] = useState(false);
    const [isCrossIcon, setIsCrossIcon] = useState(false);
  
    const handleClick = () => {
      setShowSidebar(!showSidebar);
      setIsCrossIcon(!isCrossIcon); 
    };
  
    const [isInputVisible, setInputVisible] = useState(false);
  
    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
    };
  
  
    const [scrolling, setScrolling] = useState(false);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    const handleLoginClick = () => {
      setShowLoginModal((data) => !data);
      toast.success("Successfully close");
    };
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
         
        <div className="sidebar flex flex-col gap-5  absolute bg-white fixed h-[90vh] border-r-2 shadow">
          {/* Dropdown */}
          <div className="dropdown px-5 ">
            <select className="font-semibold block cursor-pointer appearance-none bg-customBlue text-bgWhite px-2 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:border-blue-500 w-21">
              <option>Explore</option>
              <option>LMS Data</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-gray-700">
              <img src={downArrow} alt="downarrow" />
            </div>
          </div>

          {/* Search Field */}
          <div className="container  search-field flex flex-row  ">
          <input
              className="input_search__nav outline-none w-[60px]"
              type="text"
              placeholder="What do you want to learn today?"
            />
            <span className="img_search_icon">
              <img src={search} alt="search-image" />
            </span>
          </div>

          {/* Navlinks */}
          <div className="px-5">
          <Navigation  />
          </div>

          {/* Navbtn */}
          <div className="btns_nav flex flex-col ">
            <button onClick={handleLoginClick} className="login_btn_nav">
              Login
            </button>
            <JoinFreeBtn
              title={"Join for Free"}
              bgColor={"bg-blue-600"}
              color={"text-white"}
            />
          </div>
        </div>
    )

}