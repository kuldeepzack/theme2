import React from 'react'
import "./Regular.css"
import checkk from "../assets/images/crossed.png"
import edit from "../assets/images/edit.png"
import user from "../assets/images/heart (1).png"
import SuccessModal from '../components/successmodal'
import { useState } from 'react'

function Reacttable() {
    const[show, setShow] = useState(false);
    return (
        <div className="rightside_container">
            <div className="row ">
                <div className='col-md-12 table  striptable'>
                    <h6>Striped Table with Hover</h6>
                    <p>Here is a subtitle for this table</p>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">SALARY</th>
                                <th scope="col">COUNTRY</th>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...'  onClick={() => { setShow(true) }} />

                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>	Dakota Rice</td>
                                <td>	$36,738</td>
                                <td>USA</td>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...' onClick={() => { setShow(true) }} />

                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Minerva Hooper</td>
                                <td>	$36,738</td>
                                <td>INDIA</td>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...' onClick={() => { setShow(true) }} />

                                </td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>	Sage Rodriguez</td>
                                <td>	$36,738</td>
                                <td>PAK</td>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...' onClick={() => { setShow(true) }} />

                                </td>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Philip Chaney</td>
                                <td>	$36,738</td>
                                <td>CANADA</td>
                                <td className='action2'>  < img className='Action' src={edit} alt='...' onClick={() => { alert('edit form') }} />
                                    < img className='Action1' src={checkk} alt='...' onClick={() => { alert('remove') }} />
                                    < img className='Action' src={user} alt='...' onClick={() => { setShow(true) }} />

                                </td>

                            </tr>
                        </tbody>
                    </table>
                <SuccessModal show={show} hide={()=>{setShow(!show)}}
                status={"Sucess"}
                message={"User is successfully logged in"} />
                </div>




            </div>
        </div>
    )
}

export default Reacttable;