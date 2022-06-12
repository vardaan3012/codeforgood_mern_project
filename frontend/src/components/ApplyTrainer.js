import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplyLoan.css'
import axios from 'axios'

const ApplyTrainer = () => {

  const [formDetails, setformDetails] = useState({
    gender: '',
    sector: '',
    mobileNumber: '',
    images: []
  });

  const handlechange = (e) => {
    e.preventDefault();
    setformDetails(
      {
        ...formDetails,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleFileChange = (e) => {
    const files = e.target.files;
    setformDetails({ images: files });
  }

  const uploadDocuments = async (e) => {
    e.preventDefault();
    console.log("uploading documents");

    const formdata = new FormData();

    formdata.append('mobileNumber', formDetails.mobileNumber);
    formdata.append('sector', formDetails.sector);
    formdata.append('gender', formDetails.gender);

    for (let i = 0; i < formDetails.images.length; i++) {
      formdata.append('image', formDetails.images[i]);
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'auth-token': localStorage.getItem('token'),
      },
    };

    await axios.post('http://localhost:8000/api/trainer', formdata, config)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Application Sent Successfully");
      }
      ).catch(err => {
        console.log(err);
        alert("Error Sending Application");
      })
  }


  return (
    <div className=" Demo container ">
      <Form>
        <h1>Apply as a trainer</h1>
        <Form.Group className="mb-3" controlId="formGroupName" >
          <Form.Label className='d-flex align-start'>Mobile Number</Form.Label><br></br>
          <Form.Control onChange={handlechange} name="mobileNumber" type="string" placeholder="Enter Mobile Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className='d-flex align-start'>Sector and Course Applied For: </Form.Label><br></br>
          <Form.Control onChange={handlechange} name="sector" type="string" placeholder="Enter Category/Sector" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAddress">
          <Form.Label className='d-flex align-start'>Gender</Form.Label><br></br>
          <Form.Control onChange={handlechange} name="gender" type="address" placeholder="Enter Gender" />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label className='d-flex align-start'> <b>Upload Following Documents:
            Aadhar Card,
            CV,
            Marksheet,
            TOT Certificate
          </b> </Form.Label><br></br>
          <Form.Control onChange={handleFileChange} type="file" multiple />
        </Form.Group>

        <Button onClick={uploadDocuments} variant="warning">Apply for Good</Button>{' '}

      </Form>
    </div>
  )
}

export default ApplyTrainer