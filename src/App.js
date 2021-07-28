import React, {useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/partials/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserData from './components/UserData';
function App() {
  const [state,setState]=useState("From Parent");

  const ChangeState=()=>{

    setState("Modified Parent Data")
  }
  
 
    return (
   
     <div>
        
      <Header/>
    <Router>

<Switch>
          <Route exact path="/home">
            <Home />
          </Route>


          <Route exact path="/userdata">
           <UserData/>
          </Route>

          {/*  ADd a route for /adduser and creat a compoment ---which has form for entering the data */}
        
        
        </Switch>

    </Router>

    </div>



    
    );
  
}

export default App;
