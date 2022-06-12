import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplyLoan.css'

const ApplyTrainer = () => {
  return (
    <div className=" Demo container ">
      <Form>
        <h1>Apply as a trainer</h1>
        <Form.Group className="mb-3" controlId="formGroupName" >
          <Form.Label className='d-flex align-start'>Mobile Number</Form.Label><br></br>
          <Form.Control name="name" type="string" placeholder="Enter Mobile Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className='d-flex align-start'>Sector and Course Applied For: </Form.Label><br></br>
          <Form.Control name="description" type="string" placeholder="Enter Category/Sector" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAddress">
          <Form.Label className='d-flex align-start'>Gender</Form.Label><br></br>
          <Form.Control name="location" type="address" placeholder="Enter Gender" />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label className='d-flex align-start'> <b>Upload Following Documents:
            Aadhar Card,
            CV,
            Marksheet,
            TOT Certificate
          </b> </Form.Label><br></br>
          <Form.Control type="file" multiple />
        </Form.Group>

        <Button variant="warning">Apply for Good</Button>{' '}

      </Form>
    </div>
  )
}

export default ApplyTrainer