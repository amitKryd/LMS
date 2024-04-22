import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const InstructorMiddleSignup = (props) => {
  const { nextInstructorFinalPage, instructorSignup, setInstructorSignup } =
    props;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (value.trim() !== "") {
      setInstructorSignup((prevState) => ({
        ...prevState,
        [name]: name == "image" ? URL.createObjectURL(files[0]) : value,
      }));
    } else {
      setInstructorSignup((prevState) => ({
        ...prevState,
        [name]: name == "image" ? "" : "",
      }));
    }
  };
  return (
    <div className="mt-6">
      <form>
        <div className="flex items-center justify-around gap-5">
          <div className="relative w-[159px] h-[156px] rounded-full border-2">
            <label>
              <p className="absolute z-10  right-3 m-2 bg-[white] cursor-pointer">
                <FiEdit2 className="text-gray-400 bg-[white]" />
              </p>
              <input
                type="file"
                accept="image/*"
                name="image"
                className="hidden"
                onChange={handleChange}
              />
            </label>
            <div className="absolute text-sm text-gray-600 text-wrap text-center bottom-12">
              {instructorSignup?.image ? (
                <img
                  src={instructorSignup?.image}
                  className="relative top-12 left-0 border-none rounded-full w-[155px] h-[155px]"
                  alt="no image"
                />
              ) : (
                " Image size should be 150x200"
              )}
            </div>
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
            <select
              name="country"
              value={instructorSignup.country}
              onChange={handleChange}
              className="block appearance-none border bg-white border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0 text-gray-600 text-sm"
            >
              <option
                value=""
                disabled
                selected
                className="text-gray-600 text-sm"
              >
                Countries
              </option>
              <option
                value="india"
                selected={instructorSignup.country === "india"}
                className="text-gray-600 text-sm"
              >
                India
              </option>
              <option
                value="australia"
                selected={instructorSignup.country === "australia"}
                className="text-gray-600 text-sm"
              >
                Australia
              </option>
              <option
                value="United States"
                selected={instructorSignup.country === "United States"}
                className="text-gray-600 text-sm"
              >
                United States
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

        <div className="mb-4 mt-6">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Contact number
          </label>

          <PhoneInput
            country="in"
            name="studentNumber"
            value={instructorSignup.studentNumber}
            onChange={(phone) =>
              setInstructorSignup({ ...instructorSignup, studentNumber: phone })
            }
            countryCodeEditable={false}
            placeholder="mobile number"
            onlyCountries={["in", "us", "au"]}
            inputStyle={{ width: "100%", height: "42px", paddingLeft: "42px" }}
            dropdownStyle={{ maxWidth: "250px" }}
          />
          {/* <div className="flex gap-4 ">
            <span className="flex items-center cursor-pointer pl-2 text-gray-500 border bg-[white] border-gray-300 rounded-md px-3 py-2">
              +91 <IoIosArrowDown className="block ml-1" />
            </span>

            <input
              type="tel"
              name="contactNumber"
              value={instructorSignup.contactNumber}
              onChange={handleChange}
              className="border bg-[white] border-gray-300 rounded-md w-full px-3 py-2  focus:outline-none"
              placeholder="9999999999"
            />
          </div> */}
        </div>

        <div>
          <div className="mb-1">
            <label className="block text-sm text-gray-900 font-semibold mb-4">
              Password
            </label>
            <div className=" relative">
              <input
                type={props.showPassword ? "text" : "password"}
                name="password"
                value={instructorSignup.password}
                onChange={handleChange}
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

        <div className="mb-1 mt-4">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Confirm Password
          </label>
          <div className=" relative">
            <input
              type="password"
              name="confirmPassword"
              value={instructorSignup.confirmPassword}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter password"
            />
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semi py-2 px-4 mt-7 rounded"
          onClick={nextInstructorFinalPage}
        >
          <span className="pr-2">Next </span> <span>&raquo;</span>
        </button>
      </form>
    </div>
  );
};

export default InstructorMiddleSignup;
