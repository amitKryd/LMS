import React from 'react'
import { CNavItem,CNavGroup } from '@coreui/react'

const AdminNav = [
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/category.png"}
            alt="no img"
           
        />,
        name: <span className='font-semibold  pl-2'>Dashboard</span>,
        to: '/admin/dashboard',
        iconTwo:<img
        src={process.env.PUBLIC_URL + "/images/admin/categoryblue.png"}
        alt="no img"
    />
    },

    {
        component: CNavGroup,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group.png"}
            alt="no img"
        />,
        iconTwo: <img
            src={process.env.PUBLIC_URL + "/images/admin/Groupblue.png"}
            alt="no img"
            className='w-6 '
        />,
        name: <span className='font-semibold  pl-2'>Manage Users</span>,
        
        items: [
            {
                component: CNavItem,
                name: <span className='fw-semibold   pl-2'>Teacher</span>,
                icon: <img
              src={process.env.PUBLIC_URL + "/images/admin/Groupmanage.png"}
              alt="no img"
             className=''
          />,
                to: '/admin/Manage/Teacher',
                iconTwo:<img
                src={process.env.PUBLIC_URL + "/images/admin/User.png"}
                alt="no img"
                className='w-6'
            />,
              },
            {
              component: CNavItem,
              name: <span className='fw-semibold   pl-2'>Student</span>,
              icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Groupmanage.png"}
            alt="no img"
            
        />,
              to: '/admin/Manage/student',
              iconTwo:<img
              src={process.env.PUBLIC_URL + "/images/admin/User.png"}
              alt="no img"
              className='w-6'
          />,
            },
            {
                component: CNavItem,
                name: <span className='fw-semibold   pl-2'>University</span>,
                icon: <img
              src={process.env.PUBLIC_URL + "/images/admin/Groupmanage.png"}
              alt="no img"
              
          />,
                to: '/admin/Manage/University',
                iconTwo:<img
                src={process.env.PUBLIC_URL + "/images/admin/User.png"}
                alt="no img"
                className='w-6'
            />,
              },
              {
                component: CNavItem,
                name: <span className='fw-semibold   pl-2'>Corporate</span>,
                icon: <img
              src={process.env.PUBLIC_URL + "/images/admin/Groupmanage.png"}
              alt="no img"
        
          />,
                to: '/admin/Manage/Corporate',
                iconTwo:<img
                src={process.env.PUBLIC_URL + "/images/admin/User.png"}
                alt="no img"
                className='w-6'
            />,
              },
           
        ]
    },
    {
        component: CNavGroup,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Vector.png"}
            alt="no img"
        />,
        iconTwo: <img
            src={process.env.PUBLIC_URL + "/images/admin/FrameThreeblue.png"}
            alt="no img"
            className='w-6'
        />,
        name: <span className='font-semibold  pl-2'>Manage Content</span>,
        items:[
            {
                component: CNavItem,
                name: <span className='fw-semibold   pl-2'>Content</span>,
                icon: <img
              src={process.env.PUBLIC_URL + "/images/admin/Groupmanage.png"}
              alt="no img"
              
          />,
                to: '/admin/Manage/Content',
                iconTwo:<img
                src={process.env.PUBLIC_URL + "/images/admin/User.png"}
                alt="no img"
                className='w-6'
            />,
              },
           
        ]
        
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group (1).png"}
            alt="no img"
        />,
        iconTwo: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group1blue.png"}
            alt="no img"
            className='w-6'
        />,
        name: <span className='font-semibold  pl-2'>Manage Payment</span>,
        to: '/admin/Payment'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/profile-2user.png"}
            alt="no img"
        />,
        iconTwo: <img
            src={process.env.PUBLIC_URL + "/images/admin/profile-2userblue.png"}
            alt="no img"
            className='w-6'
        />,
        name: <span className='font-semibold  pl-2'>Manage Admin</span>,
        to: '/admin/ManageAdmin'
    },
    
    {
        component: CNavGroup,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/managerequest.png"}
            alt="no img"
        />,
        iconTwo: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group2blue.png"}
            alt="no img"
            className='w-6'
        />,
        name: <span className='font-semibold  pl-2'>Manage Request</span>,
        items:[
            {
                component: CNavItem,
                name: <span className='fw-semibold   pl-2'>Content</span>,
                icon: <img
              src={process.env.PUBLIC_URL + "/images/admin/Groupmanage.png"}
              alt="no img"
              
          />,
                to: '/admin/Content',
                iconTwo:<img
                src={process.env.PUBLIC_URL + "/images/admin/User.png"}
                alt="no img"
            />,
              },
           
        ]
        
    },
    // {
    //     component: CNavItem,
    //     icon: <img
    //         src={process.env.PUBLIC_URL + "/images/admin/Group.png"}
    //         alt="no img"
    //     />,
    //     name: <span className='font-semibold  pl-2'>Manage</span>,
    //     to: '/admin/Manage',
        
    // },
    
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Vector (1).png"}
            alt="no img"
        />,
        iconTwo: <img
            src={process.env.PUBLIC_URL + "/images/admin/FrameOneblue.png"}
            alt="no img"
            className='w-6'
        />,
        name: <span className='font-semibold  pl-2'>Manage Courses</span>,
        to: '/admin/ManageCourses'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/manageorder.png"}
            alt="no img"
        />,
        iconTwo: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group3blue.png"}
            alt="no img"
            className='w-6'
        />,
        name: <span className='font-semibold  pl-2'>Manage Order</span>,
        to: '/admin/manageorder'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/coursepricing.png"}
            alt="no img"
        />,
        iconTwo: <img
            src={process.env.PUBLIC_URL + "/images/admin/Frametwoblue.png"}
            alt="no img"
            className='w-6'
        />,
        name: <span className='font-semibold  pl-2'>Course Pricing</span>,
        to: '/admin/CoursePricing'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group (2).png"}
            alt="no img"
        />,
        name: <span className='font-semibold  pl-2'>Forum</span>,
        to: '/admin/forum'
    },
    {
        component: CNavItem,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/pie-chart.png"}
            alt="no img"
        />,
        name: <span className='font-semibold  pl-2'>Analytics</span>,
        to: '/admin/Analytics'
    },
    {
        component: CNavGroup,
        icon: <img
            src={process.env.PUBLIC_URL + "/images/admin/systemsetting.png"}
            alt="no img"
        />,
        iconTwo: <img
            src={process.env.PUBLIC_URL + "/images/admin/Group5blue.png"}
            alt="no img"
            className='w-6'
        />,
        name: <span className='font-semibold  pl-2'>System Settings</span>,
        items:[
            {
                component: CNavItem,
                name: <span className='fw-semibold   pl-2'>Payment Settings</span>,
                to: '/admin/paymentsetting',
              },
              {
                component: CNavItem,
                name: <span className='fw-semibold   pl-2'>Currency Settings</span>,
                to: '/admin/systemsetting/CurrencySetting',
              },
              {
                component: CNavItem,
                name: <span className='fw-semibold   pl-2'>Notification Settings</span>,
                to: '/admin/notificationsetting',
              },
              {
                component: CNavItem,
                name: <span className='fw-semibold   pl-2'>Newsletter Settings</span>,
                to: '/admin/newslettersetting',
              },
           
        ]
        
    },

]

export default AdminNav
