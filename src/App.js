import React,{Suspense} from "react";
// import Routing from "./route/Routing";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutePaths } from "./route/RoutePath";
import { Individual } from "./components/pages/Individuals/Individual";
import ForIndividuals from "./components/pages/Profile/individual/ForIndividuals";
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

function App() {
  return (
    <>
<BrowserRouter basename="/">
      {/* <Routing /> */}
      <Suspense>
        <Routes>
        <Route
            exact
            path={RoutePaths.home.path}
            name={RoutePaths.home.name}
            element={<Individual />} />
        <Route
            exact
            path={RoutePaths.home.path}
            name={RoutePaths.home.name}
            element={<ForIndividuals />}
          />
        <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
