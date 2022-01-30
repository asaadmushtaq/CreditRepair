/*eslint-disable*/
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { WEB_PAGES } from "../components";
import { PATH } from "../config";
import PublicRoute from "./Auth/PublicRoute";
import { useLocation } from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute";
export const RouterConfig = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <PublicRoute exact path={PATH.LOGIN}>
          <WEB_PAGES.LOGIN />
        </PublicRoute>
        <PublicRoute exact path={PATH.SIGNUP}>
          <WEB_PAGES.SIGNUP />
        </PublicRoute>
        {/* List all private routes here */}
        <PrivateRoute exact path={PATH.ADMINDASHBOARD}>
          <WEB_PAGES.ADMINDASHBOARD />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMINCLIENTS}>
          <WEB_PAGES.ADMINCLIENTS />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMINLETTERLIBRARY}>
          <WEB_PAGES.ADMINLETTERLIBRARY />
        </PrivateRoute>
        <PublicRoute exact path={PATH.HOMEPAGE}>
          <WEB_PAGES.HOMEPAGE />
        </PublicRoute>
        <PublicRoute exact path={PATH.ABOUTUS}>
          <WEB_PAGES.ABOUTUS />
        </PublicRoute>
        <PublicRoute exact path={PATH.CONTACTUS}>
          <WEB_PAGES.CONTACTUS />
        </PublicRoute>
        <Route path={PATH.NOPAGE} component={WEB_PAGES.NOPAGE} />
      </Switch>
    </div>
  );
};
