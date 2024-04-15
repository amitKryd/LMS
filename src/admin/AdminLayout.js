import React from 'react'

import DefaultAdminLayout from './layout/DefaultAdminLayout'
import './scss/style.scss'
// const DefaultAdminLayout = React.lazy(() => import('./layout/DefaultAdminLayout'))
const AdminLayout = () => {
  return (
    <div>
 
      <DefaultAdminLayout />

    </div>
  )
}

export default AdminLayout