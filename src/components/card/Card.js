import React from "react";
import JoinFreeBtn from "../button/PrimaryButton";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Card = (props) => {
  return (
    <>
      
        {props?.data?.map((item, ind) => {
          return (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }} // Scale up and move up when hovered
                // whileTap={{ scale: 0.3 }} // Scale down when tapped (clicked)
                transition={{ duration: 0.9 }} // Smooth transition duration
              >
                <div className="mt-4 border-solid  w-full max-lg:max-w-[350px] min-h-96  border border-gray-200 shadow-md rounded-lg">
                  <img
                    className="w-full h-72 rounded-t-lg object-cover"
                    src={item?.img}
                    alt="card-image"
                  />

                  <div className="py-3 pl-3">
                    <JoinFreeBtn
                      title={item.btnText}
                      bgColor={"bg-blue-600"}
                      color={"text-white"}
                      className="px-[10px]"
                    />
                    <h2 className="font-semibold text-sm text-gray-900 pt-3">
                      {item?.title}
                    </h2>
                    <p className="text-sm pt-1 text-gray-600 pr-1">
                      {item?.about}
                    </p>
                    <div className="py-2">
                      <span>{item?.rating}</span>
                      <span className="px-2">*</span>
                      <span className="text-gray-600 text-sm">(17k views)</span>
                    </div>
                    <div className="flex  justify-end pr-5">
                      <NavLink to="/" className="text-blue-500">
                        Learn more <span>&raquo;</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          );
        })}
     
    </>
  );
};

export default Card;
