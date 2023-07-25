import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './slidebar.css';
import Logo from "../../assets/images/logo.svg"
import dashboard from "../../assets/images/dashboard.png"
import form from "../../assets/images/form.png"
import table from "../../assets/images/table.png"
import chart from "../../assets/images/chart.png"
import calender from "../../assets/images/calendar.png"
import pages from "../../assets/images/coding.png"
import profile from "../../assets/images/profile1.jpg"
import profile1 from "../../assets/images/kd1.jpg"

function Slidebar() {

   
        return (
            <div className='slidebar-container'>
                <div className='slides'>
                    <div className='sidebar-logo'>
                        <img
                            className="logo_view"
                            src={Logo}
                            alt="NachDark"
                        />
                        <h4>Creative Theme</h4>
                    </div>

                    <div className='profile'>
                        <img
                            className="photo"
                            src={profile1}
                            alt="NachDark"
                        />
                        <h6>Kuldeep Singh</h6>
                    </div>





                    <nav id="sidebar" className="sidebar-container" >
                        <Link to={'/'} className="decoration-none">
                            <div className="nav-icon-container" >
                                <img
                                    className="logo_view"
                                    src={dashboard}
                                    alt="NachDark"
                                />
                                <div className='nav-item'>
                                    <button>Dashboard</button>
                                </div>
                            </div>
                        </Link>


                        <Link to={'../../pages/Form.js'} className="decoration-none">
                        <div className="nav-icon-container" >
                            <img
                                className="logo_view"
                                src={form}
                                alt="NachDark"
                            />
                            <div className='nav-item'>
                                <button>Form</button>
                            </div>
                        </div>
                    </Link> 



                        <Link to={'../../pages/Table.js'} className="decoration-none">
                            <div className="nav-icon-container" >
                                <img
                                    className="logo_view"
                                    src={table}
                                    alt="NachDark"
                                />
                                <div className='nav-item'>
                                    <button>Table</button>
                                </div>
                            </div>
                        </Link>
                        <Link to={'../../pages/Chart.js'} className="decoration-none">
                            <div className="nav-icon-container" >
                                <img
                                    className="logo_view"
                                    src={chart}
                                    alt="NachDark"
                                />
                                <div className='nav-item'>
                                    <button>Chart</button>
                                </div>
                            </div>
                        </Link>
                        <Link to={'../../pages/Calender.js'} className="decoration-none">
                            <div className="nav-icon-container" >
                                <img
                                    className="logo_view"
                                    src={calender}
                                    alt="NachDark"
                                />
                                <div className='nav-item'>
                                    <button>Calender</button>
                                </div>
                            </div>
                        </Link>
                        <Link to={'../../pages/Pages.js'} className="decoration-none">
                            <div className="nav-icon-container" >
                                <img
                                    className="logo_view"
                                    src={pages}
                                    alt="NachDark"
                                />
                                <div className='nav-item'>
                                    <button>Pages</button>
                                </div>
                            </div>
                        </Link>
                    </nav>


                </div>
            </div>

        )
    
}


export default Slidebar;