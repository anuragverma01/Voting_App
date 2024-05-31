import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./compoments/Home";
import Registartion from "./compoments/Registartion";
import Login from "./compoments/login";
import PersonalInfo from "./compoments/PersonalInfo";
import VotePage from "./compoments/VotePage";
import VotingPanel from "./compoments/VotingPanel";
import Panel from "./compoments/panel";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Registartion /> */}
    {/* <Login /> */}
    {/* <PersonalInfo /> */}
    {/* <VotePage /> */}
    {/* <VotingPanel /> */}
    <Panel />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
