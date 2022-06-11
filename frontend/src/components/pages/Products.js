import React,{useState,useEffect} from 'react';
import '../../App.css';
import Coursecard from '../cardnew';
import axios from 'axios'
import './product.css';
export default function Products() {

  const [coursedata,setdata]=useState([]);
  //  let inittialstate=[];
// const data=axios.get('https://127.0.0.1:3000/api/tours/')
 
// console.log(data);
useEffect(()=>{
const data = async ()=>{
  const d = await axios.get ('');
  // console.log(d.data.data.courses);

  setdata(d.data.data.courses);
  console.log(coursedata);
return d;
};
data();
},[]) 



   


  



  return <>

  <h1 className='heading11'>Our great courses</h1>

 <div class="row1">

 
  <div class="column1">
    <div class="card1">
     {
        <div >
        {/* hcjhcjcjcjmcmvmj */}
      {coursedata.map((product,int)=>(
        <Coursecard description={product.description} name={product.name} key={int}  ></Coursecard>
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
