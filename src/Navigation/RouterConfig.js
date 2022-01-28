/*eslint-disable*/
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { WEB_PAGES } from "../components";
import { PATH } from "../config";
import PublicRoute from "./Auth/PublicRoute";
import { useLocation } from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute";
import { useAuth } from "./Auth/ProvideAuth";
import { useDispatch } from "react-redux";
import { SessionIsExist } from "../redux/actions";
import { useCookies } from "react-cookie";
export const RouterConfig = () => {
  const { pathname } = useLocation();
  const [cookies, remove] = useCookies(["randox_certifly_user"]);
  let auth = useAuth();
  let dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (auth && auth.randox_certifly_user && auth.randox_certifly_user.token) {
      dispatch(SessionIsExist({
        "sessionLogId": 0,
        "userId": auth.randox_certifly_user.userId,
        "os": auth.randox_certifly_user.os,
        "browser": auth.randox_certifly_user.browser,
        "ip": auth.randox_certifly_user.ip,
      }, auth.randox_certifly_user.token, moveToNext))
    }
  }, [dispatch, auth, pathname])
  function moveToNext() {
    remove("randox_certifly_user", { path: "/" });
  }
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        {/* <PublicRoute exact path={PATH.LOGIN}>
          <WEB_PAGES.LOGIN />
        </PublicRoute> */}
        <PublicRoute exact path={PATH.HOMEPAGE}>
          <WEB_PAGES.HOMEPAGE />
        </PublicRoute>
        {/* List all private routes here */}
        {/* <PrivateRoute exact path={PATH.PROFILESHOW}>
          <WEB_PAGES.PROFILESHOW />
        </PrivateRoute>
        <PrivateRoute exact path={PATH.PROFILEEDIT}>
          <WEB_PAGES.PROFILEEDIT />
        </PrivateRoute> */}

        <Route path={PATH.NOPAGE} component={WEB_PAGES.NOPAGE} />
      </Switch>
    </div>
  );
};
