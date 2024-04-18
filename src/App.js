import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutePaths } from "./route/RoutePath";
import { Individual } from "./components/pages/Individuals/Individual";
import ForIndividuals from "./components/pages/Profile/individual/ForIndividuals";
import AdminLayout from "./admin/AdminLayout";
import Page404 from "./components/pages/page404/Page404";
import Studentlayout from "./studentdashboard/StudentLayout";
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

function App() {
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  const isStudentRoute = window.location.pathname.startsWith('/student');

  if (isAdminRoute) {
    import("./admin/scss/style.scss");
  }else if(isStudentRoute){
    import("./admin/scss/style.scss");
  }

  return (
    <>
      <BrowserRouter basename="/">
        {/* <Routing /> */}
        <Suspense>
          <Routes>
            <Route
              exact
              path="/"
              name={RoutePaths.home.name}
              element={<Individual />} />
            <Route
              exact
              path={RoutePaths.home.path}
              name={RoutePaths.home.name}
              element={<ForIndividuals />}
            />
            <Route path="/admin">
              <Route
                exact
                path='*'
                name='Adminlayout'
                element={<AdminLayout />}
              />
              <Route
              exact
              path='*'
              name='Page 404'
              element={<Page404 />}
            />
            </Route>
            <Route path="/student">
              <Route
                exact
                path='*'
                name='Adminlayout'
                element={<Studentlayout />}
              />
              <Route
              exact
              path='*'
              name='Page 404'
              element={<Page404 />}
            />
            </Route>

            <Route path="/forIndividuals">
              <Route exact path="/forIndividuals" name="forIndividuals" element={<DefaultLayout />} />
            </Route>
            <Route
              exact
              path='*'
              name='Page 404'
              element={<Page404 />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
