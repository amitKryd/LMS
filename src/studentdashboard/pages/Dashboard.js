import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <p className='text-2xl font-semibold'>Good Afternoon, Rahul</p>
        <div className='flex flex-col'>
          <span className='font-bold text-sm'>23rd April 2024</span>
          <span className='font-bold text-sm mt-[-1px]'>02:34 PM</span>
        </div>
      </div>
      <div className='bg-white'>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300">
  {/* Insert your avatar content here */}
</div>
      </div>
    </div>
  )
}

export default Dashboard