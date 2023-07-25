import React from 'react'
import nc from "../assets/images/NC.png"
import flashlight from "../assets/images/flashlight.png"
import error from "../assets/images/errror.png"
import followers from "../assets/images/followers.png"
import "./Dashboard.css";
import united from "../assets/images/united.png"
import flag from "../assets/images/flag.png"
import india from "../assets/images/india.png"
import kingdom from "../assets/images/united-kingdom.png"
import brasil from "../assets/images/flag (1).png"
import email from "../assets/images/email.png"
import nd from "../assets/images/nd.png"
import rd from "../assets/images/rd.png"
import check from "../assets/images/crossed.png"
import edit from "../assets/images/edit.png"


function Dashboard() {
    return (

        <div className="rightside_container">

            <div className="row log-box">
                <div className="col-md-3 main-right">

                    <div className='s1-container'>
                        <div className='bottom'>
                            <div className='box'>
                                <img
                                    className="logo_view"
                                    src={nc}
                                    alt="NachDark"
                                />
                            </div >
                            <div className='box-2'>Number
                                <h4>150GB</h4>

                            </div>
                        </div>
                        <hr /> <p>Update Now</p>
                    </div>
                </div>

                <div className="col-md-3 main-right" >
                    <div className='s1-container'>
                        <div className='bottom'>
                            <div className='box'>
                                <img
                                    className="logo_view"
                                    src={flashlight}
                                    alt="NachDark"
                                />
                            </div >
                            <div className='box-2'>Revenue
                                <h4>$1250</h4>
                            </div>
                        </div>
                        <hr /> <p>Last day</p>
                    </div>
                </div>

                <div className="col-md-3 main-right" >
                    <div className='s1-container'>
                        <div className='bottom'>
                            <div className='box'>
                                <img
                                    className="logo_view"
                                    src={error}
                                    alt="NachDark"
                                />
                            </div>
                            <div className='box-2'>Error
                                <h4>20</h4>
                            </div>
                        </div>
                        <hr /> <p>In the last hour</p>
                    </div>
                </div>
                <div className="col-md-3 main-right" >
                    <div className='s1-container'>
                        <div className='bottom'>
                            <div className='box'>
                                <img
                                    className="logo_view"
                                    src={followers}
                                    alt="NachDark"
                                />
                            </div>
                            <div className='box-2'>Followers
                                <h4>+28k</h4>
                            </div>
                        </div>
                        <hr /> <p>Update now</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid container-2">
                <div className="row cont-box">
                    <div className="col-md-6 main-left">
                        <div className='upr-container'>
                            <h4>Global Sales by Top Locations</h4>
                            <h6>All products that were shipped</h6>
                            <hr />
                            <div className='flag'>
                                <img
                                    className="logo_view"
                                    src={united}
                                    alt="NachDark"
                                />
                                <p>USA</p>
                                <p>2920</p>
                                <p>53%</p>
                            </div>
                            <hr />
                            <div className='flag'>
                                <img
                                    className="logo_view"
                                    src={flag}
                                    alt="NachDark"
                                />
                                <p>German</p>
                                <p>7645</p>
                                <p>73%</p>
                            </div>

                            <hr />
                            <div className='flag'>
                                <img
                                    className="logo_view"
                                    src={india}
                                    alt="NachDark"
                                />
                                <p>India</p>
                                <p>8635</p>
                                <p>85%</p>
                            </div>

                            <hr />
                            <div className='flag'>
                                <img
                                    className="logo_view"
                                    src={kingdom}
                                    alt="NachDark"
                                />
                                <p>	United Kingdom</p>
                                <p>8691</p>
                                <p>56%</p>
                            </div>

                            <hr />
                            <div className='flag'>
                                <img
                                    className="logo_view"
                                    src={brasil}
                                    alt="NachDark"
                                />
                                <p>Brasil</p>
                                <p>3491</p>
                                <p>46%</p>
                            </div>


                        </div>

                    </div>
                    <div className="col-md-6 main-right1">
                        <div className='lwr-container'>
                            <img className='lwr' src={require("../assets/images/mainright1.png")} alt="..." />
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid container-3">
                <div className="row cont-box ">
                    <div className=" col-md-4">
                        <div className=' main-left1'>
                            <div className='upr-container'>
                                <div className='Email'>
                                    <h4> Email Statistics</h4>
                                    <p>Last Campaign Performance</p>
                                </div>
                                <div className='lwr1-container'>
                                    <img className='lwr' width="450" src={require("../assets/images/email.png")} alt="..." />
                                </div>


                                <div className='circle'>

                                    <div className='legend'>
                                    </div>
                                    <p className='p_text'>Open</p>

                                    <div className='legend1'>
                                    </div>
                                    <p className='p_text'>Bounce</p>

                                    <div className='legend2'>
                                    </div>
                                    <p className='p_text'>Unsubscribe</p>

                                </div>
                            </div>
                            <hr /> <p>Campaign sent 2 days ago</p>
                        </div>
                    </div>
                    <div className=" col-md-8 main-right2">
                        <div className='lwr-container'>
                            <div className='Email'>
                                <h4> Users Behavior</h4>
                                <p>24 Hours performance</p>
                            </div>
                            <div className='lwr1-container'>
                                <img className='lwr' src={nd} alt="..." />
                            </div>

                            <div className='circle'>

                                <div className='legend'>
                                </div>
                                <p className='p_text'>Open</p>

                                <div className='legend1'>
                                </div>
                                <p className='p_text'>Click</p>

                                <div className='legend2'>
                                </div>
                                <p className='p_text'>Click second  time</p>

                            </div>
                        </div>
                        <hr /> <p>Updated 3 minutes ago</p>
                    </div>

                </div>
            </div>

            <div className="container-fluid container-3">
                <div className="row cont-box">
                    <div className="col-md-6 ">
                        <div className=' main-left2'>
                            <div className='upr-container'>
                                <div className='Email'>
                                    <h4>2017 Sales</h4>
                                    <p>All products including Taxes</p>
                                </div>
                                <div className='lwr1-container'>
                                    <img className='lwr' src={rd} width="700" alt="..." />
                                </div>

                                <div className='circle'>
                                    <div className='legend'>
                                    </div>
                                    <p className='p_text'>Tesla Model S</p>

                                    <div className='legend1'>
                                    </div>
                                    <p className='p_text'>BMW 5 Series</p>
                                </div>
                                <hr /> <p>Data information certified</p>
                            </div>
                        </div>
                    </div>




                    <div className="col-md-6 ">
                        <div className='main-right2'>
                            <div className='lwr1-container'>
                                <div className='Email'>
                                    <h4>Tasks</h4>
                                    <p>Backend development</p>
                                </div>
                                <hr />
                                <div className='checkbox'>
                                    <input type="checkbox" />
                                    <label className='check' for="click">Sign contract for "What are conference organizers afraid of?"</label>
                                    <div className='cked'>
                                        < img className='check1' src={check} alt='...' onClick={() => { alert('remove') }} />
                                        < img className='check2' src={edit} alt='...' onClick={() => { alert('edit') }} />

                                    </div>
                                </div>
                                <hr />
                                <div className='checkbox'>
                                    <input type="checkbox" />
                                    <label className='check' for="click">Lines From Great Russian Literature? Or E-mails From My Boss?</label>
                                    <div className='cked'>
                                        < img className='check1' src={check} alt='...' onClick={() => { alert('remove') }} />
                                        < img className='check2' src={edit} alt='...' onClick={() => { alert('edit') }} />
                                    </div>
                                </div>
                                <hr />


                                <div className='checkbox'>
                                    <input type="checkbox" />
                                    <label className='check' for="click">Flooded: One year later, assessing what was lost .........</label>
                                    <div className='cked'>
                                        < img className='check1' src={check} alt='...' onClick={() => { alert('remove') }} />
                                        < img className='check2' src={edit} alt='...' onClick={() => { alert('edit') }} />
                                    </div>
                                </div>
                                <hr />

                                <div className='checkbox'>
                                    <input type="checkbox" />
                                    <label className='check' for="click">Create 4 Invisible User Experiences you Never Knew About.....</label>
                                    <div className='cked'>
                                        < img className='check1' src={check} alt='...' onClick={() => { alert('remove') }} />
                                        < img className='check2' src={edit} alt='...' onClick={() => { alert('edit') }} />
                                    </div>
                                </div>
                                <hr />

                                <div className='checkbox'>
                                    <input type="checkbox" />
                                    <label className='check' for="click">Read "Following makes Medium better................."</label>
                                    <div className='cked'>
                                        < img className='check1' src={check} alt='...' onClick={() => { alert('remove') }} />
                                        < img className='check2' src={edit} alt='...' onClick={() => { alert('edit') }} />
                                    </div>
                                </div>
                                <hr />

                                <p>Updated 3 minutes ago</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="row cont-box">
                <div className='col-md-12 mk'>
                    <footer>
                        <div className='container fluid'>
                            <nav>
                                <ul className='footer-menu'>
                                    <li>Home</li>
                                    <li>Company</li>
                                    <li>Portfolio</li>
                                    <li>Blog</li>
                                </ul>
                            </nav>
                        </div>
                    </footer>
                </div>
            </div>




        </div>
    )
}

export default Dashboard;