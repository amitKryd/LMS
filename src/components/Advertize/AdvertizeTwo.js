import React from "react";
import JoinFreeBtn from "../button/PrimaryButton";

const AdvertizeTwo = () => {
  return (
    <>
      <div className=" bg-blue-100 relative py-5 h-[85vh] max-sm:h-auto mb-16 ">
   
     <div className="container mx-auto px-8 max-sm:px-4">
   
     <div className="flex justify-between max-sm:flex-col sm:flex-col xl:flex-row gap-5 ">
       <div className=" flex flex-row gap-0 lg:w-1/2 sm:w-full max-sm:w-full  ">
      <div className="flex flex-col z-20">
    
            <img
            src={process.env.PUBLIC_URL + "/images/group_study.png"}
            alt="no img"
            className="w-[255px] h-[230px] max-sm:h-[130px] relative top-[-25px] max-sm:right-[10px]"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/student2.png"}
            alt="no img"
            className=" max-sm:h-[150px] h-[320px]  relative top-[0px] right-[45px] max-sm:right-[10px] "
          />  
      </div>
      <img
            src={process.env.PUBLIC_URL + "/images/student.png"}
            alt="no img"
            className="w-[300px] max-sm:w-auot max-sm:h-[250px] h-[500px] z-10"
          />
        </div>

        <div className="mt-8 max-ms:mt-4 w-1/2 lg:w-1/2 sm:w-full max-sm:w-full pl-8 max-sm:pl-0">
          <div>
          <h1 className="text-4xl max-sm:text-3xl font-semibold leading-[60px] text-gray-800">
            Learners outcomes on TeacherCool
          </h1>
          <p className="text-lg  py-5 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            suscipit rhoncus nunc id aliquet. Vestibulum ante ipsum primis in
            faucibus
          </p>
          <div>
          <JoinFreeBtn
            title={"Join for free"}
            bgColor={"bg-blue-500"}
            color={"text-white"}
            className="px-[15px]"
            padding="px-4 py-3"
            fontSize="text-lg" 

          />
          </div>

          </div>
        </div>
       </div>

    
     
     </div>
     <img
          src={process.env.PUBLIC_URL + "/images/Ellipse 1.png"}
          alt="ellipe"
          className="absolute top-10 -z-0 max-sm:h-[300px]"
        />
   
      </div>
    </>
  );
};

export default AdvertizeTwo;
