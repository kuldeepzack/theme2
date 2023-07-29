import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './slidebar.css';
import Logo from "../../assets/images/logo.svg"
import dashboard from "../../assets/images/dashboard.png"
import form from "../../assets/images/form.png"
import table from "../../assets/images/table.png"
import chart from "../../assets/images/chart.png"
import calender from "../../assets/images/calendar.png"
import pages from "../../assets/images/coding.png"
// import profile from "../../assets/images/profile1.jpg"
import profile1 from "../../assets/images/kd1.jpg"
// import login from "../../assets/images/login (1).png"
import signup from "../../assets/images/add-user (1).png"
import table1 from "../../assets/images/table (1).png"


function Slidebar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleToggle = () => {
        setShowDropdown(!showDropdown)
    }

    const [show, setShow] = useState(false);
    const handleToggle1 = () => {
        setShow(!show)
    }

    const [show1, setShow1] = useState(false);
    const handleToggle2 = () => {
        setShow1(!show1)
    }

    return (
        <>
            <div className='slidebar-container'>
             
                <div className='slides'>
                    <div className='sidebar-logo'>
                        <img
                            className="logo_view2"
                            src={Logo}
                            alt="NachDark"
                        />
                        <h6 className='top-iconn'>Creative Theme</h6>
                    </div>

                    <div className='profile'>
                        <img
                            className="photo"
                            src={profile1}
                            alt="NachDark"
                        />

                        <h6 className='icon-head'>Kuldeep Singh</h6>
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


                        < >
                            <div className="nav-icon-container">
                                <img
                                    className="logo_view"
                                    src={form}
                                    alt="NachDark"
                                />
                                <div className='nav-item'>
                                    <button onClick={handleToggle} >Form </button>
                                    <b className={!showDropdown ? "caret caret-rotate" : 'caret'}></b>

                                </div>
                            </div>
                            <div className={!showDropdown ? 'nav-item1' : 'nav-item1 nav-item1-active'}>
                                <Link to={'/LoginForm'} className="decoration-none">
                                <div className="nav-icon-container2">
                                <img
                                    className="logo_view1"
                                    src={signup}
                                    alt="NachDark"
                                />
                                    <div className='nav-subitem'>
                                        <button>Login</button>
                                    </div>
                                    </div>
                                </Link>
                            
                                <Link to={'/SignupForm'} className="decoration-none">
                                <div className="nav-icon-container2">
                                <img
                                    className="logo_view1"
                                    src={signup}
                                    alt="NachDark"
                                />
                                    <div className='nav-subitem'>
                                        <button>Signup</button>
                                    </div>
                                    </div>
                                </Link>
                            </div>
                        </>



                        <>
                            <div className="nav-icon-container" >
                                <img
                                    className="logo_view"
                                    src={table}
                                    alt="NachDark"
                                />
                                <div className='nav-item'>
                                    <button onClick={handleToggle1}>Table</button>
                                    <b className={!show ? "caret caret-rotate" : 'caret'}></b>
                                </div>
                            </div>
                            <div className={!show ? 'nav-item1' : 'nav-item1 nav-item1-active'}>
                                <Link to={'/Regular'} className="decoration-none">
                                <div className="nav-icon-container2">
                                <img
                                    className="logo_view1"
                                    src={table1}
                                    alt="NachDark"
                                />
                                    <div className='nav-subitem'>
                                        <button>Regular</button>

                                    </div>
                                    </div>
                                </Link>

                         

                                <Link to={'/Extended'} className="decoration-none">
                                <div className="nav-icon-container2">
                                <img
                                    className="logo_view1"
                                    src={table1}
                                    alt="NachDark"
                                />
                                    <div className='nav-subitem'>
                                        <button>Extended</button>
                                    </div>
                                    </div>
                                </Link>
                              
                                <Link to={'/Reacttable'} className="decoration-none">
                                <div className="nav-icon-container2">
                                <img
                                    className="logo_view1"
                                    src={table1}
                                    alt="NachDark"
                                />
                                    <div className='nav-subitem'>
                                        <button>Reacttable</button>
                                    </div>
                                    </div>
                                </Link>
                            </div>

                        </>
                        <Link to={'/'} className="decoration-none">
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
                        <Link to={'/Calenderr'} className="decoration-none">
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



                        {/* <Link to={'../../pages/Pages.js'} className="decoration-none">
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
                        </Link> */}

<>
                            <div className="nav-icon-container">
                            <img
                                    className="logo_view"
                                    src={pages}
                                    alt="NachDark"
                                />
                                <div className='nav-item'>
                                    <button onClick={handleToggle2} >Pages </button>
                                    <b className={!show1 ? "caret caret-rotate" : 'caret'}></b>

                                </div>
                            </div>
                            <div className={!show1 ? 'nav-item1' : 'nav-item1 nav-item1-active'}>
                                <Link to={'/Userpages'} className="decoration-none">
                                <div className="nav-icon-container2">
                            <img
                                    className="logo_view"
                                    src={pages}
                                    alt="NachDark"
                                />
                                    <div className='nav-subitem'>
                                        <button>Userpages</button>
                                    </div>
                                    </div>
                                </Link>

                                <Link to={'/Register'} className="decoration-none">
                                <div className="nav-icon-container2">
                            <img
                                    className="logo_view"
                                    src={pages}
                                    alt="NachDark"
                                />
                                    <div className='nav-subitem'>
                                        <button>Register</button>
                                    </div>
                                    </div>
                                </Link>
                            </div>
                        </>





                    </nav>


                </div>
                <footer className='copyright' id="footer">
                    <div className="container">
                        <div className="copyright1">
                            &copy; Copyright <strong><span>Kuldeep Singh</span></strong>
                        </div>
                        <div className="copyright1">

                            Designed by <a href="https://www.linkedin.com/in/kuldeep-singh-690b3919a?original_referer=https%3A%2F%2Fkuldeepzack.github.io%2F">Kuldeep Singh</a>
                        </div>
                    </div>
                </footer>
            </div>

        </>

    )

}


export default Slidebar;
