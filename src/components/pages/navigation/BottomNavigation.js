import React,{useState} from "react";
import "../../../assests/css/navigation.css";
import Logo from "../../../assests/images/Logo.png";
import downArrow from "../../../assests/images/downArrow.png";
import search from "../../../assests/images/search.png";
import JoinFreeBtn from "../../button/PrimaryButton";
import Navigation from "./TopNavigation";
import Login from "../login/Login";
const BottomNav = () => {
  const [showLoginModal,setShowLoginModal] = useState(false)
  const handleLoginClick =  () => {
    setShowLoginModal((data) => !data)
  }
  return (
    <>
      <div className=" bottom_head_nav sm:invisible max-sm:invisible lg:visible py-3">
        <div className="flex container mx-auto justify-between items-center xl:flex-row sm:flex-col max-sm:flex-col">
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
          {/* Navlinks */}
          <div>
          <Navigation />
        </div>

          
        <div className="btns_nav">
          <button onClick={handleLoginClick}  className="login_btn_nav">Login</button>
          <JoinFreeBtn
            title={"Join for Free"}
            bgColor={"bg-blue-600"}
            color={"text-white"}
          />
        </div>

        </div>
   
        
          {showLoginModal&& 
          <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
            <Login />
          </div>  }
        
      </div>
    </>
  );
};
export default BottomNav;
