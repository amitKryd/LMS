import React,{useState, useEffect} from "react";
import "../../../assests/css/navigation.css";
import Logo from "../../../assests/images/Logo.png";
import downArrow from "../../../assests/images/downArrow.png";
import search from "../../../assests/images/search.png";
import JoinFreeBtn from "../../button/PrimaryButton";
import Navigation from "./TopNavigation";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "../../../route/RoutePath";
import { ToastContainer, toast } from 'react-toastify'

// const BottomNav = () => {
  
//   const [showLoginModal,setShowLoginModal] = useState(false)
//   const [showSignUpPage,setShowSignUpPage] = useState(false)
//   const [showInstructorJoin,setShowInstructorJoin]  = useState(false)
//   const  [forgetPassword,setForgetPassword] = useState(false)
  
  
//   const handleLoginClick =  () => {
//     setShowLoginModal((data) => !data)
//     toast.success('Successfully close')
  
//   }
 
//   return (
//     <>
//     <ToastContainer />
//       <div className=" bottom_head_nav  lg:visible py-2">
//         <div className="flex  container mx-auto justify-between items-center xl:flex-row sm:flex-col max-sm:flex-col">
//           {/* logo */}
//           <NavLink  to={RoutePaths.home.path} className="logo_with_btn">
//             <img src={Logo} alt="nav-logo" className="cursor-pointer" />
//           </NavLink>
          
//           {/* dropdown  */}

//           <div class="inline-block ml-10 relative">
//             <select class=" font-semibold block cursor-pointer appearance-none  bg-customBlue text-bgWhite px-2 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:border-blue-500 w-21">
//               <option>Explore</option>
//               <option>LMS Data</option>
//             </select>
//             <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-gray-700">
//               <img src={downArrow} alt="downarrow" />
//             </div>
//           </div>
//           {/* search field */}
//           <div className="flex ">
//             <input
//               className="input_search__nav outline-none"
//               type="text"
//               placeholder="What do you want to learn today?"
//             />
//             <span className="img_search_icon">
//               <img src={search} alt="search-image" />
//             </span>
//           </div>

//           {/* Navlinks */}
//           <div>
//           <Navigation />
//         </div>

//           {/* navbtn  */}
//         <div className="btns_nav">
//           <button onClick={handleLoginClick}  className="login_btn_nav">Login</button>
//           <JoinFreeBtn
//             title={"Join for Free"}
//             bgColor={"bg-blue-600"}
//             color={"text-white"}
//           />
//         </div>
//         </div>
   
        
//         {showLoginModal && (
//         <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
//           <Login
//             setShowLoginModal={setShowLoginModal}
//             setShowSignUpPage={setShowSignUpPage}
//             setForgetPassword={setForgetPassword}
//             forgetPassword={forgetPassword}
//           />
//         </div>
//       )}
      
//       {showSignUpPage && (
//         <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
//           <Signup setShowSignUpPage={setShowSignUpPage} setShowLoginModal={setShowLoginModal}  showSignUpPage={showSignUpPage}    showInstructorJoin={showInstructorJoin} />
//         </div>
//       )}
        
//       </div>
//     </>
//   );
//           };
// export default BottomNav;








// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import Logo from "./path/to/logo"; // Import your logo
// import downArrow from "./path/to/downArrow"; // Import your down arrow icon
// import search from "./path/to/searchIcon"; // Import your search icon
// import Navigation from "./Navigation"; // Import your Navigation component
// import JoinFreeBtn from "./JoinFreeBtn"; // Import your JoinFreeBtn component
// import Login from "./Login"; // Import your Login component
// import Signup from "./Signup"; // Import your Signup component
// import RoutePaths from "./RoutePaths"; // Import your RoutePaths if used

// const BottomNav = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showSignUpPage, setShowSignUpPage] = useState(false);
//   const [showInstructorJoin, setShowInstructorJoin] = useState(false);
//   const [forgetPassword, setForgetPassword] = useState(false);

//   const handleLoginClick = () => {
//     setShowLoginModal((data) => !data);
//     toast.success("Successfully close");
//   };

//   return (
//     <>
//       <ToastContainer />
//       {/* Sidebar Toggle Button */}
//       <button
//         className="sidebar-toggle md:hidden"
//         onClick={() => setShowSidebar(!showSidebar)}
//       >
//         Toggle Sidebar
//       </button>

//       {/* Sidebar */}
//       {showSidebar && (
//         <div className="sidebar">
//           {/* Dropdown */}
//           <div className="dropdown">
//             <select className="font-semibold block cursor-pointer appearance-none bg-customBlue text-bgWhite px-2 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:border-blue-500 w-21">
//               <option>Explore</option>
//               <option>LMS Data</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-gray-700">
//               <img src={downArrow} alt="downarrow" />
//             </div>
//           </div>

//           {/* Search Field */}
//           <div className="search-field">
//             <input
//               className="input_search__nav outline-none"
//               type="text"
//               placeholder="What do you want to learn today?"
//             />
//             <span className="img_search_icon">
//               <img src={search} alt="search-image" />
//             </span>
//           </div>

//           {/* Navlinks */}
//           <Navigation />

//           {/* Navbtn */}
//           <div className="btns_nav">
//             <button onClick={handleLoginClick} className="login_btn_nav">
//               Login
//             </button>
//             <JoinFreeBtn
//               title={"Join for Free"}
//               bgColor={"bg-blue-600"}
//               color={"text-white"}
//             />
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="bottom_head_nav lg:visible py-2 max-sm:hidden sm:invisible md:visible ">
//         <div className="flex container mx-auto justify-between items-center xl:flex-row sm:flex-col max-sm:flex-col">
//           {/* Dropdown */}
//           <div className="inline-block ml-10 relative  lg:block">
//             <select className="font-semibold block cursor-pointer appearance-none bg-customBlue text-bgWhite px-2 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:border-blue-500 w-21">
//               <option>Explore</option>
//               <option>LMS Data</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-gray-700">
//               <img src={downArrow} alt="downarrow" />
//             </div>
//           </div>

//           {/* Search Field */}
//           <div className="flex">
//             <input
//               className="input_search__nav outline-none"
//               type="text"
//               placeholder="What do you want to learn today?"
//             />
//             <span className="img_search_icon">
//               <img src={search} alt="search-image" />
//             </span>
//           </div>

//           {/* Navlinks */}
//           <div>
//             <Navigation />
//           </div>

//           {/* Navbtn */}
//           <div className="btns_nav">
//             <button onClick={handleLoginClick} className="login_btn_nav">
//               Login
//             </button>
//             <JoinFreeBtn
//               title={"Join for Free"}
//               bgColor={"bg-blue-600"}
//               color={"text-white"}
//             />
//           </div>
//         </div>

//         {/* Login Modal */}
//         {showLoginModal && (
//           <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
//             <Login
//               setShowLoginModal={setShowLoginModal}
//               setShowSignUpPage={setShowSignUpPage}
//               setForgetPassword={setForgetPassword}
//               forgetPassword={forgetPassword}
//             />
//           </div>
//         )}

//         {/* Sign Up Page */}
//         {showSignUpPage && (
//           <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
//             <Signup
//               setShowSignUpPage={setShowSignUpPage}
//               setShowLoginModal={setShowLoginModal}
//               showSignUpPage={showSignUpPage}
//               showInstructorJoin={showInstructorJoin}
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BottomNav;


const BottomNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const [showInstructorJoin, setShowInstructorJoin] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCrossIcon, setIsCrossIcon] = useState(false);

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

  return (
    <>
      <ToastContainer />
      {/* Sidebar Toggle Button */}
      {/* <button
        className="sidebar-toggle md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        Toggle Sidebar
      </button> */}

      <div className="lg:hidden items-center">
              <button
                className={`text-${scrolling ? "black" : "black"}`}
                onClick={() => setShowSidebar(!showSidebar)}
                >
                {isCrossIcon ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-12 h-10"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-12 h-10"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                )}
              </button>
            </div>

      {/* Sidebar */}
      {showSidebar && (
        <div className="sidebar">
          {/* Dropdown */}
          <div className="dropdown">
            <select className="font-semibold block cursor-pointer appearance-none bg-customBlue text-bgWhite px-2 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:border-blue-500 w-21">
              <option>Explore</option>
              <option>LMS Data</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-gray-700">
              <img src={downArrow} alt="downarrow" />
            </div>
          </div>

          {/* Search Field */}
          <div className="search-field">
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
          <Navigation />

          {/* Navbtn */}
          <div className="btns_nav">
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
      )}

      {/* Main Content */}
      {(windowWidth >= 740) && (
        <div className="bottom_head_nav py-2">
          <div className="flex container mx-auto justify-between items-center xl:flex-row sm:flex-col max-sm:flex-col">
            {/* Dropdown */}
            <div className="inline-block ml-10 relative  lg:block">
              <select className="font-semibold block cursor-pointer appearance-none bg-customBlue text-bgWhite px-2 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:border-blue-500 w-21">
                <option>Explore</option>
                <option>LMS Data</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-gray-700">
                <img src={downArrow} alt="downarrow" />
              </div>
            </div>

            {/* Search Field */}
            <div className="flex">
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

            {/* Navbtn */}
            <div className="btns_nav">
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
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
          <Login
            setShowLoginModal={setShowLoginModal}
            setShowSignUpPage={setShowSignUpPage}
            setForgetPassword={setForgetPassword}
            forgetPassword={forgetPassword}
          />
        </div>
      )}

      {/* Sign Up Page */}
      {showSignUpPage && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
          <Signup
            setShowSignUpPage={setShowSignUpPage}
            setShowLoginModal={setShowLoginModal}
            showSignUpPage={showSignUpPage}
            showInstructorJoin={showInstructorJoin}
          />
        </div>
      )}
    </>
  );
};

export default BottomNav;
