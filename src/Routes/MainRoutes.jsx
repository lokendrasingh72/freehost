import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./public-layout";
import PrivateRoute from "./private-layout";
import typeRoutes from "./index";

const MainRoutes = () => {
  const routes = typeRoutes();
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            if (route.type === "private") {
              return (
                <Route
                  path={route.path}
                  element={<PrivateRoute {...route} />}
                />
              );
            }
            if (route.type === "public") {
              return (
                <Route path={route.path} element={<PublicRoute {...route} />} />
              );
            }
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
