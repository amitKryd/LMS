import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";

const MyProfile = (props) => {
    const {setShowEditComponent} = props

    return (
        <div className='mx-10 '>
            <div className='flex flex-col'>
                <p className='text-black text-xl font-bold  my-4   '>My Profile</p>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center  ">

                        <img
                            src={process.env.PUBLIC_URL + "/images/profile.png"}
                            alt="no img"
                        />
                        <h3 className=" pl-4 text-md font-semibold">Jasmin Kaur</h3>
                    </div>
                    <button onClick={() => setShowEditComponent(true)} className='flex items-center text-blue-400 font-bold text-sm border-2 border-blue-300 rounded-md px-3 py-1'>
                        Edit
                        <span className='inline '><CiEdit /></span>
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-5 mt-10'>
                <p className='text-blue-500 font-bold'>Personal Information</p>
                <div className='items-start'>
                    <div className='flex justify-between'>
                        <p className='text-gray-400 w-1/3'>Email address</p>
                        <p className='text-gray-400 w-1/3'>Phone No.</p>
                        <p className='text-gray-400 w-1/3'>DOB</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-black text-sm font-bold w-1/3'>Jaismine3456@gmail.com</p>
                        <p className='text-black text-sm font-bold w-1/3'>+91 9292192899</p>
                        <p className='text-black text-sm font-bold w-1/3'>11 - 02 - 2002</p>
                    </div>
                </div>
            </div>


            <div className='flex flex-col gap-5 mt-10'>
                <p className='text-blue-500 font-bold'>Address Information</p>
                <div>
                    <div className='flex justify-between items-start'>
                        <p className='text-gray-400 w-1/3'>Country</p>
                        <p className='text-gray-400 w-1/3'>State / City </p>
                        <p className='text-gray-400 w-1/3'>Pincode</p>
                    </div>
                    <div className='flex justify-between items-start'>
                        <p className='text-black text-sm font-bold w-1/3'>India</p>
                        <p className='text-black text-sm font-bold w-1/3'>New Delhi</p>
                        <p className='text-black text-sm font-bold w-1/3'>11004</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile