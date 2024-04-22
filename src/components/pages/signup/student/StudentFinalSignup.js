import React from "react";
import { FiEdit2 } from "react-icons/fi";

const StudentFinalSignup = (props) => {
  const { studentFormValues, setStudentFormValues } = props;
  const registerStudent = (event) => {
    event.preventDefault();
    // const data = {
    //   userType : "student",
    //   name: studentFormValues.studentName,
    //   email: studentFormValues.studentEmail,
    //   phNumber: studentFormValues.studentNumber,
    //   password: studentFormValues.studentPassword,
    //   profileImage: studentFormValues.profileImage,
    //   country: studentFormValues.country,
    //   currency: "INR",
    //   referralCode: studentFormValues.referralCode,
    // };

    // console.log(data);
  };

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (value.trim() !== "") {
      setStudentFormValues((prevState) => ({
        ...prevState,
        [name]:
          type === "checkbox"
            ? checked
            : name === "profileImage"
            ? URL.createObjectURL(files[0])
            : value,
      }));
    } else {
      setStudentFormValues((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? "" : name === "profileImage" ? "" : "",
      }));
    }
  };
  return (
    <div className="mt-6">
      <form onSubmit={registerStudent}>
        <div className="flex items-center justify-around gap-5">
          <div className="relative w-[159px] h-[156px] rounded-full border-2">
            <label>
              <p className="absolute z-10  right-3 m-2 bg-[white] cursor-pointer">
                <FiEdit2 className="text-gray-400 bg-[white]" />
              </p>
              <input
                type="file"
                accept="image/*"
                name="profileImage"
                className="hidden"
                onChange={handleChange}
              />
            </label>
            <div className="absolute text-sm text-gray-600 text-wrap text-center bottom-12">
              {studentFormValues?.profileImage ? (
                <img
                  src={studentFormValues?.profileImage}
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
              value={studentFormValues.country}
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
                selected={studentFormValues.country === "india"}
                className="text-gray-600 text-sm"
              >
                India
              </option>
              <option
                value="australia"
                selected={studentFormValues.country === "australia"}
                className="text-gray-600 text-sm"
              >
                Australia
              </option>
              <option
                value="united states"
                selected={studentFormValues.country === "united states"}
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

        <div className="mb-4 mt-1">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Currency
          </label>
          <div className="relative">
            <select
              name="currency"
              value={studentFormValues.currency}
              onChange={handleChange}
              className="block appearance-none border bg-white border-gray-300 rounded-md px-3 py-2 w-full focus:outline-0 text-gray-600 text-sm"
            >
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

        <div className="mb-4 mt-1">
          <label className="block text-sm text-gray-900 font-semibold mb-4">
            Referal Code
          </label>
          <input
            type="text"
            name="referralCode"
            value={studentFormValues.referralCode}
            onChange={handleChange}
            className="border bg-[white] text-gray-600 text-sm border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Referal Code"
          />
        </div>

        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            name="agree"
            value={studentFormValues.agree}
            onChange={handleChange}
          />
          <p className="text-gray-600 text-[12px] pl-2">
            I agree to the TeacherCool{" "}
            <span className="text-blue-600 text-[12px]">
              Privacy policies & Terms
            </span>
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semi py-2 px-4 mt-7 rounded"
        >
          Join for Free
        </button>
      </form>
    </div>
  );
};

export default StudentFinalSignup;
