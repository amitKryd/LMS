import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Protected from './authorization/Protected'
import { RoutePaths } from './route/RoutePath'
import ForIndividuals from './components/pages/Profile/individual/ForIndividuals'


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
            </Routes>
        </div>
    )
}

export default Routing