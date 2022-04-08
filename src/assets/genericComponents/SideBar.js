import React from "react";
import { Link, useHistory } from "react-router-dom";
import { PATH } from "../../config";
import { FaUserFriends } from "react-icons/fa";
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import { useCookies } from "react-cookie";
import { FiLogOut } from "react-icons/fi";
import { GoFile } from "react-icons/go";
export default function Sidebar() {
  let history = useHistory();
  let auth = useAuth();
  const Swal = require("sweetalert2");
  const [cookies, remove] = useCookies(["credit_repair_user"]);
  console.log("cookies:::", cookies);
  function logout() {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      // icon: "warning",
      showCancelButton: true,
      customClass: 'swal-wide',
      confirmButtonColor: "#01362c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        remove("credit_repair_user", { path: "/" });
      }
    });
  }
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            {auth.credit_repair_user.user.roleid === 2 && (
              <>
                <li
                  className={
                    history.location.pathname === PATH.ADMINDASHBOARD ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.ADMINDASHBOARD,
                    }}
                  >
                    {" "}
                    {/* <FiHome></FiHome> */}
                    <span>Home</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.ADMINCLIENTS ||
                      history.location.pathname === PATH.CREATENEWCLIENT ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.ADMINCLIENTS,
                    }}
                  >
                    {" "}
                    <FaUserFriends></FaUserFriends>
                    <span>Clients</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.ADMINLETTERLIBRARY ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.ADMINLETTERLIBRARY,
                    }}
                  >
                    {" "}
                    <GoFile></GoFile>
                    <span>Letter Library</span>
                  </Link>
                </li>

                <li
                  onClick={() => {
                    logout();
                  }}
                >
                  <Link
                    to="#"
                  >
                    {" "}
                    <FiLogOut className="mr-0" />
                    <span >Sign out</span>
                  </Link>
                </li>

              </>
            )}

            {auth.credit_repair_user.userType === 1 && (
              <>
                <li
                  className={
                    history.location.pathname === PATH.CLIENTDASHBOARD ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.CLIENTDASHBOARD,
                    }}
                  >
                    {" "}
                    {/* <FiHome></FiHome> */}
                    <span>Home</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.ADMINCLIENTS ||
                      history.location.pathname === PATH.CREATENEWCLIENT ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.ADMINCLIENTS,
                    }}
                  >
                    {" "}
                    <FaUserFriends></FaUserFriends>
                    <span>Clients</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.ADMINLETTERLIBRARY ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.ADMINLETTERLIBRARY,
                    }}
                  >
                    {" "}
                    <GoFile></GoFile>
                    <span>Letter Library</span>
                  </Link>
                </li>

                <li
                  onClick={() => {
                    logout();
                  }}
                >
                  <Link
                    to="#"
                  >
                    {" "}
                    <FiLogOut className="mr-0" />
                    <span >Sign out</span>
                  </Link>
                </li>

              </>
            )}

          </ul>
        </div>
      </div>
    </div >
  );
}
