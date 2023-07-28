
import React from "react";
import { Routes, Route } from "react-router-dom";
import Slidebar from "../components/slidebar";
import Dashboard from "../pages/Dashboard";
import Form from "../pages/Form";
import Table from "../pages/Table";
import Chart from "../pages/Chart";
// import Calender from "../pages/Calenderr";
import Pages from "../pages/Pages";
import "./web.css";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import Regular from "../pages/Regular";
import Extended from "../pages/Extended";
import Calenderr from "../pages/Calenderr";
import Userpages from "../pages/Userpages"
import Register from "../pages/Register"
import Reacttable from "../pages/Reacttable"

function web() {
    return (
            <div className="main_container">
                <Slidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Form" element={<Form />} />
                    <Route path="/Table" element={<Table />} />
                    <Route path="/Chart" element={<Chart />} />
                    <Route path = "/Calenderr" element={<Calenderr/>}/>
                    <Route path="/Pages" element={<Pages />} />
                    <Route path="/LoginForm" element={<LoginForm />} />
                    <Route path="/SignupForm" element={<SignupForm />} />
                    <Route path="/Regular" element={<Regular/>}></Route>
                    <Route path="/Extended" element={<Extended/>}></Route>
                    <Route path="/Userpages" element={<Userpages/>} />
                    <Route path="/Register" element={<Register/>} />
                    <Route path="/Extended" element={<Extended/>} />
                    <Route path="/Reacttable" element={<Reacttable/>} />



                </Routes>
            </div>
    )
}

export default web