import React from "react";

const JoinFreeBtn = (props) => {
  const { title, bgColor, color, border, padding, fontSize } = props;
  return (
    <>
      <button
        className={`${bgColor} ${color} ${border} ${padding} ${fontSize} rounded-md text-base px-5 py-2 cursor-pointer hover:bg-blue-600 hover:text-white`}
      >
        {title}
      </button>
    </>
  );
};
export default JoinFreeBtn;
