// import React, { Suspense, lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Individual } from "../components/pages/Individuals/Individual";
// import { RoutePaths } from "./RoutePath";
// import ForUniversities from "../components/pages/Profile/Universities/ForUniversities";
// import ForCorporates from "../components/pages/Profile/corporates/ForCorporates";
// const ForIndividuals = lazy(() =>
//   import("../components/pages/Profile/individual/ForIndividuals")
// );

// const Routing = () => {
//   return (
//     <>
//       <Suspense fallback={<h3>...loading</h3>}>
//         <Routes>
//           <Route
//             exact
//             path={RoutePaths.home.path}
//             name={RoutePaths.home.name}
//             element={<Individual />}
//           />
//           <Route
//             exact
//             path={RoutePaths.forIndividuals.path}
//             name={RoutePaths.forIndividuals.name}
//             element={<ForIndividuals />}
//           />
//           <Route
//             exact
//             path={RoutePaths.forUniversities.path}
//             name={RoutePaths.forUniversities.name}
//             element={<ForUniversities />}
//           />
//           <Route
//             exact
//             path={RoutePaths.forCorporates.path}
//             name={RoutePaths.forCorporates.name}
//             element={<ForCorporates />}
//           />
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

// export default Routing;
