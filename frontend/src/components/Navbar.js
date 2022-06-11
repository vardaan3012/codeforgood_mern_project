import React,{useContext} from 'react'
import { Link ,useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";
import userContext from "../context/users/userContext";


export default function Navbar() {
  const history=useHistory();
  let location = useLocation();

  const context2 = useContext(userContext);
  const { admin,logOut } = context2;
  const loggingOut=()=>{
    logOut();
    history.push('/login');
  }
    return (
     
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand"  to="/">SkillRoot</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?'active':''} `} aria-current="page" to="/">Home</Link>
        </li>
        {!admin && localStorage.getItem('token') && <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?'active':''} `} aria-current="page" to="/Quiz">temp11</Link>
        </li>}
        {!admin && localStorage.getItem('token') &&<li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?'active':''} `} aria-current="page" to="/LeaderBoard">temp2</Link>
        </li>}
        {admin && localStorage.getItem('token') &&<li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?'active':''} `} aria-current="page" to="/DashBoard">DashBoard</Link>
        </li>}
       
      </ul>
      
      {
      !localStorage.getItem('token') && <form className="d-flex">
       <Link className="btn btn-primary mx-1" role='button' to='/login'>Login</Link>
       <Link className="btn btn-primary mx-1" role='button' to='/signup'>Signup</Link>
      </form>
      
    }{
      localStorage.getItem('token') && <button className="btn btn-primary " role='button' onClick={loggingOut}>Logout</button>
    }
    </div>
  </div>
</nav>
        </div>
    )
}