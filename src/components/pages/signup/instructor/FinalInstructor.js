import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";

const FinalInstructor = (props) => {
    const {finalInstructorformData,setFinalInstructorformData} = props
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFinalInstructorformData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
  return (
    <div>
      <form className="grid grid-cols-2  gap-4 w-full max-sm:grid-cols-1">
        <div className=" mt-6">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Highest Qualification
          </label>
          <div className="relative">
            <select name="qualification"
              value={finalInstructorformData.qualification}
              onChange={handleChange} className="block appearance-none border bg-white  border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0  text-gray-600 text-sm">
              <option value="" disabled selected className="text-gray-600 text-sm">
                Select Qualification
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
              <img
                src={process.env.PUBLIC_URL + `/images/Chevron Down.png`}
                alt="drop-image"
              />
            </div>
          </div>
        </div>
        <div className="max-sm:mt-0 mt-6">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Available Hours
          </label>
          <div className="relative ">
            <select name="hours"
              value={finalInstructorformData.hours}
              onChange={handleChange}  className="block appearance-none border bg-white border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0 text-gray-600 text-sm">
              <option value="" disabled selected className="text-gray-600 text-sm">
                Select Hours
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
              <img
                src={process.env.PUBLIC_URL + `/images/Chevron Down.png`}
                alt="drop-image"
              />
            </div>
          </div>
        </div>
        <div className=" mt-0">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Expected Income
          </label>
          <input
            type="text"
            name="income"
              value={finalInstructorformData.income}
              onChange={handleChange}
            className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full  text-gray-600 text-sm"
            placeholder="Expectation on Income"
          />
        </div>
        <div className=" mt-0">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Currency
          </label>
          <div className="relative">
            <select name="currency"
              value={finalInstructorformData.currency}
              onChange={handleChange} className="block appearance-none border bg-white border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0 text-gray-600 text-sm">
              <option value="" disabled selected className="text-gray-600 text-sm">
                Select Currency
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
              <img
                src={process.env.PUBLIC_URL + `/images/Chevron Down.png`}
                alt="drop-image"
              />
            </div>
          </div>
        </div>
        <div className=" mt-0">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Category
          </label>
          <div className="relative">
            <select  name="category"
              value={finalInstructorformData.category}
              onChange={handleChange} className="block appearance-none border bg-white border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0 text-gray-600 text-sm">
              <option value="" disabled selected className="text-gray-600 text-sm">
                Select your Category
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
              <img
                src={process.env.PUBLIC_URL + `/images/Chevron Down.png`}
                alt="drop-image"
              />
            </div>
          </div>
        </div>
        <div className=" mt-0">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Subject Specialization
          </label>
          <div className="relative">
            <select name="specialization"
              value={finalInstructorformData.specialization}
              onChange={handleChange} className="block appearance-none border bg-white border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0 text-gray-600 text-sm">
              <option value="" disabled selected className="text-gray-600 text-sm">
                Select your Specialization
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
              <img
                src={process.env.PUBLIC_URL + `/images/Chevron Down.png`}
                alt="drop-image"
              />
            </div>
          </div>
        </div>
        <div className="mb-0 mt-0 relative">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Upload ID Proof
          </label>
          <input
            type="text"
            name="idProof"
            value={finalInstructorformData.idProof}
            onChange={handleChange}
            className="border bg-[white] border-gray-300 text-gray-600 text-sm rounded-md px-3 py-2 w-full"
            placeholder="Upload Id proof here"
          />
          <span className="absolute right-2 bottom-2"><MdOutlineFileUpload className="block text-blue-600 text-[22px]" /></span>
        </div>
        <div className="mb-0 mt-0 relative">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Upload Educational Docs
          </label>
          <input
            type="text"
            name="educationalDocs"
            value={finalInstructorformData.educationalDocs}
            onChange={handleChange}
            className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full text-gray-600 text-sm"
            placeholder="Upload Documents"
          />
          <span className="absolute right-2 bottom-2"><MdOutlineFileUpload className="block text-blue-600 text-[22px]" /></span>
        </div>
        <div className="flex ">
          <input type="checkbox" name="agree"
            value={finalInstructorformData.agree}
            onChange={handleChange} />
          <p className="text-gray-600 text-[12px] pl-2">
            I agree to the TeacherCool{" "}
            <span className="text-blue-600 text-[12px]">
              Privacy policies & Terms
            </span>
          </p>
        </div>
      </form>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-600  text-white font-semi py-2 w-96 px-4 mt-7 rounded" >
          Join for Free
        </button>
      </div>
    </div>
  )
}

export default FinalInstructor