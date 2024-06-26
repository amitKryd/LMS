import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'


import { AppSidebarNav } from './AppSidebarNav'
import AdminNav from '../AdminNav'




const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <div >
    
      
      <AppSidebarNav items={AdminNav} />
      
   
    </div>
  )
}

export default React.memo(AppSidebar)