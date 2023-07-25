
import React from "react";
import { Routes, Route } from "react-router-dom";
import Slidebar from "../components/slidebar/Slidebar";

import Dashboard from "../pages/Dashboard";
import Form from "../pages/Form";
import Table from "../pages/Table";
import Chart from "../pages/Chart";
import Calender from "../pages/Calender";
import Pages from "../pages/Pages";
import "./web.css"


function web() {
    return (
            <div className="main_container">
                <Slidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Form" element={<Form />} />
                    <Route path="/Table" element={<Table />} />
                    <Route path="/Chart" element={<Chart />} />
                    <Route path="/Calender" element={<Calender />} />
                    <Route path="/Pages" element={<Pages />} />
                </Routes>
            </div>
    )
}

export default web