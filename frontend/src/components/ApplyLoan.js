import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplyLoan.css'
import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';


function ApplyLoan() {
    const [formDetails, setformDetails] = useState({
        images: []
    });

    const handleFileChange = (e) => {
        const files = e.target.files;
        setformDetails({ images: files });
    }

    const uploadDocuments = async (e) => {
        e.preventDefault();
        console.log("uploading documents");

        const formdata = new FormData();

        for (let i = 0; i < formDetails.images.length; i++) {
            formdata.append('image', formDetails.images[i]);
        }

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': localStorage.getItem('token'),
            },

        };

        await axios.post('http://localhost:8000/api/documents', formdata, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Documents uploaded successfully");
            }
            ).catch(err => {
                console.log(err);
                alert("Error uploading documents");
            })
    }


    return (
        <div className="Demo container ">


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

            <Form>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label className='d-flex align-start'> <b>Upload All your Documents</b> </Form.Label><br></br>
                    <Form.Control onChange={handleFileChange} type="file" multiple />
                </Form.Group>


                <Button onClick={uploadDocuments} variant="warning">Send For Verification</Button>{' '}

            </Form>
        </div>
    );
}

export default ApplyLoan;