import React from "react";
import { motion } from "framer-motion";
const CardTwo = (props) => {
  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5  max-sm:m-1 ">
  {props?.data?.map((item, ind) => {
    return (
      <motion.div key={ind} className="mt-4 border-solid min-h-16 border border-gray-200 shadow-md rounded-lg"
        whileHover={{ scale: 1.1 }} 
        // whileTap={{ scale: 0.3 }} 
        transition={{ duration: 0.9 }}
      >
        <img
          className="w-full rounded-t-lg object-fill"
          src={process.env.PUBLIC_URL + `${item?.img}`}
          alt="card-image"
        />
        <div className="py-3 pl-3">
          <h2 className="font-semibold text-sm text-gray-900 pt-3">
            {item?.title}
          </h2>
          <p className="text-sm pt-1 text-gray-600 pr-1">
            {item?.courses} courses
          </p>
        </div>
      </motion.div>
    );
  })}
</div>
    </>
  );
};

export default CardTwo;
