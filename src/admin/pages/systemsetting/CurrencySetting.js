import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

const CurrencySetting = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <p className='text-2xl font-semibold'>Good Afternoon, Admin</p>
                <div className='flex flex-col'>
                    <span className='font-bold text-sm'>23rd April 2024</span>
                    <span className='font-bold text-sm mt-[-1px]'>02:34 PM</span>
                </div>
            </div>
            <div className=' mt-4 flex justify-start items-center px-4 bg-white py-4 border-b-2 border-gray-300 rounded'>
                <span className='font-semibold text-xl'>Currency Settings</span>
            </div>
            <div className='bg-white px-4  py-4 '>
            <div className='grid  grid-cols-2 gap-4 mt-2'>
                <div className=' relative'>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-semibold text-gray-600">
                        <FaRupeeSign className='text-blue-500 mt-[-2px]  ' /> 
                    </span>
                    <span className="absolute inset-y-0 left-5 flex items-center pl-3 font-semibold text-gray-600">
                       INR
                    </span>
                    <input
                        type="text"
                        readOnly
                        className="pl-10 border focus:outline-none border-gray-300 rounded-md px-3 py-2 w-full"

                    />
                </div>
                <div className=''>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div className='grid  grid-cols-2 gap-4 mt-2'>
                <div className=' relative'>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-semibold text-gray-600">
                        <FaDollarSign  className='text-blue-500 mt-[-2px]  ' /> 
                    </span>
                    <span className="absolute inset-y-0 left-5 flex items-center pl-3 font-semibold text-gray-600">
                       INR
                    </span>
                    <input
                        type="text"
                        readOnly
                        className="pl-10 border focus:outline-none border-gray-300 rounded-md px-3 py-2 w-full"

                    />
                </div>
                <div className=''>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div className='grid  grid-cols-2 gap-4 '>
                <div className=' relative'>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-semibold text-gray-600">
                        <FaRupeeSign className='text-blue-500 mt-[-2px]  ' /> 
                    </span>
                    <span className="absolute inset-y-0 left-5 flex items-center pl-3 font-semibold text-gray-600">
                       INR
                    </span>
                    <input
                        type="text"
                        readOnly
                        className="pl-10 border focus:outline-none border-gray-300 rounded-md px-3 py-2 w-full"

                    />
                </div>
                <div className=''>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div className='grid  grid-cols-2 gap-4 '>
                <div className=' relative'>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-semibold text-gray-600">
                        <FaRupeeSign className='text-blue-500 mt-[-2px]  ' /> 
                    </span>
                    <span className="absolute inset-y-0 left-5 flex items-center pl-3 font-semibold text-gray-600">
                       INR
                    </span>
                    <input
                        type="text"
                        readOnly
                        className="pl-10 border focus:outline-none border-gray-300 rounded-md px-3 py-2 w-full"

                    />
                </div>
                <div className=''>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        placeholder="Password"
                    />
                </div>
            </div>
            </div>
        </div>
    )
}

export default CurrencySetting