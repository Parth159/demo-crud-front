import React, {Suspense} from 'react'
import { Routes, Route } from "react-router-dom";
import { mainRoutes } from 'config/routing';
import { PreloaderComponent } from "components/_common/Preloader";
export default function RouteWrapper() {
    var routeKeys = Object.keys(mainRoutes);
  return (
    <Suspense fallback={<PreloaderComponent />}>
        <Routes>
        {routeKeys.map((routeKey, i) => {
            return (
            <Route
                key={i}
                path={mainRoutes[routeKey].path}
                element={ mainRoutes[routeKey].element }
            />
            );
        })}
        </Routes>
    </Suspense>
  )
}
