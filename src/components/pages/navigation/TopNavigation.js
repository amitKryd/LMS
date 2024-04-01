import React, { useState } from "react";
// import "../../css/navigation.css";
const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center pt-1">
          <p
            className={`${
              activeIndex === 0
                ? "active pb-2 border-b-2 border-solid border-blue-500 cursor-pointer h-7"
                : "cursor-pointer  flex-shrink-0 h-7"
            }`}
            onClick={() => handleItemClick(0)}
          >
            For Individuals
          </p>
          <p
            className={`${
              activeIndex === 1
                ? "active pb-2 border-b-2 border-solid border-blue-500 cursor-pointer h-7"
                : "cursor-pointer flex-shrink-0 h-7"
            }`}
            onClick={() => handleItemClick(1)}
          >
            For Universities
          </p>
          <p
            className={`${
              activeIndex === 2
                ? "active pb-2 border-b-2 border-solid border-blue-500 cursor-pointer h-7"
                : "cursor-pointer flex-shrink-0 h-7"
            }`}
            onClick={() => handleItemClick(2)}
          >
            For Corporates
          </p>
        </div>
      </div>
    </>
  );
};
export default Navigation;
