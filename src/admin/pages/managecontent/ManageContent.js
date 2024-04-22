import React from 'react'
import { Pagination, Switch } from 'antd';

import { IoSearchOutline } from "react-icons/io5";
const ManageContent = () => {
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const tableData = [
        {
            Title: "Python Advance",
            Format: "MP3",
            duplicateStatus: "NA",
            PublishedBy: "Admin",
            Subject: "Python Advance",
            PublishedStatus: "Published"
        },
        {
            Title: "Python Advance",
            Format: "MP3",
            duplicateStatus: "NA",
            PublishedBy: "Admin",
            Subject: "Python Advance",
            PublishedStatus: "Published"
        },
        {
            Title: "Python Advance",
            Format: "MP3",
            duplicateStatus: "NA",
            PublishedBy: "Admin",
            Subject: "Python Advance",
            PublishedStatus: "Published"
        },
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
            <div className='mt-4 flex justify-between items-center px-4 bg-white py-4 border-b-2 border-gray-300 rounded'>
                <div className="relative ">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-white w-[170px]    rounded pl-9 pr-1 py-1 border outline-none"
                    />
                    <div className='absolute  top-2 left-4'>
                        <IoSearchOutline />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button className='text-green-800 rounded-4 text-sm  font-semibold px-3 py-1 bg-[#ebf9f1]'>BULK IMPORT</button>
                    <button className='text-red-800 rounded-4 text-sm  font-semibold px-3 py-1 bg-[#fbe7e8]'>BULK EXPORT</button>
                </div>
                <div className=''>
                    <span className='font-semibold text-xl'>Manage Content</span>
                </div>
            </div>
            <div className='overflow-x-auto overflow-y-hidden mb-2 rounded bg-white'>
                <table className="min-w-full divide-y  ">
                    <thead className="">
                        <tr>
                            <th className=" text-center py-3  tracking-wider"><input type='checkbox' className='mx-3' /> </th>
                            <th className=" text-center py-3  tracking-wider">Title</th>
                            <th className=" text-center py-3  tracking-wider">Format</th>
                            <th className=" text-center py-3  tracking-wider">Duplicate Status</th>
                            <th className=" text-center py-3  tracking-wider">Published By</th>
                            <th className=" text-center py-3  tracking-wider">Subject</th>
                            <th className=" text-center py-3  tracking-wider">Published Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y  divide-gray-200">
                        {tableData?.length > 0 && tableData?.map((item, ind) => (
                            <tr key={ind} className="hover:bg-gray-100">
                                <td className=" py-4 ml-2 whitespace-nowrap text-center bloc">
                                    <input type='checkbox' className='mx-3' />

                                </td>
                                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.Title}</td>
                                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.Format}</td>
                                <td className=" py-4 whitespace-nowrap text-center  text-gray-700 text-sm">{item?.duplicateStatus}</td>
                                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.PublishedBy}</td>
                                <td className=" py-4 whitespace-nowrap text-center text-gray-700 text-sm">{item?.Subject}</td>
                                <td className=" py-4  whitespace-nowrap text-center  text-sm "><button className='rounded-4 text-green-700 py-2 px-2 bg-[#ebf9f1]'>{item?.PublishedStatus}</button> </td>
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

export default ManageContent