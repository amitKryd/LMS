import React from "react";

const AdvertizeTwo = () => {
  return (
    <>
      <div className="w-full bg-blue-100 h-[509px] relative mb-4">
         <div className="w-[577px] min-h-[572px] border-2 border-red-200 z-10 left-10  bottom-4 relative">

         </div>
          <div className="w-[564px] min-h-[276px] border-2 border-red-200 absolute top-[23%] left-[50%] flex items-center justify-center flex-wrap">
            <h1 className="text-4xl text-center font-bold">Learners outcomes on TeacherCool</h1>
            <p className="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              suscipit rhoncus nunc id aliquet. Vestibulum ante ipsum primis in
              faucibus
            </p>
          </div>
        <img
          src={process.env.PUBLIC_URL + "/images/Ellipse 1.png"}
          alt="ellipe"
          className="absolute top-40"
        />
      </div>
    </>
  );
};

export default AdvertizeTwo;
