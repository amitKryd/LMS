import React from "react";
import JoinFreeBtn from "../button/PrimaryButton";

const StudentsPlans = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-300 pb-20">
      <h1 className="text-4xl font-bold text-center pt-20 pb-20">
        Choose the plan that's right for your career growth
      </h1>
      <div className="flex items-center justify-center text-center">
        <div className="border bg-white p-4 rounded-md">
          <h4 className="pt-4 pb-4 text-lg font-bold">Single Course program</h4>
          <p className="pt-4 pb-4">
            Learn a single topic or skill and earn a credential
          </p>
          <h3 className="pt-4 pb-4 text-4xl font-semibold">
            {" "}
            ₹4,876 - ₹6,367/month
          </h3>
          <p className="pt-4 pb-4">
            Visit an individual course or Specialization page to purchase.
          </p>
          <hr className="border"></hr>
          <p className="pt-4 pb-4">
            Access all courses within the learning program
          </p>
          <hr className="border"></hr>

          <p className="pt-4 pb-4">Earn a certificate upon completion</p>
        </div>
        <div className="border-none bg-white p-4 rounded-md">
          <h4 className="pt-4 pb-4 text-lg font-bold">
            Multiple Course program
          </h4>
          <h3 className="pt-4 pb-4 text-4xl font-semibold"> ₹4,876 /month</h3>
          <JoinFreeBtn
            title={"Start 7-day free trial"}
            bgColor={"bg-blue-600"}
            color={"text-white"}
            className="px-[10px]"
          />
          <hr className="border"></hr>
          <p className="pt-4 pb-4">
            Access all courses within the learning program
          </p>
          <hr className="border"></hr>

          <p className="pt-4 pb-4">Earn a certificate upon completion</p>
        </div>
      </div>
    </div>
  );
};

export default StudentsPlans;
