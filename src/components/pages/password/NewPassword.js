import React,{useState} from 'react'
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";

const NewPassword = (props) => {
    const [showPasswordIcon, setShowPasswordIcon] = useState(false)
    const  [showConfirmPassIcon,setShowConfirmPassIcon] = useState(false)
    
      const changeIconPassWord = () => {
        setShowPasswordIcon((data) => !data)
      }
      const changeIconConfirmPassWord = () => {
        setShowConfirmPassIcon((data) => !data)
      }
  return (
    <div>
     
      <div>
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => { props.setShowLoginModal(false); props.setForgetPassword(false) }}
        >
          <img src={process.env.PUBLIC_URL + "/images/x.png"} alt="cross" />
        </div>
        <div className="flex justify-center mt-[-12px]  items-center">
          <h2 className="font-semibold text-gray-900 text-2xl">Create New Password</h2>
        </div>
        <div className="flex justify-center my-5  flex-col items-center">
          <img src={process.env.PUBLIC_URL + "/images/forgetPassword.png"} alt="cross" />
          <div className='w-72  mt-2 px-2'>
            <p className='block text-sm text-gray-900 font-semibold mb-4 text-center'>Your New password  must be different from  previously used Password</p>
          </div>
        </div>
        <div className="mb-1">
              <label className="block text-sm text-gray-900 font-semibold mb-4">Password</label>
              <div className=" relative">
                <input
                  type={showPasswordIcon ? "password" : "text"}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Password"
                />
                <span onClick={changeIconPassWord} className="absolute  right-4 bottom-3 cursor-pointer">{showPasswordIcon ? <IoEyeOffOutline /> : <FaRegEye />}</span>
              </div>
            </div>
            <div className="mb-2 mt-5">
              <label className="block text-sm text-gray-900 font-semibold mb-4">Confirm  Password</label>
              <div className=" relative">
                <input
                  type={showConfirmPassIcon ? "password" : "text"}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Password"
                />
                <span onClick={changeIconConfirmPassWord} className="absolute  right-4 bottom-3 cursor-pointer">{showConfirmPassIcon ? <IoEyeOffOutline /> : <FaRegEye />}</span>
              </div>
            </div>
        <button className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semi py-2 px-4 mt-5 rounded" onClick={() => {props.setShowLoginModal(true);  props.setShowNewPasswordCard(false)}}>
          Save
        </button>
        
      </div>
    </div>
  )
}

export default NewPassword
