import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import * as serviceWorker from "./serviceWorker";

// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// import * as firebase from "firebase/app";

// // Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

ReactDOM.render(
  <React.StrictMode>
    <h1>カモの写真のデータベース</h1>

    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline an,d load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
