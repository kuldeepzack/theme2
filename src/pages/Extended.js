import React from 'react'
import checkk from "../assets/images/crossed.png"
import edit from "../assets/images/edit.png"
import "./Extended.css"
import user from "../assets/images/user.png"
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
function Extended() {
    return (


        <div className="rightside_container">
            <div className="container-fluid d-flex container-4">



                <div className='col-md-6 table  striptable1'>
                    <h4>Table with Links</h4>
                    <table className="table-hover table " style={{ borderBottom: "0rem" }}>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">SALARY</th>
                                <th scope="col">COUNTRY</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className='table-info'>
                                <th scope="row">1</th>
                                <td>Dakota Rice</td>
                                <td>$36,000</td>
                                <td>USA</td>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...' onClick={() => { alert('view profile') }} />

                                </td>


                            </tr>
                            <tr className='light'>
                                <th scope="row">4</th>
                                <td>Philip Chaney</td>
                                <td>	$36,738</td>
                                <td>CANADA</td>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...' onClick={() => { alert('view profile') }} />

                                </td>


                            </tr>
                            <tr className='table-danger'>
                                <th scope="row">2</th>
                                <td>Minerva Hooper</td>
                                <td>	$36,738</td>
                                <td>INDIA</td>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...' onClick={() => { alert('view profile') }} />

                                </td>

                            </tr>
                            <tr className='light'>
                                <th scope="row">4</th>
                                <td>Philip Chaney</td>
                                <td>	$36,738</td>
                                <td>CANADA</td>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...' onClick={() => { alert('view profile') }} />

                                </td>

                            </tr>
                            <tr className='table-warning'>
                                <th scope="row">3</th>
                                <td>	Sage Rodriguez</td>
                                <td>	$36,738</td>
                                <td>PAK</td>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...' onClick={() => { alert('view profile') }} />

                                </td>


                            </tr>

                        </tbody>
                    </table>

                </div>



                <div className="col-md-6 ml-2 striptable2">

                    <h4>Table with Switches</h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">SALARY</th>
                                <th scope="col">COUNTRY</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className='table'>
                                <th scope="row">1</th>
                                <td>Dakota Rice</td>
                                <td>$36,000</td>
                                <td>USA</td>
                                <td className='action2'>   <BootstrapSwitchButton checked={true} onstyle="info" border-radius="40" />

                                </td>

                            </tr>
                            <tr className='light'>
                                <th scope="row">4</th>
                                <td>Philip Chaney</td>
                                <td>	$36,738</td>
                                <td>CANADA</td>
                                <td className='action2'>   <BootstrapSwitchButton checked={true} onstyle="info" border-radius="40" />
                                </td>

                            </tr>
                            <tr className='table'>
                                <th scope="row">2</th>
                                <td>Minerva Hooper</td>
                                <td>	$36,738</td>
                                <td>INDIA</td>
                                <td className='action2'>   <BootstrapSwitchButton checked={true} onstyle="info" border-radius="40" />
                                </td>

                            </tr>
                            <tr className='light'>
                                <th scope="row">4</th>
                                <td>Philip Chaney</td>
                                <td>	$36,738</td>
                                <td>CANADA</td>
                                <td className='action2'>   <BootstrapSwitchButton checked={true} onstyle="info" border-radius="40" />

                                </td>

                            </tr>
                            <tr className='table-'>
                                <th scope="row">3</th>
                                <td>	Sage Rodriguez</td>
                                <td>	$36,738</td>
                                <td>PAK</td>
                                <td className='action2'>

                                    <BootstrapSwitchButton checked={true} onstyle="info" border-radius="40" />
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>



        </div>

    )

}

export default Extended