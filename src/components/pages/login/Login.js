import React from "react";
import { FcGoogle } from "react-icons/fc";
const Login = (props) => {
  return (
    <div className="absolute bg-white p-6 rounded-lg w-96 top-10 ">
      <div className="flex justify-center">
        <h2 className="font-semibold text-gray-900 text-2xl">Welcome Back</h2>
        <div className="absolute right-5 top-7 cursor-pointer">
          <img src={process.env.PUBLIC_URL + "/images/x.png"} alt="cross" />
        </div>
      </div>
      <form>
        <div className="mb-4 mt-10">
          <label className="block text-sm text-gray-900 font-semibold mb-4">Email Address / Phone no.</label>
          <input
            type="text"
            className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="name@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-900 font-semibold mb-4">Password</label>
          <input
            type="password"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Password"
          />
          <span className="block text-sm text-blue-500 mt-2">Forget Password?</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 w-[100%] text-white font-semibold py-2 px-4 mt-7 rounded">
          Login
        </button>
      </form>
      <div className="mb-4 mt-7 flex">
          <hr className="border-gray-300 my-4 inline-block w-1/2" />
          <span className="text-gray-600 mx-3 my-1">or</span>
          <hr className="border-gray-300 my-4 inline-block w-1/2" />
        </div>
        {/* <button className="bg-[white] hover:bg-blue-600 w-full border border-gray-400 font-semibold py-2 px-4 mt-7 rounded">
         <span><FcGoogle /></span> Continue with Google
        </button> */}
        <button className="bg-white hover:bg-blue-600 hover:text-[white] w-full border border-gray-400 font-semibold py-2 px-4 mt-7 rounded flex items-center justify-center">
  <span className="block text-left"><FcGoogle /></span> 
  <span className="text-center">Continue with Google</span>
</button>
    </div>
  );
};

export default Login;
