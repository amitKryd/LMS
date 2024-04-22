import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const StudentSignup = (props) => {
  const {
    handleChaneIcon,
    studentNextFunction,
    studentFormValues,
    setStudentFormValues,
    showPassword,
  } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value.trim() !== "") {
      setStudentFormValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setStudentFormValues((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    }
  };

  return (
    <div>
      <form>
        <div className="mb-4 mt-4">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Full Name
          </label>
          <input
            type="text"
            name="studentName"
            value={studentFormValues.studentName}
            onChange={handleChange}
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
            name="studentEmail"
            value={studentFormValues.studentEmail}
            onChange={handleChange}
            className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="name@gmail.com"
          />
        </div>
        <div className="mb-4 mt-1">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Phone Number
          </label>
          <PhoneInput
            country="in"
            name="studentNumber"
            value={studentFormValues.studentNumber}
            onChange={(phone) =>
              setStudentFormValues({ ...studentFormValues, studentNumber: phone })
            }
            countryCodeEditable={false}
            placeholder="ph number"
            onlyCountries={["in", "us", "au"]}
            inputStyle={{ width: "100%", height: "42px", paddingLeft: "42px" }}
            dropdownStyle={{ maxWidth: "250px" }}
          />
        </div>
        <div className="mb-1">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Password
          </label>
          <div className=" relative">
            <input
              type={showPassword ? "text" : "password"}
              name="studentPassword"
              value={studentFormValues.studentPassword}
              onChange={handleChange}
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
          onClick={studentNextFunction}
          className="bg-blue-500 hover:bg-blue-600 w-[100%] text-white font-semibold py-2 px-4 mt-7 rounded"
        >
          <span className="pr-2">Next </span> <span>&raquo;</span>
        </button>
      </form>
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
          <span className="flex-grow text-center">Continue with Linkedin</span>
        </button>
      </div>
    </div>
  );
};

export default StudentSignup;
