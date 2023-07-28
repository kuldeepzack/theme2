import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';


function SuccessModal(props) {
    const [successModal, setSuccessModal] = useState("")
    return (
        <Modal
            {...props}
            centered
            className="modal2"
        >   {setSuccessModal &&
            <Modal.Body>
                <div className="moodal">

                    <h3>{props.status}</h3>
                    <p>{props.message}</p>
                    <button className="btn btn-danger" onClick={() => props.hide()}>Ok</button>
                    {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button  type="button" class="btn btn-primary">Save changes</button> */}

                </div>
            </Modal.Body>
            }

        </Modal>
    );
}
export default SuccessModal;
