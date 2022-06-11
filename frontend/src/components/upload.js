import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplyLoan.css';

function Upload() {

	const initialState = {
		name: '',
		description: '',
		location: '',
		timing: ''
	}

	const [formData, setFormData] = useState(initialState);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onFileUpload = (e) => {
		e.preventDefault();

		// Send the formDetails object to the server
		fetch('http://localhost:8000/api/courseCreate', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json',
				'auth-token': localStorage.getItem('token')
			}
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
			}
			)
			.catch(err => {
				console.log(err);
			}
			);
		// axios.post("api/uploadfile", formData);
	};

	return (
		<div className="Demo container ">

			<Form>
				<h1>Create a Course</h1>
				<Form.Group className="mb-3" controlId="formGroupName" >
					<Form.Label className='d-flex align-start'>Course Name</Form.Label><br></br>
					<Form.Control onChange={handleChange} name="name" type="string" placeholder="Enter name" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label className='d-flex align-start'>Course Description</Form.Label><br></br>
					<Form.Control onChange={handleChange} name="description" type="string" placeholder="Enter email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupAddress">
					<Form.Label className='d-flex align-start'>Location</Form.Label><br></br>
					<Form.Control onChange={handleChange} name="location" type="address" placeholder="Enter address" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label className='d-flex align-start'>Timing</Form.Label><br></br>
					<Form.Control type="string" onChange={handleChange} name="timing" placeholder="Enter Timing" />
				</Form.Group>

				<Button onClick={onFileUpload} variant="warning">Create a Course</Button>{' '}

			</Form>
		</div>
	)
}

export default Upload