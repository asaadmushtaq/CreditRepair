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

        <PrivateRoute exact path={PATH.CLIENTDASHBOARD}>
          <WEB_PAGES.CLIENTDASHBOARD />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.DASHBOARD}>
          <WEB_PAGES.DASHBOARD />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMIN_SETTINGS}>
          <WEB_PAGES.ADMIN_SETTINGS />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMINCLIENTS}>
          <WEB_PAGES.ADMINCLIENTS />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.ADMINLETTERLIBRARY}>
          <WEB_PAGES.ADMINLETTERLIBRARY />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.CREATENEWCLIENT}>
          <WEB_PAGES.CREATENEWCLIENT />
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
        <PublicRoute exact path={PATH.COMPANYPROFILES}>
          <WEB_PAGES.COMPANYPROFILES />
        </PublicRoute>
        <PublicRoute exact path={PATH.HOWITWORKS}>
          <WEB_PAGES.HOWITWORKS />
        </PublicRoute>
        <PublicRoute exact path={PATH.VIDEOGALLERY}>
          <WEB_PAGES.VIDEOGALLERY />
        </PublicRoute>
        <PublicRoute exact path={PATH.CLIENTTESTIMONIALS}>
          <WEB_PAGES.CLIENTTESTIMONIALS />
        </PublicRoute>
        <PublicRoute exact path={PATH.TERMSANDCONDITIONS}>
          <WEB_PAGES.TERMSANDCONDITIONS />
        </PublicRoute>
        <PublicRoute exact path={PATH.SERVICES}>
          <WEB_PAGES.SERVICES />
        </PublicRoute>
        <PublicRoute exact path={PATH.CREDIT}>
          <WEB_PAGES.CREDIT />
        </PublicRoute>
        <PublicRoute exact path={PATH.BLOGHOMEPAGE}>
          <WEB_PAGES.BLOGHOMEPAGE />
        </PublicRoute>
        <PublicRoute exact path={PATH.PRICINGPLAN}>
          <WEB_PAGES.PRICINGPLAN />
        </PublicRoute>
        <Route path={PATH.NOPAGE} component={WEB_PAGES.NOPAGE} />
      </Switch>
    </div>
  );
};
