import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Alert from './components/Alert';
// import DashBoard from "./components/DashBoard";
import UserState from "./context/users/userState";
import Products from './components/pages/Products';
import Enrollform from './components/enrollmentform';
import Achievement from './components/Achievement.js';
import UploadCourse from './components/upload';
import ApplyLoan from './components/ApplyLoan';
import Verification from './components/Verification';
import ApplyTrainer from "./components/ApplyTrainer";
function App() {
  //alert 


  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000)

  }

  //alert

  return (
    <div className="contanier">
      <UserState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/" >
              <Home alert={showAlert} />
            </Route>
            <Route exact path="/login" >
              <Login alert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Signup alert={showAlert} />
            </Route>
            {/* <Route exact path="/dashboard">
              <DashBoard />
            </Route> */}
            <Route exact path="/courseupload">
              <UploadCourse />
            </Route>
            <Route exact path="/applytrainer">
              <ApplyTrainer />
            </Route>
            <Route exact path="/verification">
              <Verification />
            </Route>
            <Route exact path="/products" >
              <Products />
            </Route>
            <Route exact path="/achievement" >
              <Achievement />
            </Route>
            <Route exact path="/enroll" >
              <Enrollform />
            </Route>
            <Route exact path="/applyloans" >
              <ApplyLoan />
            </Route>
          </Switch>
        </Router>
      </UserState>
    </div>
  );
}
export default App;