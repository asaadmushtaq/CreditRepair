import NoPage from "./NoPageFound";
import React from "react";
import { LoaderPage } from "../assets";
import login from "./Login";
import Signup from "./Signup";
import AdminDashboard from "./Admin/Admin-Dashboard";
import AdminClients from "./Admin/Admin-Clients";
import AdminLetterLibrary from "./Admin/Admin-LetterLibrary";
import HomePage from "./HomePage";

class DynamicImport extends React.Component {
  state = {
    component: null,
  };
  componentDidMount() {
    this.props.load().then((component) => {
      this.setState(() => ({
        component: component.default ? component.default : component,
      }));
    });
  }
  render() {
    return this.props.children(this.state.component);
  }
}
// const Dashboard = (props) => (
//   <DynamicImport load={() => import("./Dashboard")}>
//     {(Component) =>
//       Component === null ? <LoaderPage /> : <Component {...props} />
//     }
//   </DynamicImport>
// );
const WEB_PAGES = {
  NOPAGE: NoPage,
  LOGIN: login,
  SIGNUP: Signup,
  ADMINDASHBOARD: AdminDashboard,
  ADMINCLIENTS: AdminClients,
  ADMINLETTERLIBRARY: AdminLetterLibrary,
  HOMEPAGE: HomePage
};

export { WEB_PAGES };
