import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Protected from './authorization/Protected'
import ForIndividuals from './components/pages/Profile/individual/ForIndividuals'
import AdminLayout from './admin/AdminLayout'
import Page404 from './components/pages/page404/Page404'
import Dashboard from './admin/pages/Dashboard'


const Routing = () => {
    return (
        <div>
            <Routes>

                <Route
                    exact
                    path='/forIndividuals'
                    name='forIndividuals'
                    element={<Protected Component={ForIndividuals} />}
                />
                
                {/* <Route
                    exact
                    path='*'
                    name='Adminlayout'
                    element={<Protected Component={AdminLayout} />}
                /> */}
              
                
                {/* <Route
                    exact
                    path='*'
                    name='Page 404' 
                    element={<Page404 />}
                /> */}
            </Routes>
        </div>
    )
}

export default Routing