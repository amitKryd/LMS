import React, { useState } from "react";
import BottomNav from "../../navigation/BottomNavigation";
import { MdOutlineLogout } from "react-icons/md";
import Courses from "./Courses";
import MyProfile from "../myProfile/MyProfile";
import EditProfile from "../myProfile/EditProfile";

const ForIndividuals = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditComponent, setShowEditComponent] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Profile");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowEditComponent(option === "EditProfile");
    setShowMenu(false);
  };

  return (
    <>
      <BottomNav />
      <div className="container w-[90%]  min-h-fit border-2 border-gray-200 flex justify-center mx-auto mt-10">
        {/* Sidebar menu for larger screen sizes */}
        <div className="hidden sm:block w-[22%] border border-gray-200">
          <div className="flex items-center justify-center flex-col p-4">
            <img
              src={process.env.PUBLIC_URL + "/images/profile.png"}
              alt="no img"
            />
            <h3 className="mt-2 text-md font-semibold">Jasmin Kaur</h3>
          </div>
          <div className="mt-5 mb-10 ">
            <ul>
              <li
                className={`hover:bg-blue-600 hover:text-white my-1 ps-10 p-2 text-lg font-bold hover:cursor-pointer ${
                  selectedOption === "Profile" && "bg-blue-600 text-white"
                }`}
                onClick={() => handleOptionClick("Profile")}
              >
                <a>Profile</a>
              </li>
              <li
                className={`hover:bg-blue-600 hover:text-white my-1 ps-10 p-2 text-lg font-bold hover:cursor-pointer ${
                  selectedOption === "MyCourses" && "bg-blue-600 text-white"
                }`}
                onClick={() => handleOptionClick("MyCourses")}
              >
                <a>My Courses</a>
              </li>
              <li
                className={`hover:bg-blue-600 hover:text-white ps-10 p-2 my-1 text-lg font-bold hover:cursor-pointer ${
                  selectedOption === "subscriptions" && "bg-blue-600 text-white"
                }`}
                onClick={() => handleOptionClick("subscriptions")}
              >
                <a>My Subscriptions</a>
              </li>
              <li
                className={`hover:bg-blue-600 hover:text-white ps-10 p-2 my-1 text-lg font-bold hover:cursor-pointer ${
                  selectedOption === "accomplishments" && "bg-blue-600 text-white"
                }`}
                onClick={() => handleOptionClick("accomplishments")}
              >
                <a>Accomplishments</a>
              </li>
              <li
                className={`hover:bg-blue-600 hover:text-white ps-10 p-2 my-1 text-lg font-bold hover:cursor-pointer ${
                  selectedOption === "updates" && "bg-blue-600 text-white"
                }`}
                onClick={() => handleOptionClick("updates")}
              >
                <a>Updates</a>
              </li>
              <li
                className={`hover:bg-blue-600 hover:text-white ps-10 p-2 my-1 text-lg font-bold hover:cursor-pointer ${
                  selectedOption === "settings" && "bg-blue-600 text-white"
                }`}
                onClick={() => handleOptionClick("settings")}
              >
                <a>Settings</a>
              </li>
              {/* Add other menu items similarly */}
              <li
                className="hover:bg-blue-600 hover:text-white ps-10 p-2 my-1 text-lg font-bold hover:cursor-pointer"
                onClick={() => handleOptionClick("HelpCenter")}
              >
                <a>Help Center</a>
              </li>
              <li className="ps-10 p-4 text-lg font-bold hover:cursor-pointer text-red-600">
                <a href="#" className="flex items-center">
                  Log out <MdOutlineLogout className="ms-3" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger menu for small screen sizes */}
        <div className="sm:hidden w-full z-10">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </button>
          {showMenu && (
            <div className=" bg-white shadow-md rounded-lg w-[90%]">
              <ul className="py-2">
                <li
                  className={`hover:bg-blue-600 hover:text-white my-1 px-4 py-2 font-bold hover:cursor-pointer ${
                    selectedOption === "Profile" && "bg-blue-600 text-white"
                  }`}
                  onClick={() => handleOptionClick("Profile")}
                >
                  Profile
                </li>
                <li
                  className={`hover:bg-blue-600 hover:text-white my-1 px-4 py-2 font-bold hover:cursor-pointer ${
                    selectedOption === "MyCourses" && "bg-blue-600 text-white"
                  }`}
                  onClick={() => handleOptionClick("MyCourses")}
                >
                  My Courses
                </li>
                {/* Add other menu items */}
              </ul>
            </div>
          )}
        </div>

        {/* Main content */}
        <div className="w-[78%]">
          {selectedOption === "MyCourses" ? (
            <Courses />
          ) : (
            showEditComponent ? <EditProfile /> : <MyProfile setShowEditComponent={setShowEditComponent} />
          )}
        </div>
      </div>
    </>
  );
};

export default ForIndividuals;
