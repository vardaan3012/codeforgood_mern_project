import React, { useState, useEffect } from 'react';
import '../../App.css';
import Coursecard from '../cardnew';
import axios from 'axios'
import './product.css';
export default function Products() {

  const [coursedata, setdata] = useState([]);

  // console.log(data);
  useEffect(() => {
    const data = async () => {
      fetch('http://localhost:8000/api/course/fetchAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          setdata(data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    data();
  }, [])


  return <>

    <h1 className='heading11'>Our great courses</h1>
    <div class="row1">
      <div class="column1">
        <div class="card1">
          {
            <div >
              {coursedata.map((product, int) => (
                <Coursecard description={product.description} name={product.name} key={int} location={product.location} timing={product.timing} _id={product._id}></Coursecard>
              ))}
            </div>

          }
        </div>
      </div>

      {/* <div class="column1">
    <div class="card1">
     <Coursecard></Coursecard>
    </div>
  </div>

  <div class="column1">
    <div class="card1">
     <Coursecard></Coursecard>
    </div>
  </div>

  <div class="column1">
    <div class="card1">
     <Coursecard></Coursecard>
    </div>
  </div>

  <div class="column1">
    <div class="card1">
     <Coursecard></Coursecard>
    </div>
  </div>

  <div class="column1">
    <div class="card1">
     <Coursecard></Coursecard>
    </div>
  </div>

  <div class="column1">
    <div class="card1">
     <Coursecard></Coursecard>
    </div>
  </div> */}
    </div>

  </>;
}
