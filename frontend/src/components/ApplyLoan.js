import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplyLoan.css'
// import Carousel from 'react-bootstrap/Carousel';


function ApplyLoan() {

    return (
        <div className="Demo container ">

            <Form>
                <h1>Document Verification</h1>
                <div className="container d-flex flex-column justify-begin" >
                    <p>List of mandatory documents to be collected from candidates keenly interested to
                        apply for Loan -</p>

                    <li> Aadhar card</li>
                    <li> Pan Card </li>
                    <li> Photo</li>
                    <li> Bank pAssbook copy / Bank Account Number, Bank Name, Branch Name, District </li>
                    <li> Any ongoing Loan - Yes / NO</li>
                    <li> Amount of Loan required -s </li>
                    <li> Social Category (SC/OBC/ST/Minority) </li>
                    <li> Gender</li>
                </div>


                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label className='d-flex align-start'> <b>Upload All your Documents</b> </Form.Label><br></br>
                    <Form.Control type="file" multiple />
                </Form.Group>


                <Button variant="warning">Send For Verification</Button>{' '}

            </Form>
        </div>
    );
}

export default ApplyLoan;