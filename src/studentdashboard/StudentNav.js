import React from 'react'
import { CNavItem } from '@coreui/react'
const StudentNav = [
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/category.png"}
            alt="no img"
        />,
        name: <span className='text-gray-400 fw-bold pl-4'>Dashboard</span>,
        to: '/student/dashboard'
    },

    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/student/sidebar4.png"}
            alt="no img"
        />,
        name: <span className='text-gray-400 fw-bold pl-4'>My Learning</span>,
        to: '/student/MyLearning',
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/student/sidebar2.png"}
            alt="no img"
        />,
        name: <span className='text-gray-400 fw-bold pl-4'>My Progress</span>,
        to: '/student/MyProgress'
    },
   
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/student/sidebar3.png"}
            alt="no img"
        />,
        name: <span className='text-gray-400 fw-bold pl-4'>Test</span>,
        to: '/student/Test'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/student/sidebar1.png"}
            alt="no img"
        />,
        name: <span className='text-gray-400 fw-bold pl-4'>Bookmarks</span>,
        to: '/student/Bookmarks'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/student/sidebar5.png"}
            alt="no img"
        />,
        name: <span className='text-gray-400 fw-bold pl-4'>Course Catalog</span>,
        to: '/student/CourseCatalog'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/student/sidebar6.png"}
            alt="no img"
        />,
        name: <span className='text-gray-400 fw-bold pl-4'>Certificates</span>,
        to: '/student/Certificates'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group (1).png"}
            alt="no img"
        />,
        name: <span className='text-gray-400 fw-bold pl-4'>Payments</span>,
        to: '/student/Payment'
    },

]

export default StudentNav
