import React, { Suspense } from 'react'
import { Navigate,BrowserRouter, Route, Routes,Switch  } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import Dashboard from '../pages/Dashboard'

const AppContent = () => {

  console.log(routes)
  
  return (
    <CContainer className="px-4" lg>
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
            {/* Fallback route in case no other route matches */}
            {/* <Route path="*" element={<Navigate to="/404" />} /> */}
          
          {/* <Route path="/admin/adminLayout/dashboard" element={<Navigate to="/admin/adminLayout/dashboard" replace />} /> */}
        </Routes>
       
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)