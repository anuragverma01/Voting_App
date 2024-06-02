import React from "react";
import Home from "./compoments/Home";
import Login from "./compoments/login";
import Panel from "./compoments/panel";
import Registartion from "./compoments/Registartion";
import PersonalInfo from "./compoments/PersonalInfo";
import VotePage from "./compoments/VotePage";
import Rules from "./compoments/Rules";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<Registartion />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/ElectionPage" element={<VotePage />} />
        <Route path="/Panel" element={<Panel />} />
      </Routes>
    </div>
  );
}

export default App;
