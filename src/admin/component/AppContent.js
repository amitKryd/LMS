import React, { Suspense } from 'react'
import { Navigate,BrowserRouter, Route, Routes,Switch  } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import Page404 from '../../components/pages/page404/Page404'
// routes config
import routes from '../routes'


const AppContent = () => {
  return (
    <div className='bg-gray-100 min-h-[100vh] px-4 py-4 w-[calc(100%-200px)]'>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
            {routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                name={route.name}
                element={route.element}
              />
            ))}
            <Route
                    exact
                    path='*'
                    name='Page 404' 
                    element={<Page404 />}
                />
        </Routes>
       
      </Suspense>
      </div>
  )
}

export default React.memo(AppContent)