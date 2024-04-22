import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";

const InstructorSignup = (props) => {
  const { instructorSignup, setInstructorSignup, nextInstructorMiddlePage } =
    props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      setInstructorSignup((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setInstructorSignup((prevState) => ({
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
            name="instructorFullName"
            value={instructorSignup.instructorFullName}
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
            name="instructorEmail"
            value={instructorSignup.instructorEmail}
            onChange={handleChange}
            className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="name@gmail.com"
          />
        </div>

        <button
          onClick={nextInstructorMiddlePage}
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

export default InstructorSignup;
