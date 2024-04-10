import React from "react";
import BottomNav from "../../navigation/BottomNavigation";
import { MdOutlineLogout } from "react-icons/md";
const ForUniversities = () => {
  return (
    <>
      <BottomNav />
      <div className="container w-[90%] min-h-fit border-2 border-gray-200 flex justify-center mx-auto mt-10">
        <div className="w-[20%] border border-gray-200">
          <div className="flex items-center justify-center flex-col p-4">
            <img
              src={process.env.PUBLIC_URL + "/images/profile.png"}
              alt="no img"
            />
            <h3 className="mt-2 text-md font-semibold">Jasmin Kaur</h3>
          </div>
          <div className="mt-5 mb-20">
            <ul>
              <li className="hover:bg-blue-600 hover:text-white ps-10 p-4 text-xl hover:cursor-pointer">
                <a>Profile</a>
              </li>
              <li className="hover:bg-blue-600 hover:text-white ps-10 p-4 text-xl hover:cursor-pointer">
                <a>My Course</a>
              </li>{" "}
              <li className="hover:bg-blue-600 hover:text-white ps-10 p-4 text-xl hover:cursor-pointer">
                <a>My Subscriptions</a>
              </li>{" "}
              <li className="hover:bg-blue-600 hover:text-white ps-10 p-4 text-xl hover:cursor-pointer">
                <a>Accomplishments</a>
              </li>{" "}
              <li className="hover:bg-blue-600 hover:text-white ps-10 p-4 text-xl hover:cursor-pointer">
                <a>Updates</a>
              </li>
              <li className="hover:bg-blue-600 hover:text-white ps-10 p-4 text-xl hover:cursor-pointer">
                <a>Settings</a>
              </li>
              <li className="hover:bg-blue-600 hover:text-white ps-10 p-4 text-xl hover:cursor-pointer">
                <a>Help Center</a>
              </li>
              <li className="ps-10 p-4 text-xl hover:cursor-pointer text-red-600">
                <a className="flex items-center">
                  Log out <MdOutlineLogout className="ms-3" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[80%]"></div>
      </div>
    </>
  );
};

export default ForUniversities;
