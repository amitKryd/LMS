import React from 'react';
import { AppContent, AppSidebar, AppHeader } from '../component/index';
import AppRightSidebar from '../component/AppRightSidebar';

const DefaultAdminLayout = () => {
  return (
    <div className="">
      {/* AppHeader */}
      <div className="col-span-12 px-6">
        <AppHeader />
      </div>
      <div className='grid grid-cols-12 border-t-2'>
      {/* Left Sidebar */}
      <div className="col-span-2  min-h-[100vh] ">
        <AppSidebar />
      </div>
      
      {/* Main Content */}
      <div className="col-span-10 relative">
        <AppContent />
        <div className='absolute top-0 right-0   '>
        <AppRightSidebar />
        </div>
      </div>
      
      {/* Right Sidebar */}
      {/* <div className="col-span-1">
        <AppRightSidebar />
      </div> */}
      </div>
    </div>
  );
};

export default DefaultAdminLayout;
