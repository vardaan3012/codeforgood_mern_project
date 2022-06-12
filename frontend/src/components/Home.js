import React, { useEffect } from "react";
import { useHistory } from 'react-router';
import './Home.css';

export default function Home(props) {
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/login');
    }

    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <div className='hero-container'>
        <h1>SKILLS ROOT</h1>
        <p>Skills Root is a leading vocational education company that provides managed training services including custom content development and curriculum design, learning administration, learning delivery, strategic sourcing, and learning technology.</p>
      </div>
      <div className='footerr'>
        <p>Skillsroot @2022</p>
      </div>
    </>

  );
}