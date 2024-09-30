import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login/index";
import Dashboard from "../pages/dashboard";
import Departments from "../pages/departments";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default Router;