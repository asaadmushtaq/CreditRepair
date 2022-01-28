import React from "react";
import { useCookies } from "react-cookie";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
export function SignOut() {
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
        // history.push(PATH.LOGIN);
        remove("randox_certifly_user", { path: "/" });
      }
    });
  }

  return (
    <div
      onClick={() => {
        logout();
      }}
    >
      <div className="logout-text">
        <FiLogOut size={19} className="mr-3" />
        <Link to="#">{"Sign Out"}</Link>

      </div>
    </div>
  );
}
