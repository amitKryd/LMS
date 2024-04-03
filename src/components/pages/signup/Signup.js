import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";
import { FaRegEye, FaCheck } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Signup = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [nextModal, setNextModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Student");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleChaneIcon = () => {
    setShowPassword((data) => !data);
  };
  const NavigateOnLogin = (e) => {
    props.setShowLoginModal(true)
    props.setShowSignUpPage(false)
  }
  const NextFunction = (e) => {
    e.preventDefault();
    setNextModal((data) => !data);
  };
  return (
    <div className={`absolute bg-white p-6 rounded-lg  top-10 h-[88vh] overflow-y-auto  ${props.instructorJoin ? 'w-1/2' : 'w-96'}`}>
      <div
        className="flex justify-end cursor-pointer"
        onClick={() => props.setShowSignUpPage(false)}
      >
        <img src={process.env.PUBLIC_URL + "/images/x.png"} alt="cross" />
      </div>

      <div className="flex justify-center mt-[-12px] flex-col items-center">
        <h2 className="font-semibold text-gray-900 text-2xl">Sign Up</h2>

        <div className="w-[220px] m-auto ">
          <p className="text-center text-gray-500 text-sm">
            lorem shhjsh jaskui hksakkj jhasysg usjushui sghg kjuuwu
          </p>
        </div>
      </div>
      {nextModal === false && (
        <div className="mt-8">
          <p className="block text-sm text-gray-900 font-semibold mb-4">
            Select Category
          </p>
          <RadioWithCheck
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
          />
        </div>
      )}
      {nextModal === false && selectedOption === "Student" ? (
        <form>
          <div className="mb-4 mt-4">
            <label className="block text-sm text-gray-900 font-semibold mb-4">
              Full Name
            </label>
            <input
              type="text"
              className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4 mt-1">
            <label className="block text-sm text-gray-900 font-semibold mb-4">
              Email Address
            </label>
            <input
              type="email"
              className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm text-gray-900 font-semibold mb-4">
              Password
            </label>
            <div className=" relative">
              <input
                type={showPassword ? "password" : "text"}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Create password"
              />
              <span
                onClick={handleChaneIcon}
                className="absolute  right-4 bottom-3 cursor-pointer"
              >
                {showPassword ? <FaRegEye /> : <IoEyeOffOutline />}
              </span>
            </div>
          </div>
          <span className="block text-sm text-gray-500 ">
            Between 8 and 72 characters
          </span>
          <button
            onClick={NextFunction}
            className="bg-blue-500 hover:bg-blue-600 w-[100%] text-white font-semibold py-2 px-4 mt-7 rounded"
          >
            <span className="pr-2">Next </span> >>
          </button>
        </form>
      ) : nextModal === false && selectedOption === "Instructor" ? (
        <form>
          <div className="mb-4 mt-4">
            <label className="block text-sm text-gray-900 font-semibold mb-4">
              Full Name
            </label>
            <input
              type="text"
              className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4 mt-1">
            <label className="block text-sm text-gray-900 font-semibold mb-4">
              Email Address
            </label>
            <input
              type="email"
              className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="name@gmail.com"
            />
          </div>

          <button
            onClick={NextFunction}
            className="bg-blue-500 hover:bg-blue-600 w-[100%] text-white font-semibold py-2 px-4 mt-7 rounded"
          >
            <span className="pr-2">Next </span> >>
          </button>
        </form>
      ) : nextModal === false && selectedOption === "Universities" ? (
        <p>Hello Universities </p>
      ) : nextModal === false ? (
        <p>Hello Corporates</p>
      ) : (
        ""
      )}
      {nextModal === true && <NextForm selectedOption={selectedOption} handleChaneIcon={handleChaneIcon} showPassword={showPassword} />}
      {nextModal === false && (
        <div>
          <div className="mb-4 mt-7 flex">
            <hr className="border-gray-300 my-4 inline-block w-1/2" />
            <span className="text-gray-600 mx-3 my-1">or</span>
            <hr className="border-gray-300 my-4 inline-block w-1/2" />
          </div>

          <button className="bg-white hover:bg-blue-600 hover:text-white w-full border border-gray-400 font-semibold py-2 px-4 mt-7 rounded flex items-center justify-start">
            <span className="flex-shrink-0">
              <FcGoogle />
            </span>
            <span className="flex-grow text-center">Continue with Google</span>
          </button>
          <button className="bg-white hover:bg-blue-600 hover:text-white w-full border border-gray-400 font-semibold py-2 px-4 mt-4 rounded flex items-center justify-start">
            <span className="flex-shrink-0">
              <ImLinkedin />
            </span>
            <span className="flex-grow text-center">
              Continue with Linkedin
            </span>
          </button>
        </div>
      )}
      <div className="flex justify-center items-center mt-4 mb-6">
        <p className="text-gray-500">
          Already on TeacherCool?<span className="text-blue-600 cursor-pointer" onClick={NavigateOnLogin}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

export const RadioWithCheck = (props) => {
  return (
    <div className="flex items-center flex-wrap">
      <div className="flex items-center mr-3 mb-2">
        <input
          type="radio"
          id="Student"
          name="occupation"
          value="Student"
          checked={props.selectedOption === "Student"}
          onChange={() => props.handleOptionChange("Student")}
          className="hidden"
        />
        <label
          htmlFor="Student"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer mr-2"
        >
          {props.selectedOption === "Student" && (
            <FaCheck className="text-[white] bg-blue-600 rounded-full" />
          )}
        </label>
        <span className="text-gray-700">Student</span>
      </div>

      <div className="flex items-center mr-3 mb-2">
        <input
          type="radio"
          id="instructor"
          name="occupation"
          value="Instructor"
          checked={props.selectedOption === "Instructor"}
          onChange={() => props.handleOptionChange("Instructor")}
          className="hidden"
        />
        <label
          htmlFor="instructor"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer mr-2"
        >
          {props.selectedOption === "Instructor" && (
            <FaCheck className="text-[white] bg-blue-600 rounded-full" />
          )}
        </label>
        <span className="text-gray-700">Instructor</span>
      </div>

      <div className="flex items-center mr-3 mb-2">
        <input
          type="radio"
          id="Universities"
          name="occupation"
          value="Universities"
          checked={props.selectedOption === "Universities"}
          onChange={() => props.handleOptionChange("Universities")}
          className="hidden"
        />
        <label
          htmlFor="Universities"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer mr-2"
        >
          {props.selectedOption === "Universities" && (
            <FaCheck className="text-[white] bg-blue-600 rounded-full" />
          )}
        </label>
        <span className="text-gray-700">Universities</span>
      </div>

      <div className="flex items-center mb-2">
        <input
          type="radio"
          id="Corporates"
          name="occupation"
          value="Corporates"
          checked={props.selectedOption === "Corporates"}
          onChange={() => props.handleOptionChange("Corporates")}
          className="hidden"
        />
        <label
          htmlFor="Corporates"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer mr-2"
        >
          {props.selectedOption === "Corporates" && (
            <FaCheck className="text-[white] bg-blue-600 rounded-full" />
          )}
        </label>
        <span className="text-gray-700">Corporates</span>
      </div>
    </div>
  );
};

export const NextForm = (props) => {
  return (
    <div className="mt-6">
      <form>
        <div className="flex items-center justify-around gap-5">
          <div className="relative w-[159px] h-[156px] rounded-full border-2">
            <p className="absolute top-0 right-3 m-2 bg-[white] cursor-pointer">
              <FiEdit2 className="text-gray-400 bg-[white]" />
            </p>
            <p className="absolute text-sm text-gray-600 text-wrap text-center bottom-12">
              Image size should be 150x200
            </p>
          </div>
          <div className="cursor-pointer">
            <p className="text-sm text-gray-900 font-semibold">
              Upload Picture
            </p>
            <span className="text-gray-600 text-sm">(Non Mandatory)</span>
          </div>
        </div>
        <div className="mb-4 mt-6">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Country
          </label>
          <div className="relative">
            <select className="block appearance-none border bg-white border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0 text-gray-600 text-sm">
              <option
                value=""
                disabled
                selected
                className="text-gray-600 text-sm"
              >
                Countries
              </option>
              <option value="1" className="text-gray-600 text-sm">
                Option 1
              </option>
              <option value="2" className="text-gray-600 text-sm">
                Option 2
              </option>
              <option value="3" className="text-gray-600 text-sm">
                Option 3
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 13.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 1.414l-4 4z"/></svg> */}
              <img
                //   className="w-full max-h-30 rounded-t-lg object-contain"
                src={process.env.PUBLIC_URL + `/images/Chevron Down.png`}
                alt="drop-image"
              />
            </div>
          </div>
        </div>
        {props.selectedOption === "Student" ? (
          <div className="mb-4 mt-1">
            <label className="block text-sm text-gray-900 font-semibold mb-4">
              Currency
            </label>
            <div className="relative">
              <select className="block appearance-none border bg-white border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0 text-gray-600 text-sm">
                <option value="" disabled selected text-gray-600 text-sm>
                  Currency
                </option>
                <option value="1" text-gray-600 text-sm>
                  Option 1
                </option>
                <option value="2" text-gray-600 text-sm>
                  Option 2
                </option>
                <option value="3" text-gray-600 text-sm>
                  Option 3
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 13.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 1.414l-4 4z"/></svg> */}
                <img
                  //   className="w-full max-h-30 rounded-t-lg object-contain"
                  src={process.env.PUBLIC_URL + `/images/Chevron Down.png`}
                  alt="drop-image"
                />
              </div>
            </div>
          </div>
        ) : props.selectedOption === "Instructor" ? (
          <div className="mb-4 mt-6">
            <label className="block text-sm text-gray-900 font-semibold mb-4">
              Contact number
            </label>
            <div className="flex gap-4 ">
              <span className="flex items-center cursor-pointer pl-2 text-gray-500 border bg-[white] border-gray-300 rounded-md px-3 py-2">
                +91 <IoIosArrowDown className="block ml-1" />
              </span>

              <input
                type="tel"
                className="border bg-[white] border-gray-300 rounded-md w-full px-3 py-2  focus:outline-none"
                placeholder="9999999999"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {props.selectedOption === "Student" ?
        <div className="mb-4 mt-1">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Referal Code
          </label>
          <input
            type="text"
            className="border bg-[white] text-gray-600 text-sm border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Referal Code"
          />
        </div>: props.selectedOption === "Instructor"?
        <div>
        <div className="mb-1">
        <label className="block text-sm text-gray-900 font-semibold mb-4">
          Password
        </label>
        <div className=" relative">
          <input
            type={props.showPassword ? "password" : "text"}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Create password"
          />
          <span
            onClick={props.handleChaneIcon}
            className="absolute  right-4 bottom-3 cursor-pointer"
          >
            {props.showPassword ? <FaRegEye /> : <IoEyeOffOutline />}
          </span>
        </div>
      </div>
      <span className="block text-sm text-gray-500 ">
        Between 8 and 72 characters
      </span>
      </div>
      :""
    }
    {props.selectedOption === "Instructor"?
    <div className="mb-1 mt-4">
    <label className="block text-sm text-gray-900 font-semibold mb-4">
     Confirm Password
    </label>
    <div className=" relative">
      <input
        type="password" 
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
        placeholder="Enter password"
      />
      
    </div>
  </div>:""
}
        <div className="flex items-center justify-center">
          <input type="checkbox" />
          <p className="text-gray-600 text-[12px] pl-2">
            I agree to the TeacherCool{" "}
            <span className="text-blue-600 text-[12px]">
              Privacy policies & Terms
            </span>
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semi py-2 px-4 mt-7 rounded">
          Join for Free
        </button>
      </form>
    </div>
  );
};
