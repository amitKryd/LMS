import React from 'react';
import { AppContent, AppSidebar, AppHeader } from '../component/index';


const DefaultStudentLayout = () => {
  return (
    <div className="">
      {/* AppHeader */}
      <div className="col-span-12 px-6">
        <AppHeader />
      </div>
      <div className='grid grid-cols-12 border-t-2'>
      {/* Left Sidebar */}
      <div className="col-span-2  min-h-[100vh] pl-2">
        <AppSidebar />
      </div>
      
      {/* Main Content */}
      <div className="col-span-10">
        <AppContent />
      </div>
      
      {/* Right Sidebar */}
      
      </div>
    </div>
  );
};

export default DefaultStudentLayout;
