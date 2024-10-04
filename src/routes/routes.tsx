import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login/index";
import Dashboard from "../pages/dashboard";
import Departments from "../pages/departments";
import Schedule from "../pages/schedule";
import AddSchedulePage from "../pages/addSchedulePage";
import EndSchedulePage from "../pages/endSchedulePage";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/addSchedule" element={<AddSchedulePage />} />
            <Route path="/endSchedule" element={<EndSchedulePage />} />
        </Routes>
    );
}

export default Router;