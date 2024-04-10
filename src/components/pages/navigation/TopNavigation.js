import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RoutePaths } from "../../../route/RoutePath";

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const pathName = location?.pathname?.split("/");

  // const handleItemClick = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center pt-1">
          <NavLink
            className={`${
              // activeIndex === 0
              pathName[1] === "individuals"
                ? "active pb-2 border-b-2 border-solid border-blue-500 cursor-pointer h-7"
                : "cursor-pointer  flex-shrink-0 h-7"
            }`}
            // onClick={() => handleItemClick(0)}
            to={RoutePaths.forIndividuals.path}
          >
            For Individuals
          </NavLink>
          <NavLink
            className={`${
              // activeIndex === 1
              pathName[1] === "universities"
                ? "active pb-2 border-b-2 border-solid border-blue-500 cursor-pointer h-7"
                : "cursor-pointer flex-shrink-0 h-7"
            }`}
            // onClick={() => handleItemClick(1)}
            to={RoutePaths.forUniversities.path}
          >
            For Universities
          </NavLink>
          <NavLink
            className={`${
              // activeIndex === 2
              pathName[1] === "corporates"
                ? "active pb-2 border-b-2 border-solid border-blue-500 cursor-pointer h-7"
                : "cursor-pointer flex-shrink-0 h-7"
            }`}
            // onClick={() => handleItemClick(2)}
            to={RoutePaths.forCorporates.path}
          >
            For Corporates
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navigation;
