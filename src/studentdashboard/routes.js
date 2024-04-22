import React from 'react'
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Bookmarks = React.lazy(() => import('./pages/Bookmarks'))
const Certificates = React.lazy(() => import('./pages/Certificates'))
const CourseCatalog = React.lazy(() => import('./pages/CourseCatalog'))
const Payment = React.lazy(() => import('./pages/Payments'))
const MyLearning = React.lazy(() => import('./pages/MyLearning'))
const MyProgress = React.lazy(() => import('./pages/MyProgress'))
const Test = React.lazy(() => import('./pages/Test'))
const routes = [
    
    { path: '/dashboard', name: 'Dashboard', element: <Dashboard/>  },
    { path: '/Bookmarks', name: 'Bookmarks', element: <Bookmarks />,  },
    { path: '/Certificates', name: 'Certificates', element: <Certificates /> },
    { path: '/CourseCatalog', name: 'CourseCatalog', element: <CourseCatalog /> },
    { path: '/Payment', name: 'Payment', element: <Payment /> },
    { path: '/MyLearning', name: 'MyLearning', element: <MyLearning /> },
    { path: '/MyProgress', name: 'MyProgress', element: <MyProgress /> },
    { path: '/Test', name: 'Test', element: <Test /> }
]
export default routes