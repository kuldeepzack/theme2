import React from 'react'
import "./Regular.css"

function Regular() {
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>	Dakota Rice</td>
                                <td>	$36,738</td>
                                <td>USA</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Minerva Hooper</td>
                                <td>	$36,738</td>
                                <td>INDIA</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>	Sage Rodriguez</td>
                                <td>	$36,738</td>
                                <td>PAK</td>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Philip Chaney</td>
                                <td>	$36,738</td>
                                <td>CANADA</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='col-md-12 table  striptable1'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">SALARY</th>
                                <th scope="col">COUNTRY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>	Dakota Rice</td>
                                <td>	$36,738</td>
                                <td>USA</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Minerva Hooper</td>
                                <td>	$36,738</td>
                                <td>INDIA</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>	Sage Rodriguez</td>
                                <td>	$36,738</td>
                                <td>PAK</td>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Philip Chaney</td>
                                <td>	$36,738</td>
                                <td>CANADA</td>

                            </tr>
                        </tbody>
                    </table>

                </div>


                <div className='col-md-12 table  striptable1'>
                    <table className="table-hover table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">SALARY</th>
                                <th scope="col">COUNTRY</th>
                            </tr>
                        </thead>
                        <tbody>
                       
                            <tr className='table-info'>
                                <th scope="row">1</th>
                                <td>Dakota Rice</td>
                                <td>$36,000</td>
                                <td>USA</td>

                            </tr>
                            <tr className='light'>
                                <th scope="row">4</th>
                                <td>Philip Chaney</td>
                                <td>	$36,738</td>
                                <td>CANADA</td>

                            </tr>
                            <tr className='table-danger'>
                                <th scope="row">2</th>
                                <td>Minerva Hooper</td>
                                <td>	$36,738</td>
                                <td>INDIA</td>

                            </tr>
                            <tr className='light'>
                                <th scope="row">4</th>
                                <td>Philip Chaney</td>
                                <td>	$36,738</td>
                                <td>CANADA</td>

                            </tr>
                            <tr className='table-warning'>
                                <th scope="row">3</th>
                                <td>	Sage Rodriguez</td>
                                <td>	$36,738</td>
                                <td>PAK</td>

                            </tr>
                           
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default Regular