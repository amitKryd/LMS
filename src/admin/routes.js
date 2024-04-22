import React from 'react'
import Dashboard from './pages/Dashboard'

// const Dashboard = React.lazy(() => import('./pages/Dashboard'))

const Content = React.lazy(() => import('./pages/Content'))
const ManageAdmin = React.lazy(() => import('./pages/ManageAdmin'))
const ManageContent = React.lazy(() => import('./pages/managecontent/ManageContent'))
const Payment = React.lazy(() => import('./pages/Payment'))
const ManageCourses = React.lazy(() => import('./pages/ManageCourses'))
const Forum = React.lazy(() => import('./pages/Forum'))
const Analytics = React.lazy(() => import('./pages/Analytics'))
const CoursePricing = React.lazy(() => import('./pages/CoursePricing'))
const Student = React.lazy(() => import('./pages/manageuser/Student'))
const Teacher = React.lazy(() => import('./pages/manageuser/Teacher'))
const University = React.lazy(() => import('./pages/manageuser/University'))
const Corporate = React.lazy(() => import('./pages/manageuser/Corporate'))
const CurrencySetting = React.lazy(() => import('./pages/systemsetting/CurrencySetting'))

const routes = [
    
    { path: '/dashboard', exact:true, name: 'Dashboard', element: <Dashboard/>  },
    { path: '/Manage/student', name: 'Student', element: <Student /> },
    { path: '/Manage/Teacher', name: 'Teacher', element: <Teacher /> },
    { path: '/Manage/University', name: 'University', element: <University /> },
    { path: '/Manage/Corporate', name: 'Corporate', element: <Corporate /> },
    { path: '/Manage/Content', name: 'ManageContent', element: <ManageContent />,  },
    { path: '/ManageAdmin', name: 'ManageAdmin', element: <ManageAdmin /> },
    // { path: '/Manage', name: 'Manage', element: <Manage /> },
    { path: '/CoursePricing', name: 'CoursePricing', element: <CoursePricing /> },
    { path: '/Payment', name: 'Payment', element: <Payment /> },
    { path: '/ManageCourses', name: 'ManageCourses', element: <ManageCourses /> },
    { path: '/forum', name: 'forum', element: <Forum /> },
    { path: '/Analytics', name: 'Analytics', element: <Analytics /> },
    { path: '/systemsetting/CurrencySetting', name: 'CurrencySetting', element: <CurrencySetting /> },
]
export default routes