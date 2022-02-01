import React from "react";
import { Link, useHistory } from "react-router-dom";
import { PATH } from "../../config";
import { FaFileContract, FaHistory } from "react-icons/fa";
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import { useCookies } from "react-cookie";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import { GrHome, GrLineChart } from "react-icons/gr";
import { CgImport } from "react-icons/cg";
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
            {auth.credit_repair_user.userType === "Admin" && (
              <>
                {/* <li
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
                    <GrHome></GrHome>
                    <span>Home</span>
                  </Link>
                </li> */}
                <li
                  className={
                    history.location.pathname === PATH.ADMINCLIENTS ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.ADMINCLIENTS,
                    }}
                  >
                    {" "}
                    <GrHome></GrHome>
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
                    <GrHome></GrHome>
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
