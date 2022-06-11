import axios from 'axios';

import React,{Component} from 'react';
import './upload.css'
import {Form} from 'react-bootstrap';

class Upload extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>Course Details:</h2>
			
<p><b>Course Name :</b> {this.state.selectedFile.name}</p>

			
<p><b>Course Format :</b> {this.state.selectedFile.type}</p>

			
<p>
			<b>Last Modified :</b>{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>
		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>
			Course Upload
			</h1>
			<Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Course Name</b> </Form.Label>
                <Form.Control type="text" placeholder="Enter course name" />
            </Form.Group>
			<br/>
			<br/>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><b>Course Description</b> </Form.Label>
                <textarea type="text" placeholder="Course Description"/>
            </Form.Group>
			<br/>
			<br/>
			<Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Location</b> </Form.Label>
                <Form.Control type="text" placeholder="Enter location" />
            </Form.Group>
			<br/>
			<br/>
			<Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Timing</b> </Form.Label>
                <Form.Control type="text" placeholder="Enter course timings" />
            </Form.Group>
			<br/>
			<br/>
			<Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Course Link</b> </Form.Label>
                <Form.Control type="text" placeholder="Enter course link" />
            </Form.Group>
			</Form>
			<br/>
			<br/>
			<div>
				<input type="file" onChange={this.onFileChange} />
				<br/>
				<br/>
				<button onClick={this.onFileUpload}>
				Upload
				</button>
			</div>
		{this.fileData()}
		<img src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202009/e-learning_digital_education-1200x1080.jpg?XjMNHsb4gLoU_cC7110HB7jVghJQROOj" alt="course" width="500px"></img>
		</div>
	);
	}
}

export default Upload;