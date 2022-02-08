import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CookiesProvider } from "react-cookie";
import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/mediaquery.css";
import "./index.css";
import "./assets/styles/style.css";
import "./assets/styles/muzamal.css";
import "./assets/styles/components-style.css";
import "./assets/js/jquery.slimscroll";
import "./App.css";
import "./assets/js/app.js";
import "./assets/js/common.js";
import "./loader.js";
import ".././src/assets/styles/main.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/asaad.css"
// import "react-circular-progressbar/dist/styles.css";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

if (process.env.NODE_ENV === "production") {
  console.log = function () { };
}
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
