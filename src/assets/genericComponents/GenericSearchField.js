import React from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router";
import { PATH } from "../../config";
export function GenericSearchField(props) {
  let history = useHistory();
  function goNext() {
    history.push({
      pathname: PATH.ExploreDashboard,
    });
  }
  return (
    <div className="main_header">
      {history.location.pathname === PATH.EXPLORE ? (
        <div class="form-group position-relative mb-0 main_header">
          <FiSearch className="searchfieldicon" />
          <input
            type="email"
            className="form-control searchfield mb-0"
            onClick={() => goNext()}
            placeholder={props && props.placeholder ? props.placeholder : ""}
          />
        </div>
      ) : (
        <div class="form-group position-relative mb-0 main_header">
          <FiSearch className="searchfieldicon" />
          <input
            type="email"
            class="form-control searchfield mb-0"
            placeholder={props && props.placeholder ? props.placeholder : ""}
          />
        </div>
      )}
    </div>
  );
}
