import React from 'react'
import VerifyEmail from '../verifyEmail/VerifyEmail';

const ForgetPassword = (props) => {
  const handleCloseIcon = () => {
    props.setShowLoginModal(false);
    props.setForgetPassword(false)
  }
  return (
    <div>
      {props.verifyEmail === false?
      <div>
        <div
          className="flex justify-end cursor-pointer"
          onClick={handleCloseIcon}
        >
          <img src={process.env.PUBLIC_URL + "/images/x.png"} alt="cross" />
        </div>
        <div className="flex justify-center mt-[-12px]  items-center">
          <h2 className="font-semibold text-gray-900 text-2xl max-sm:text-xl">Forget Password</h2>
        </div>
        <div className="flex justify-center my-5  flex-col items-center">
          <img src={process.env.PUBLIC_URL + "/images/forgetPassword.png"} alt="cross" />
          <div className='w-72  mt-2 px-2'>
            <p className='block text-sm text-gray-900 font-semibold mb-4 text-center'>Please  Enter your Email address to receive a verification code</p>
          </div>
        </div>
        <div className="mb-4 mt-4">
          <label className="block text-sm text-gray-900 font-semibold mb-4">Email Address</label>
          <input
            type="text"
            className="border bg-[white] border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="name@gmail.com"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semi py-2 px-4 mt-5 rounded" onClick={() => props.setVerifyEmail(true)}>
          Send Code
        </button>
        <div className='flex justify-center items-center mt-3'>
          <button className='py-2 text-center underline  ' onClick={() => props.setForgetPassword(false)}>Go Back  <span>&raquo;</span></button>
        </div>
      </div>: <VerifyEmail setShowLoginModal={props.setShowLoginModal} setVerifyEmail={props.setVerifyEmail} setForgetPassword={props.setForgetPassword}   />}
    </div>
  )
}

export default ForgetPassword
