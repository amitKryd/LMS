import React from 'react'
// import { AppSidebar } from '../component'
import { AppContent, AppSidebar, AppHeader } from '../component/index'

const DefaultAdminLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        
      </div>
    </div>
  )
}

export default DefaultAdminLayout