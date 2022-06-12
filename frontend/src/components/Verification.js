import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplyLoan.css'


function Disloan() {

  const [data, setdata] = useState(null);
  const [verify, setverify] = useState("Not Verified");

  const fetchdata = () => {
    fetch('http://localhost:8000/api/toverify', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setdata(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchdata();
  }, [])

  const handleApprove = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchdata();
        // alert("Documents Verified!");
        setverify("Verified");
      }
      )
      .catch(err => {
        console.log(err);
        // alert("Documents Verified!");
        setverify("Verified");
      }
      );

  }

  const handleReject = (e) => {
    e.preventDefault();
    setverify("Rejected");
    // alert("Request is Rejected");
  }

  return (
    <div className="">
      <h1 style={{ "marginTop": "20px" }}>Verification Requests </h1>
      <div className="Disloan container" style={{ "marginTop": "100px" }}>

        {data?.map((val, key) => {
          return (
            <div className="container" style={{
              "backgroundColor": "#f5f5f5",
            }}>
              <ul key={key}>
                <p><b>Name: </b>  {val.name}</p>
                <p><b>Email: </b> {val.email}</p>
                <p><b>Status: </b>  {verify}</p>
                <p><b>Documents Links: </b></p>
                <p>{val.documents[0]}</p>
                <p>{val?.documents[1]}</p>
                <p>{val?.documents[2]}</p>
                <div classname="d-flex">
                  <Button onClick={handleApprove} variant="success">Approve</Button>
                  <Button onClick={handleReject} variant="danger">Reject</Button>
                </div>

              </ul>
            </div>
          )
        })}

      </div>
    </div>

  );
}

export default Disloan;