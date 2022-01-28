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
  // const [cookies, remove] = useCookies(['alfa_care_user']);
  let history = useHistory();
  let auth = useAuth();
  const Swal = require("sweetalert2");
  const [cookies, remove] = useCookies(["randox_certifly_user"]);
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
        remove("randox_certifly_user", { path: "/" });
      }
    });
  }
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            {auth.randox_certifly_user.userType === "SuperAdmin" && (
              <>
                <li
                  className={
                    history.location.pathname === PATH.S_DASHBOARD ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_DASHBOARD,
                    }}
                  >
                    {" "}
                    <GrHome></GrHome>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.S_REPORTS ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_REPORTS,
                    }}
                  >
                    {" "}
                    <FaFileContract />
                    <span>Reports</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.S_HISTORY_LOGS ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_HISTORY_LOGS,
                    }}
                  >
                    {" "}
                    <FaHistory />
                    <span>Admin History Logs</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.S_CUSTOM_URNS_SEARCH ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_CUSTOM_URNS_SEARCH,
                    }}
                  >
                    {" "}
                    <IoMdSearch />
                    <span>Custom URNs Search</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.S_VERIFIER_COUNT ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_VERIFIER_COUNT,
                    }}
                  >
                    {" "}
                    <GrLineChart />
                    <span>Verifier Count</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.S_IMPORT_ORDERS ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_IMPORT_ORDERS,
                    }}
                  >
                    {" "}
                    <CgImport />
                    <span>Import Orders</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.S_REVIEW_CERTIFICATE ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_REVIEW_CERTIFICATE,
                    }}
                  >
                    {" "}
                    <BsFillPersonCheckFill></BsFillPersonCheckFill>
                    <span>Submit For Review</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.S_REVIEW_REQUEST ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_REVIEW_REQUEST,
                    }}
                  >
                    {" "}
                    <BsFillPersonCheckFill></BsFillPersonCheckFill>
                    <span>Review Certificate</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.S_ADMIN_USER ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_ADMIN_USER,
                    }}
                  >
                    {" "}
                    <FiUsers></FiUsers>
                    <span>Admin Users</span>
                  </Link>
                </li>
                <li
                  className={
                    history.location.pathname === PATH.S_HELP_SUPPORT ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.S_HELP_SUPPORT,
                    }}
                  >
                    {" "}
                    <BsFillPersonCheckFill></BsFillPersonCheckFill>
                    <span>Help Support</span>
                  </Link>
                </li>
                <li >
                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">  {" "}
                    <FiUsers></FiUsers>
                    <span>IT Support Tech</span></a>
                  <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li
                      className={
                        history.location.pathname === PATH.S_CHANGE_PASSWORD ? "active" : ""
                      }
                    >
                      <Link
                        to={{
                          pathname: PATH.S_CHANGE_PASSWORD,
                        }}
                      >
                        {" "}
                        <GoPrimitiveDot className="mr-2" />
                        <span>Change Password</span>
                      </Link>
                    </li>
                    <li
                      className={
                        history.location.pathname === PATH.S_UNDO_DELETE_CERT ? "active" : ""
                      }
                    >
                      <Link
                        to={{
                          pathname: PATH.S_UNDO_DELETE_CERT,
                        }}
                      >
                        {" "}
                        <GoPrimitiveDot className="mr-2" />
                        <span> Undo Deleted Cert </span>
                      </Link>
                    </li>
                    <li
                      className={
                        history.location.pathname === PATH.S_LOGIN_CHECK ? "active" : ""
                      }
                    >
                      <Link
                        to={{
                          pathname: PATH.S_LOGIN_CHECK,
                        }}
                      >
                        {" "}
                        <GoPrimitiveDot className="mr-2" />
                        <span> Login Check </span>
                      </Link>
                    </li>
                    <li
                      className={
                        history.location.pathname === PATH.S_REGISTRATION_CHECK ? "active" : ""
                      }
                    >
                      <Link
                        to={{
                          pathname: PATH.S_REGISTRATION_CHECK,
                        }}
                      >
                        {" "}
                        <GoPrimitiveDot className="mr-2" />
                        <span> Register Check </span>
                      </Link>
                    </li>
                    <li
                      className={
                        history.location.pathname === PATH.S_USED_QR_DEVICE ? "active" : ""
                      }
                    >
                      <Link
                        to={{
                          pathname: PATH.S_USED_QR_DEVICE,
                        }}
                      >
                        {" "}
                        <GoPrimitiveDot className="mr-2" />
                        <span>  Used QR Device </span>
                      </Link>
                    </li>
                    <li
                      className={
                        history.location.pathname === PATH.S_DOWNLOAD_CERTIFICATE ? "active" : ""
                      }
                    >
                      <Link
                        to={{
                          pathname: PATH.S_DOWNLOAD_CERTIFICATE,
                        }}
                      >
                        {" "}
                        <GoPrimitiveDot className="mr-2" />
                        <span>  Download Certificate  </span>
                      </Link>
                    </li>
                    <li
                      className={
                        history.location.pathname === PATH.S_BOOKING_REF_CHECK ? "active" : ""
                      }
                    >
                      <Link
                        to={{
                          pathname: PATH.S_BOOKING_REF_CHECK,
                        }}
                      >
                        {" "}
                        <GoPrimitiveDot className="mr-2" />
                        <span>  Booking Ref Check </span>
                      </Link>
                    </li>
                    <li
                      className={
                        history.location.pathname === PATH.S_AVERAGE_APPROVAL_TIME ? "active" : ""
                      }
                    >
                      <Link
                        to={{
                          pathname: PATH.S_AVERAGE_APPROVAL_TIME,
                        }}
                      >
                        {" "}
                        <GoPrimitiveDot className="mr-2" />
                        <span>   Avg. Approval Time</span>
                      </Link>
                    </li>
                    <li
                      className={
                        history.location.pathname === PATH.S_USER_CERTIFICATE ? "active" : ""
                      }
                    >
                      <Link
                        to={{
                          pathname: PATH.S_USER_CERTIFICATE,
                        }}
                      >
                        {" "}
                        <GoPrimitiveDot className="mr-2" />
                        <span>   User Certificates </span>
                      </Link>
                    </li>

                  </ul>
                </li>
                {/* <li
                  className={
                    history.location.pathname === PATH.SUPPORT_TECH ? "active" : ""
                  }
                >
                  <Link
                    to={{
                      pathname: PATH.SUPPORT_TECH,
                    }}
                  >
                    {" "}
                    <FiUsers></FiUsers>
                    <span>IT Support Tech</span>
                  </Link>
                </li> */}

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
    </div>
  );
}
