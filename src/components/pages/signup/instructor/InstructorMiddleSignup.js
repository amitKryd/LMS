import React from 'react'
import { FiEdit2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
const InstructorMiddleSignup = (props) => {
    const {nextInstructorFinalPage,setInstructorMiddleFormData,instructorMiddleformData} = props
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInstructorMiddleFormData((prevState) => ({
        ...prevState,
        [name]: value, 
      }));
    };
  return (
    <div className="mt-6">
      <form>
        <div className="flex items-center justify-around gap-5">
          <div className="relative w-[159px] h-[156px] rounded-full border-2">
            <p className="absolute top-0 right-3 m-2 bg-[white] cursor-pointer">
              <FiEdit2 className="text-gray-400 bg-[white]" />
            </p>
            <p className="absolute text-sm text-gray-600 text-wrap text-center bottom-12" name="image" 
            value={instructorMiddleformData.image}
            onChange={handleChange}>
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
            <select name="country" 
            value={instructorMiddleformData.country}
            onChange={handleChange}  className="block appearance-none border bg-white border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0 text-gray-600 text-sm">
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
                name="contactNumber" 
            value={instructorMiddleformData.contactNumber}
            onChange={handleChange}
                className="border bg-[white] border-gray-300 rounded-md w-full px-3 py-2  focus:outline-none"
                placeholder="9999999999"
              />
            </div>
          </div>
        
         
            <div>
              <div className="mb-1">
                <label className="block text-sm text-gray-900 font-semibold mb-4">
                  Password
                </label>
                <div className=" relative">
                  <input
                    type={props.showPassword ? "password" : "text"}
                    name="password" 
            value={instructorMiddleformData.password}
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
                value={instructorMiddleformData.confirmPassword}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Enter password"
              />

            </div>
          </div> 
        <div className="flex items-center justify-center">
          <input type="checkbox" />
          <p className="text-gray-600 text-[12px] pl-2">
            I agree to the TeacherCool{" "}
            <span className="text-blue-600 text-[12px]">
              Privacy policies & Terms
            </span>
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semi py-2 px-4 mt-7 rounded" onClick={nextInstructorFinalPage}>
        <span className="pr-2">Next </span> <span>&raquo;</span>
        </button>
      </form>
    </div>
  )
}

export default InstructorMiddleSignup