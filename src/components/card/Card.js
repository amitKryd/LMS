import React from "react";
import JoinFreeBtn from "../button/PrimaryButton";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="flex  gap-12">
        {props?.data?.map((item, ind) => {
          return (
            <>
              <div className="mt-4 border-solid  w-72 min-h-96  border border-gray-200 shadow-md rounded-lg">
                <img
                  className="w-72 h-48 object-cover rounded-t-lg"
                  src={item?.img}
                  alt="card-image"
                />
                <div className="py-3 pl-3">
                  <JoinFreeBtn
                    title={"Begineer Course"}
                    className="px-[10px]"
                  />
                  <h2 className="font-semibold text-sm text-gray-900 pt-3">
                  {item?.title}
                </h2>
                <p className="text-sm pt-1 text-gray-600">{item?.about}</p>
                <div className="py-2">
                  <span >{item?.rating}</span><span className="px-2">*</span><span className="text-gray-600 text-sm">(17k views)</span>
                </div>
                <div className="flex  justify-end pr-5">
                  <NavLink to='/' className="text-blue-500">Learn more <span>&raquo;</span></NavLink>
                </div>
                
                </div>
                
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
