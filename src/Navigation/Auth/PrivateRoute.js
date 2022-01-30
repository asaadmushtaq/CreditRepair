// A wrapper for <Route> that redirects to the login

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { PATH } from "../../config";
import { useAuth } from "./ProvideAuth";
import { ParentComponentWithSideBar } from "../../assets";
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      onUpdate={() => window.scrollTo(0, 0)}
      render={({ location }) =>
        auth.credit_repair_user && auth.credit_repair_user.token ? (
          <>
            <ParentComponentWithSideBar>
              {children}
            </ParentComponentWithSideBar>
          </>
        ) : (
          <Redirect
            to={{
              pathname: PATH.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
