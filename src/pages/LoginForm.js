import React from "react";
import "./LoginForm.css";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const LoginForm = () => {


    return (

        <div className="form_container">
            <div className="form">

                <form name="personForm" className="element">

                    <h2 className="loginn">Login Form</h2>
                    <div className="form-group label_input_container">
                        <label for="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            required
                        />
                    </div>
                    <div className=" form-group label_input_container">
                        <label for="adress" >Adress</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            className="form-control"
                            placeholder="Enter address"
                            required
                        />
                    </div>
                    <div className="form-group label_input_container">
                        <label for="contact" >Contact No</label>
                        <input
                         className="form-control"
                            id="mobile"
                            name="mobile"
                            type="number"
                            pattern="/^(91){1}[0-9]{8}$/"
                            placeholder="Enter contact Number"

                            required
                        />
                    </div>

                    <div className="form-group  label_input_container">
                        <label for="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"

                            placeholder="Enter valid email"
                            required
                        />
                    </div>

                    <div className=" form-group checkbox_label_container">
                        <input
                            type="checkbox"

                            name="terms"
                            id="terms"
                            required
                        />

                        <p className="p_test">I Agree to the terms.</p>
                    </div>
                    <button className="sub-form " type="submit">Submit Form</button>

                </form>
                <MDBCol md='10' lg='8' className='order-1 order-lg-2 d-flex align-items-center'>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid className="firstimg" />
                </MDBCol>


            </div>

        </div>


    );
};

export default LoginForm;
