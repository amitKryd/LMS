import React from 'react'

const Dashboard = () => {
  const tableData = [
    {
      icon: "points1.png",
      points: 12,
      topic: "Points earned",
    },
    {
      icon: "points3.png",
      points: "12 hr",
      topic: "Learning Time",
    },
    {
      icon: "points2.png",
      points: 12,
      topic: "Completed Courses",
    },

  ]
  const tableDataOne = [
    {
      icon: "ranking 1.png",
      points: "12",
      topic: "Ranks",
    },
    {
      icon: "graduation-hat 1.png",
      points: "03",
      topic: "Certificates",
    },


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
      <div className='bg-white rounded my-4 px-4 py-10'>
        <div className='flex first-letter:justify-start items-center gap-4  pb-4 '>
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-300">
            <img
              src={process.env.PUBLIC_URL + "/images/student/Photo.png"}
              alt="no img"
            />

          </div>
          <span className='text-2xl font-semibold'>Rahul Sharms</span>
        </div>
        <div className='flex gap-2 pt-4'>
          {tableData?.length > 0 && tableData?.map((item, ind) => {
            return (
              <div key={ind} className={`flex gap-3 px-8 ${ind < tableData.length - 1 ? 'border-r-2 ' : ''}`}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + `/images/student/${item?.icon}`}
                    alt="no img"
                  />
                </div>
                <div className='flex flex-col '>
                  <span className='text-blue-500 font-semibold'>{item?.points}</span>
                  <span className='text-sm  font-medium text-gray-400'>{item?.topic}</span>
                </div>
              </div>
            )
          })}
        </div>



      </div>
      <div className='flex gap-8 pt-4 bg-white px-4 py-4 rounded'>
        {tableDataOne?.length > 0 && tableDataOne?.map((item, ind) => {
          return (
            <div key={ind} className='flex px-4 py-3 rounded items-center gap-4 border-2'>
              <div>
                <img
                  src={process.env.PUBLIC_URL + `/images/student/${item?.icon}`}
                  alt="no img"
                />
              </div>
              <div className='flex flex-col pt-2 '>
                <span className='text-blue-500 font-semibold'>{item?.points}</span>
                <span className='text-sm  font-medium text-gray-400'>{item?.topic}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard