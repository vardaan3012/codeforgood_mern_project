import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplyLoan.css'

const ApplyTrainer = () => {
  return (
    <div className="Demo container ">

    <Form>
        <h1>Document Verification for being a trainer</h1>
        <div className="container d-flex flex-column justify-begin" >
            <p>List of mandatory details to apply as a trainer -</p>

            <li> Mobile Number </li>
            <li> Aadhar card</li>
            <li> CV </li>
            <li> Sector and Couse Applied for</li>
            <li> TOT Certificate - Yes - Pls upload </li>
            <li> Marksheet </li>
            <li> Gender</li>
        </div>


        <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label className='d-flex align-start'> <b>Upload All your Documents</b> </Form.Label><br></br>
            <Form.Control type="file" multiple />
        </Form.Group>


        <Button variant="warning">Send For Verification</Button>{' '}

    </Form>
</div>
  )
}

export default ApplyTrainer