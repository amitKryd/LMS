import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
const Signup = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleChaneIcon = () => {
    setShowPassword((data) => !data);
  };
  return (
    <div className="absolute bg-white p-6 rounded-lg w-96 top-10 h-[610px] overflow-y-auto">
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
      <div>
<RadioWithCheck />
      </div>
      <form>
        <div className="mb-4 mt-10">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Email Address / Phone no.
          </label>
          <input
            type="text"
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
              placeholder="Password"
            />
            <span
              onClick={handleChaneIcon}
              className="absolute  right-4 bottom-3 cursor-pointer"
            >
              {showPassword ? <FaRegEye /> : <IoEyeOffOutline />}
            </span>
          </div>
        </div>
        <span className="block text-sm text-blue-500 ">Forget Password?</span>
        <button className="bg-blue-500 hover:bg-blue-600 w-[100%] text-white font-semibold py-2 px-4 mt-7 rounded">
          Login
        </button>
      </form>
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
        <span className="flex-grow text-center">Continue with Linkedin</span>
      </button>
      <div className="flex justify-center items-center mt-4 mb-6">
        <p className="text-gray-500">
          New to TeacherCool?<span className="text-blue-600 ">Signup</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
export const RadioWithCheck = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="flex items-center">
        <input
          type="radio"
          id="option1"
          name="Student"
          value="Student"
          checked={selectedOption === "Student"}
          onChange={() => handleOptionChange("Student")}
          className="hidden"
        />
        <label
          htmlFor="option1"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer mr-2"
        >
          {selectedOption === "option1" && <FaCheck className="text-[white] bg-blue-600 rounded-3xl "/>}
        </label>
        <span className="text-gray-700">Option 1</span>
  
        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={() => handleOptionChange("option2")}
          className="hidden"
        />
        <label
          htmlFor="option2"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer ml-4 mr-2"
        >
          {selectedOption === "option2" && <FaCheck />}
        </label>
        <span className="text-gray-700">Option 2</span>
      </div>
    );
  };

