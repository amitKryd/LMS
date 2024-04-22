import React from 'react'
import { Pagination } from 'antd';
import { BiEdit } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const CoursePricing = () => {
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const tableData = [
    {
      name: "Data Analytics",
      courseType: "Platinum",
      Duration: 12,
      level: "Mid Level",
      CoursePricing:"1200"
    },
    {
        name: "Data Analytics",
        courseType: "Platinum",
        Duration: 12,
        level: "Mid Level",
        CoursePricing:"1200"
    },
    {
        name: "Data Analytics",
        courseType: "Platinum",
        Duration: 12,
        level: "Mid Level",
        CoursePricing:"1200"
    }
  ]
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <p className='text-2xl font-semibold'>Good Afternoon, Admin</p>
        <div className='flex flex-col'>
          <span className='font-bold text-sm'>23rd April 2024</span>
          <span className='font-bold text-sm mt-[-1px]'>02:34 PM</span>
        </div>
      </div>
      <div className=' mt-4 flex justify-between items-center px-4 bg-white py-4 border-b-2 border-gray-300 rounded'>
      <div className="relative ">
          <input
            type="text"
            placeholder="Search...."
            className="bg-white w-[170px]    rounded pl-9 pr-1 py-1 border outline-none"
          />
          <div className='absolute  top-2 left-4'>
            <IoSearchOutline />
          </div>
        </div>
        <div className=''>
          <span className='font-semibold text-xl'>Manage Payment</span>
        </div>
      </div>
      <div className='overflow-x-auto overflow-y-hidden mb-2 rounded bg-white'>
        <table className="min-w-full divide-y ">
          <thead className="">
            <tr>
              <th className=" text-center py-3  tracking-wider">Course Name</th>
              <th className=" text-center py-3  tracking-wider">Course Type</th>
              <th className=" text-center py-3  tracking-wider">Duration</th>
              <th className=" text-center py-3  tracking-wider">Level</th>
              <th className=" text-center py-3  tracking-wider">Course Pricing</th>
              <th className=" text-center py-3  tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData?.length > 0 && tableData?.map((item, ind) => (
              <tr key={ind} className="hover:bg-gray-100">
                
                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.name}</td>
                <td className=" py-4 whitespace-nowrap text-center  text-gray-700 text-sm">{item?.courseType}</td>
                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.Duration}</td>
                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.level}</td>
                <td className="flex justify-center  py-4 whitespace-nowrap  ">
  <span className='flex items-center justify-center  '><FaRupeeSign  /></span><span className='flex items-center justify-center '>{item?.CoursePricing}</span>
</td>
                <td className=" py-4 whitespace-nowrap cursor-pointer ">
  <span className='flex items-center justify-center'><BiEdit className='text-blue-500 text-2xl' /></span>
</td>

              </tr>
            ))}
          </tbody>
        </table>
        <div className='py-4 '>
          <Pagination
            showSizeChanger
            showQuickJumper
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            total={50}
          />
        </div>
      </div>

    </div>
  )
}

export default CoursePricing