import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const EditProfile = () => {
    return (
        <div className='mx-10 my-10'>
            <div className="flex items-center justify-start gap-10  ">
                <img
                    src={process.env.PUBLIC_URL + "/images/profile.png"}
                    alt="no img"
                />
                <button className='  text-sm  bg-blue-600 rounded-md text-white px-3 py-2'>Update Image</button>
                <button className='flex items-center text-red-400 font-bold text-sm  px-3 py-1'>
                    <span className='inline pr-1'><RiDeleteBinLine /></span> Remove
                </button>
            </div>
            <div className='mt-10'>
                <p className='text-black-500 text-xl  font-bold'>Personal Information</p>
                <div className='grid grid-cols-3 w-full gap-6 mt-8'>
                    <div className="mb-1 ">
                        <label className="block text-sm text-gray-400 font-semibold mb-2">First Name</label>

                        <input
                            type="text"
                            //   value={createNewPassword.newPassword}
                            //   onChange={(e)=>  setCreateNewPassword({newPassword:e.target.value})}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            placeholder="Enter First Name"
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="block text-sm text-gray-400 font-semibold mb-2">Middle Name</label>

                        <input
                            type="text"
                            //   value={createNewPassword.newPassword}
                            //   onChange={(e)=>  setCreateNewPassword({newPassword:e.target.value})}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            placeholder="Enter Middle Name"
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="block text-sm text-gray-400 font-semibold mb-2">Last Name</label>

                        <input
                            type="text"
                            //   value={createNewPassword.newPassword}
                            //   onChange={(e)=>  setCreateNewPassword({newPassword:e.target.value})}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            placeholder="Enter Last Name"
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="block text-sm text-gray-400 font-semibold mb-2">Email Address</label>

                        <input
                            type="text"
                            //   value={createNewPassword.newPassword}
                            //   onChange={(e)=>  setCreateNewPassword({newPassword:e.target.value})}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            placeholder="Enter Email Address"
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="block text-sm text-gray-400 font-semibold mb-2">Phone </label>

                        <input
                            type="text"
                            //   value={createNewPassword.newPassword}
                            //   onChange={(e)=>  setCreateNewPassword({newPassword:e.target.value})}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            placeholder="+91 9122132435"
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="block text-sm text-gray-400 font-semibold mb-2">DOB</label>

                        <input
                            type="date"
                            //   value={createNewPassword.newPassword}
                            //   onChange={(e)=>  setCreateNewPassword({newPassword:e.target.value})}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            placeholder="MM/DD/YYYY"
                        />
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-black-500 text-xl  font-bold'>Address Information</p>
                <div className='grid grid-cols-3 w-full gap-6 mt-8'>
                    <div className="mb-1 ">
                        <label className="block text-sm text-gray-400 font-semibold mb-2">Country </label>
                        <input
                            type="text"
                            //   value={createNewPassword.newPassword}
                            //   onChange={(e)=>  setCreateNewPassword({newPassword:e.target.value})}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            placeholder="Enter Country "
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="block text-sm text-gray-400 font-semibold mb-2">City/State</label>
                        <input
                            type="text"
                            //   value={createNewPassword.newPassword}
                            //   onChange={(e)=>  setCreateNewPassword({newPassword:e.target.value})}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            placeholder="Enter City/State "
                        />
                    </div>
                    <div className="mb-1 ">
                        <label className="block text-sm text-gray-400 font-semibold mb-2">Pincode</label>
                        <input
                            type="text"
                            //   value={createNewPassword.newPassword}
                            //   onChange={(e)=>  setCreateNewPassword({newPassword:e.target.value})}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            placeholder="Enter Pincode "
                        />
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-start items-center gap-10 mt-10'>
            <button className='  text-sm  bg-blue-600 rounded-md text-white px-3 py-2'>Save Changes</button>
            <button className='flex items-center text-red-400 font-bold text-sm  px-3 py-1'>
                    Delete Account
                </button>
            </div>
        </div>
    )
}

export default EditProfile