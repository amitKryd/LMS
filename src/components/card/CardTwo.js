import React from "react";
import { motion } from "framer-motion";
const CardTwo = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-start   gap-5 py-5">
        {props?.data?.map((item, ind) => {
          return (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }} // Scale up and move up when hovered
                // whileTap={{ scale: 0.3 }} // Scale down when tapped (clicked)
                transition={{ duration: 0.9 }} // Smooth transition duration
              >
                <div className="mt-4 border-solid   min-h-16  border border-gray-200 shadow-md rounded-lg">
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
                </div>
              </motion.div>
            </>
          );
        })}
      </div>
      {/* <div className="flex justify-between items-center flex-wrap gap-5 py-5">
  {props?.data?.map((item, ind) => {
    return (
      <motion.div
        key={ind}
        whileHover={{ scale: 1.1 }} // Scale up and move up when hovered
        // whileTap={{ scale: 0.3 }} // Scale down when tapped (clicked)
        transition={{ duration: 0.9 }} // Smooth transition duration
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4" // Adjust number of columns based on screen size
      >
        <div className="mt-4 border-solid w-full min-h-50 border border-gray-200 shadow-md rounded-lg">
          <img
            className="w-full  rounded-t-lg object-contain"
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
        </div>
      </motion.div>
    );
  })}
</div> */}
   
    </>
  );
};

export default CardTwo;
