import React from 'react'
import Dashboard from './pages/Dashboard'
// const Dashboard = React.lazy(() => import('./pages/Dashboard'))

const Content = React.lazy(() => import('./pages/Content'))
const User = React.lazy(() => import('./pages/User'))
const Manage = React.lazy(() => import('./pages/Manage'))
const Payment = React.lazy(() => import('./pages/Payment'))
const Design = React.lazy(() => import('./pages/Design'))
const Forum = React.lazy(() => import('./pages/Forum'))
const Analytics = React.lazy(() => import('./pages/Analytics'))
const routes = [
    
    { path: '/admin/dashboard', name: 'Dashboard', element: <Dashboard/>  },
    { path: '/admin/Content', name: 'Content', element: <Content />,  },
    { path: '/admin/User', name: 'User', element: User },
    { path: '/admin/Manage', name: 'Manage', element: Manage },
    { path: '/admin/Payment', name: 'Payment', element: Payment },
    { path: '/admin/design', name: 'Design', element: Design },
    { path: '/admin/forum', name: 'forum', element: Forum },
    { path: '/admin/Analytics', name: 'Analytics', element: Analytics }
]
export default routes