import React from 'react'
import { Pagination, Switch, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FaPlus } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";
const ManageAdmin = () => {
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const tableData = [
    {
      icon: "cardThree.png",
      name: "Manish Kumar",
      emailId: "hello122@gmail.com",
      PhoneNo: 9973276543,
      Address: "GYPR",
      
    },
    {
      icon: "cardThree.png",
      name: "Manish Kumar",
      emailId: "hello122@gmail.com",
      PhoneNo: 9973276543,
      Address: "GYPR",
      
    },
    {
      icon: "cardThree.png",
      name: "Manish Kumar",
      emailId: "hello122@gmail.com",
      PhoneNo: 9973276543,
      Address: "GYPR",
      
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
        <div className='flex items-center  bg-blue-500 rounded px-2 py-2 cursor-pointer'>
        <span className='  block text-sm text-white pr-2 '><FaPlus /></span>
          <span className='text-sm  text-white'>
            Add Admin
          </span>
        </div>
        <div className=''>
          <span className='font-semibold text-xl'>Manage Admin</span>
        </div>
      </div>
      <div className='overflow-x-auto overflow-y-hidden mb-2 rounded bg-white'>
        <table className="min-w-full divide-y ">
          <thead className="">
            <tr>
              <th className=" text-center py-3  tracking-wider">Profile</th>
              <th className=" text-center py-3  tracking-wider">Name</th>
              <th className=" text-center py-3  tracking-wider">Email ID</th>
              <th className=" text-center py-3  tracking-wider">Contact</th>
              <th className=" text-center py-3  tracking-wider">Address</th>
              <th className=" text-center py-3  tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData?.length > 0 && tableData?.map((item, ind) => (
              <tr key={ind} className="hover:bg-gray-100">
                <td className=" py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full bg-gray-300">
                      <img
                        src={process.env.PUBLIC_URL + `/images/admin/${item?.icon}`}
                        alt="Avatar"
                        className="w-10 h-10 object-contain rounded-full"
                      />
                    </div>
                  </div>

                </td>
                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.name}</td>
                <td className=" py-4 whitespace-nowrap text-center  text-gray-700 text-sm">{item?.emailId}</td>
                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.PhoneNo}</td>
                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.Address}</td>
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

export default ManageAdmin