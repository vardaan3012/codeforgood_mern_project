import React,{ useEffect} from "react";
import { useHistory } from 'react-router';

export default function Home(props) {
  let  history=useHistory();
  useEffect(() => {
    if(!localStorage.getItem('token'))
    {
      history.push('/login');
    }
    
    // eslint-disable-next-line
}, [])
  return (
    <div>
      this is home page
    </div>
  );
}