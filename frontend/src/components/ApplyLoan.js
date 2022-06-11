import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './ApplyLoan.css'
import Carousel from 'react-bootstrap/Carousel';


function Disloan() {
  return (
    <div className="Demo">
    
        <Form>
        <h1>Loan Application Form</h1>
        <Form.Group className="mb-3" controlId="formGroupName" >
            <Form.Label>Name</Form.Label><br></br>
        <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label><br></br>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAddress">
            <Form.Label>Address</Form.Label><br></br>
            <Form.Control type="address" placeholder="Enter address" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Adhaar Card</Form.Label><br></br>
            <Form.Control type="file" multiple />
        </Form.Group><Form.Group controlId="formFileMultipledoc" className="mb-3">
            <Form.Label>Pan Card</Form.Label><br></br>
            <Form.Control type="file" multiple />
        </Form.Group>
        <Button variant="warning">Submit</Button>{' '}
        
        </Form>
    </div>
  );
}

export default Disloan;