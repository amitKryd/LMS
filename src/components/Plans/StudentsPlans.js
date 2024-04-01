import React from "react";
import JoinFreeBtn from "../button/PrimaryButton";
import { MdCheck } from "react-icons/md";
const StudentsPlans = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-300 pb-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center pt-20 pb-20">
          Choose the plan that's right for your career growth
        </h1>
        <div className="flex justify-center lg:flex-row sm:flex-col max-sm:flex-col sm:gap-4 max-sm:gap-4 lg:gap-0 text-center">
          <div className="border h-fit bg-white p-4 mt-6 rounded-md">
            <h4 className="pt-2 pb-2 text-lg font-bold">
              Single Course program
            </h4>
            <p className="pb-4 pt-4">
              Learn a single topic or skill and earn a <br />
              credential
            </p>
            <div className="pb-4 pt-4">
              <span className="text-4xl font-semibold"> ₹4,876 - ₹6,367</span>
              <span>/month</span>
            </div>
            <p className="pt-4 pb-20 text-sm">
              Visit an individual course or <br /> Specialization page to
              purchase.
            </p>
            <hr className="border"></hr>
            <p className="pb-4 pt-4 flex text-start">
              <MdCheck className="text-blue-600 text-xl me-2" /> Access all
              courses within the learning <br /> program
            </p>
            <hr className="border"></hr>
            <p className="pb-4 pt-4 flex text-start">
              <MdCheck className="text-blue-600 text-xl me-2" /> Earn a
              certificate upon completion
            </p>
          </div>

          <div className="border-2 border-blue-600 bg-blue-600 rounded-lg">
            <h4 className="text-white">Most Popular</h4>
            <div className="border-none bg-white p-4 rounded-md">
              <h4 className="text-lg font-bold">Multiple Course program</h4>
              <p className="pb-4 pt-4">
                Complete multiple courses and earn <br />
                credentials in the short term
              </p>
              <div className="pb-4 pt-4">
                <span className="text-4xl font-semibold me-2"> ₹4,876</span>
                <span>/month</span>
              </div>
              <JoinFreeBtn
                title={"Start 7-day free trial"}
                bgColor={"bg-blue-600"}
                color={"text-white"}
                className="px-[10px]"
              />
              <p className="pt-4 pb-20">Cancel anytime</p>
              <hr className="border"></hr>
              <p className="pb-4 pt-4 flex text-start">
                <MdCheck className="text-blue-600 text-xl me-2" /> Access 7,000+
                courses and <br /> Specializations from 170+ leading <br />{" "}
                companies and universities
              </p>

              <hr className="border"></hr>
              <p className="pb-4 pt-4 flex">
                <MdCheck className="text-blue-600 text-xl me-2" /> Earn
                unlimited certificates
              </p>
              <hr className="border"></hr>
              <p className="pb-4 pt-4 flex text-start">
                <MdCheck className="text-blue-600 text-xl me-2" /> Learn
                job-relevant skills and tools <br /> with <br /> 1,000+ applied
                projects and hands-on <br /> labs from industry experts
              </p>
              <hr className="border"></hr>
              <p className="pb-4 pt-4 flex text-start">
                <MdCheck className="text-blue-600 text-xl me-2" /> Choose from
                more than 15 <br /> Professional <br /> Certificate programs
                from industry <br /> leaders like Google, Facebook, and <br />
                more
              </p>
              <p></p>
            </div>
          </div>

          <div className="border h-fit bg-white p-4 mt-6 rounded-md">
            <h4 className="pt-2 pb-2 text-lg font-bold">
              Multiple Course program
            </h4>
            <p className="pt-2 pb-2">
              Combine flexibility and savings with long-term <br /> learning
              goals
            </p>
            <div className="pb-4 pt-4">
              <span className="text-4xl font-semibold me-2"> ₹33,121</span>
              <span>/year</span>
            </div>
            <JoinFreeBtn
              title={"Try TeacherCool Plus Annual"}
              bgColor={"bg-none"}
              color={"text-blue-600"}
              className="px-[12px] "
              border={"border border-blue-700"}
            />
            <p className="pt-4 pb-20">14-day money-back guarantee</p>
            <hr className="border"></hr>
            <p className="text-start pt-4 pb-4">
              Everything included in the monthly plan,<br/> plus:
            </p>
            <p className="pb-4 pt-4 flex text-start">
              <MdCheck className="text-blue-600 text-xl me-2" />
              Save when you pay up front for the  year
            </p>
            <hr className="border"></hr>
            <p className="pb-4 pt-4 flex text-start">
              <MdCheck className="text-blue-600 text-xl" />
              Enjoy maximum flexibility to achieve <br /> work/life balance and
              learn at your <br /> own pace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPlans;
