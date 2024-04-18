import React from 'react'
import { NavLink } from 'react-router-dom'

const AppRightSidebar = () => {
  return (
    <div className='bg-white pt-4 px-2 flex justify-center flex-col items-center'>
        <div className='flex flex-col justify-center py-2  items-center cursor-pointer'>
        <img
                    src={process.env.PUBLIC_URL + `/images/admin/FrameOne.png`}
                    alt="no img"
                    className='w-[30px] h-[30px]'
                  />
                  <p className='font-semibold text-sm text-center'>Learning Management System</p>
        </div>
        <div className='flex flex-col justify-center py-3  items-center cursor-pointer'>
        <img
                    src={process.env.PUBLIC_URL + `/images/admin/FrameTwo.png`}
                    alt="no img"
                    className='w-[30px] h-[30px]'
                  />
                  <p className='font-semibold text-sm text-center'>Live Metting Session</p>
        </div>
        <div className='flex items-center  py-2 justify-center'>
        <img
                    src={process.env.PUBLIC_URL + `/images/admin/link.png`}
                    alt="no img"
                    // className='w-[30px] h-[30px]'
                  />
                  <NavLink><span className='text-blue-500 cursor-pointer pl-2 font-semibold text-center text-sm'>Meeting Link</span></NavLink>
        </div>
        <div className='flex flex-col justify-center py-5  items-center cursor-pointer'>
        <img
                    src={process.env.PUBLIC_URL + `/images/admin/FrameThree.png`}
                    alt="no img"
                    className='w-[30px] h-[30px]'
                  />
                  <p className='font-semibold text-center text-sm'>Add Courses</p>
        </div>
    </div>
  )
}

export default AppRightSidebar