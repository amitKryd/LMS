import React from 'react'
import {  FaCheck } from "react-icons/fa6";
const RadioWithCheck = (props) => {
    const {selectedOption,handleOptionChange} =  props
  return (
    
        
    <div className="flex items-center flex-wrap">
      <div className="flex items-center mr-3 mb-2">
        <input
          type="radio"
          id="Student"
          name="occupation"
          value="Student"
          checked={selectedOption === "Student"}
          onChange={() => handleOptionChange("Student")}
          className="hidden"
        />
        <label
          htmlFor="Student"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer mr-2"
        >
          {selectedOption === "Student" && (
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
          checked={selectedOption === "Instructor"}
          onChange={() => handleOptionChange("Instructor")}
          className="hidden"
        />
        <label
          htmlFor="instructor"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer mr-2"
        >
          {selectedOption === "Instructor" && (
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
          checked={selectedOption === "Universities"}
          onChange={() => handleOptionChange("Universities")}
          className="hidden"
        />
        <label
          htmlFor="Universities"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer mr-2"
        >
          {selectedOption === "Universities" && (
            <FaCheck className="text-[white] bg-blue-600 rounded-full" />
          )}
        </label>
        <span className="text-gray-700">Universities</span>
      </div>

      <div className="flex items-center mb-2">
        <input
          type="radio"
          id="Corporates"
          name="Corporates"
          value="Corporates"
          checked={selectedOption === "Corporates"}
          onChange={() => handleOptionChange("Corporates")}
          className="hidden"
        />
        <label
          htmlFor="Corporates"
          className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer mr-2"
        >
          {selectedOption === "Corporates" && (
            <FaCheck className="text-[white] bg-blue-600 rounded-full" />
          )}
        </label>
        <span className="text-gray-700">Corporates</span>
      </div>
    
    </div>
  )
}

export default RadioWithCheck