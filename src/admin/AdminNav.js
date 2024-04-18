import React from 'react'
import { CNavItem } from '@coreui/react'
const AdminNav = [
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/category.png"}
            alt="no img"
        />,
        name: <span className='fw-bold pl-4'>Dashboard</span>,
        to: '/admin/dashboard'
    },

    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Vector.png"}
            alt="no img"
        />,
        name: <span className='fw-bold pl-4'>Content</span>,
        to: '/admin/Content',
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/profile-2user.png"}
            alt="no img"
        />,
        name: <span className='fw-bold pl-4'>User</span>,
        to: '/admin/User'
    },
   
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group.png"}
            alt="no img"
        />,
        name: <span className='fw-bold pl-4'>Manage</span>,
        to: '/admin/Manage'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group (1).png"}
            alt="no img"
        />,
        name: <span className='fw-bold pl-4'>Payment</span>,
        to: '/admin/Payment'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Vector (1).png"}
            alt="no img"
        />,
        name: <span className='fw-bold pl-4'>Design</span>,
        to: '/admin/design'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group (2).png"}
            alt="no img"
        />,
        name: <span className='fw-bold pl-4'>Forum</span>,
        to: '/admin/forum'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/pie-chart.png"}
            alt="no img"
        />,
        name: <span className='fw-bold pl-4'>Analytics</span>,
        to: '/admin/Analytics'
    },

]

export default AdminNav
