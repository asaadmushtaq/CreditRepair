import React from "react";
import { GoPlus } from "react-icons/go"
import { AiOutlineReload } from "react-icons/ai"
import { useHistory } from "react-router-dom";
import { PATH } from "../../../config";

export default function AdminClients() {
  let history = useHistory();
  function moveNext() {
    history.push(PATH.CREATENEWCLIENT)
  }
  return (
    <React.Fragment>
      <div id="dash-content">
        <div id="clients-list">
          <div className="global-content-card ">
            <div className="global-content-card-header ">
              <h4 className="mb-0">All Clients</h4>
              <div className="left-buttons">
                <button type="button" className="ant-btn ant-btn-icon-only">
                  <i className="anticon anticon-reload">
                    <AiOutlineReload />
                  </i>
                </button><span style={{ display: 'inline-block', cursor: 'not-allowed' }}><button disabled type="button" className="ant-btn ant-btn-danger ant-btn-icon-only" style={{ pointerEvents: 'none' }}><i aria-label="icon: delete" className="anticon anticon-delete"><svg viewBox="64 64 896 896" focusable="false" className data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" /></svg></i></button></span></div>
              <div className="right button-row"><span>Size:</span>
                <button type="button" className="ant-btn ant-dropdown-trigger"><span>15 </span><i aria-label="icon: down" className="anticon anticon-down"><svg viewBox="64 64 896 896" focusable="false" className data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></i></button>
                <button type="button" className="ant-btn"><span>Clear Filters</span></button>
              </div>
            </div>
            <div className="no-clients-container">
              <div className="no-clients-box" onClick={moveNext}>
                <GoPlus className="MuiSvgIcon-root people-icon" />
                <h5>You have no clients!</h5>
                <p>Click here to create your first client.</p>
              </div>
              <div className="import-clients-link"><a href="/#">Or, click here to import existing clients</a></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}