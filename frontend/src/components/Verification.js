import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplyLoan.css'

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
]

function Disloan() {
  return (
    <div className="">
      <h1 style={{ "marginTop": "20px" }}>Verification Requests </h1>
      <div className="Disloan container" style={{ "marginTop": "100px" }}>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Adhaar</th>
            <th>Pan Card</th>
            <th>Approve</th>
            <th>Reject</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>Adhaar</td>
                <td>Address</td>
                <td><Button variant="warning">Approve</Button></td>
                <td><Button variant="warning">Reject</Button></td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>

  );
}

export default Disloan;