import React from 'react'
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
// const Content = React.lazy(() => import('./pages/Content'))
// const User = React.lazy(() => import('./pages/User'))
// const Manage = React.lazy(() => import('./pages/Manage'))
// const Payment = React.lazy(() => import('./pages/Payment'))
// const Design = React.lazy(() => import('./pages/Design'))
// const Forum = React.lazy(() => import('./pages/Forum'))
// const Analytics = React.lazy(() => import('./pages/Analytics'))
const routes = [
    
    { path: '/dashboard', name: 'Dashboard', element: <Dashboard/>  },
    // { path: '/Content', name: 'Content', element: <Content />,  },
    // { path: '/User', name: 'User', element: <User /> },
    // { path: '/Manage', name: 'Manage', element: <Manage /> },
    // { path: '/Payment', name: 'Payment', element: <Payment /> },
    // { path: '/design', name: 'Design', element: <Design /> },
    // { path: '/forum', name: 'forum', element: <Forum /> },
    // { path: '/Analytics', name: 'Analytics', element: <Analytics /> }
]
export default routes