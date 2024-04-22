import React from 'react'
import { NavLink } from 'react-router-dom'
import { Chart } from "react-google-charts";
import ProgressBar from '../customComponent/PreogressBar';

const Dashboard = () => {
  const cardData = [
    {
      icon: "cardThree.png",
      title: "Courses",
      totalCount: 28,
      totalCountText: "Total Count",

    },
    {
      icon: "cardTwo.png",
      title: "Learner",
      totalCount: 55,
      totalCountText: "Total Count",

    },
    {
      icon: "Group (1).png",
      title: "Payment",
      totalCount: 0,
      totalCountText: "Total Count",

    },
    {
      icon: "cardOne.png",
      title: "Messages",
      totalCount: 0,
      totalCountText: "Total Count",

    }
  ]
  const data = [
    ["Language", "Speakers (in millions)"],
    ["German", 5.85],
    ["French", 1.66],
    ["Italian", 0.316],
    ["Romansh", 0.0791],
  ];
  const options = {
    legend: { position: 'bottom' }, // Specify the legend position here ('top', 'bottom', 'left', 'right', or 'none')
  };
  //  const options = {
  //   legend: "none",
  //   pieSliceText: "label",
  //   title: "Swiss Language Use (100 degree rotation)",
  //   pieStartAngle: 100,
  // };
  const tableData = [
    {
      icon: "cardThree.png",
      name: "Manish Kumar",
      program: "Web Development",
      regNo: "RJK98ULK",
      percentage: 99.7
    },
    {
      icon: "cardThree.png",
      name: "Manish Kumar",
      program: "Data Science And Machine Learning",
      regNo: "RJK98ULK",
      percentage: 99.7
    }, {
      icon: "cardThree.png",
      name: "Manish Kumar",
      program: "Web Development",
      regNo: "RJK98ULK",
      percentage: 99.7
    }
  ]
  return (
    <div>
      <div className='flex justify-between items-center'>
        <p className='text-2xl font-semibold'>Good Afternoon, Rahul</p>
        <div className='flex flex-col'>
          <span className='font-bold text-sm'>23rd April 2024</span>
          <span className='font-bold text-sm mt-[-1px]'>02:34 PM</span>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-4 mt-4'>
        {cardData?.length > 0 && cardData?.map((item, ind) => {
          return (
            <div key={ind} className='col-span-3 bg-white px-3 py-4 rounded flex flex-col justify-between h-[120px]'>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col items-start'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/admin/${item?.icon}`}
                    alt="no img"
                    className='w-[30px] h-[30px]'
                  />
                  <span className='font-bold text-sm'>{item?.title}</span>
                </div>
                <div className='flex flex-col items-start pt-1'>
                  <span className='text-blue-500 font-bold'>{item?.totalCount}</span>
                  <span className='text-xs'>{item?.totalCountText}</span>
                </div>
              </div>
              <div className='flex justify-center items-center pt-2'>
                <NavLink className='text-blue-500 font-semibold block text-center'> More Info <span>&raquo;</span></NavLink>
              </div>
            </div>
          );
        })}

      </div>
      <div className=' bg-white rounded my-4 pb-4 px-4 '>
        <div className='flex justify-between item-center py-4 '>
          <div >
            <span className='font-bold text-xl'>Enrollment Vs Completed</span>
          </div>
          <div >

            <input type='checkbox' className='mx-2' />
            <label className='mr-3'>Enrolled</label>
            <input type='checkbox' className='mx-2' />
            <label>Completed</label>
          </div>
        </div>

        <div className='grid grid-cols-12 justify-start mt-2 gap-2'>
          <div className='flex col-span-5 flex-col px-2 pt-4 border-gray-200 border-2 rounded'>
            <p className='font-bold text-xl'>Title</p>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}

            />
          </div>
          <div className='flex flex-col col-span-5 px-4 py-2 border-gray-200 border-2 rounded'>
            <div className='my-3'>
              <p className='font-bold text-xl'>Text</p>
              <p className='text-gray-400'>Lorem ipsum want you to have a good UI. Also This is a part of Graph</p>
            </div>
            <ProgressBar bgcolor="orange"
              progress="30"
              width={"full"}
              text={"Lorem ipsum"}
              textColor="orange"
              value={"65,376"}
              height={10} />
            <ProgressBar bgcolor="#99ff66"
              progress="50"
              width={"full"}
              text={"Lorem"}
              textColor="#99ff66"
              value={"65,585"}
              height={10} />
            <ProgressBar bgcolor="#ff00ff"
              progress="85"
              text={"Lorem ipsum"}
              value={"65,376"}
              textColor="#ff00ff"
              width={"full"}
              height={10} />
            <ProgressBar bgcolor="#99ccff"
              progress="95"
              text={"Lorem ipsum"}
              value={"65,376"}
              width={"full"}
              textColor="#99ccff"
              height={10} />
          </div>
        </div>

      </div>
      <div className='bg-white border-2 px-4 rounded'>
      <div className='flex justify-between items-center pt-6 '>
        <div>
  <span className='font-bold text-xl'>Tospan Learners / FINISHERS</span>
  </div>
  <div>
  <button className='flex items-center border-2 rounded px-3 py-1 font-medium'>
    All Programs
    <span className='ml-2'>
      <img
        src={process.env.PUBLIC_URL + `/images/admin/filter.png`}
        alt="no img"
        className='w-4 h-4'
      />
    </span>
  </button>
  </div>
</div>

        <div className='overflow-x-auto my-5 rounded'>
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-6 py-3 text-left tracking-wider">Name</th>
        <th className="px-6 py-3 text-left  tracking-wider">Program Name</th>
        <th className="px-6 py-3 text-left  tracking-wider">Reg No.</th>
        <th className="px-6 py-3 text-left  tracking-wider">Percentage</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {tableData?.length > 0 && tableData?.map((item, ind) => (
        <tr key={ind} className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300">
  <img
    src={process.env.PUBLIC_URL + "/images/admin/avatar.png"}
    alt="Avatar"
    className="w-full h-full object-contain rounded-full"
  />
        </div>      
              <span className="font-semibold pl-1 text-gray-700 text-sm">{item?.name}</span>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-700 text-sm">{item?.program}</td>
          <td className="px-6 py-4 whitespace-nowrap  text-gray-700 text-sm">{item?.regNo}</td>
          <td className=" py-4 pl-11 text-green-400 ">{item?.percentage}%</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>

  )
}

export default Dashboard