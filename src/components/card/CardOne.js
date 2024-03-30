import React from "react";
import JoinFreeBtn from "../button/PrimaryButton";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const CardOne = (props) => {
  return (
    <>
      <div className="flex gap-12 items-center max-lg:flex-wrap max-lg:justify-center ">
        {props?.dataOne?.map((item, ind) => {
          return (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }} // Scale up and move up when hovered
                transition={{ duration: 0.5 }} // Smooth transition duration
              >
                <div className="mt-4 border-solid  w-full max-lg:max-w-[350px] min-h-50  border border-gray-200 shadow-md rounded-lg">
                  <img
                    className="w-full max-h-30 rounded-t-lg object-contain"
                    src={process.env.PUBLIC_URL + `/images/${item?.img}`}
                    alt="card-image"
                  />

                  <div className="py-3 pl-3">
                    <h2 className="font-semibold text-sm text-gray-900 pt-3">
                      {item?.title}
                    </h2>
                    <p className="text-sm pt-1 text-gray-600 pr-1">
                      {item?.about}
                    </p>
                    <div className="pt-5 pb-3">
                      <JoinFreeBtn
                        title={"Begineer Course"}
                        bgColor={"bg-gray-600"}
                        color={"text-white"}
                        className="px-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CardOne;
