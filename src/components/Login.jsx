import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email,setEmail] = useState(); 
  const [password,setPassword] = useState(); 
  let navigate = useNavigate();

  
    function submit(e){
      e.preventDefault();
      let login;
      let users = new Array();
      if (localStorage.getItem("users") != null){
         users = JSON.parse(localStorage.getItem("users"));
        
        users.forEach(user => {
          if (user.email === email && user.password === password ) {
            localStorage.setItem("email", email );
            localStorage.setItem("password", password );
            
            login = true;
            navigate("/users");
          }
        });
        
        if (login) {
          alert("login successful");
       
        }
        else{
          alert("invalid credentials");
        }
        

    }
  }
  return (
    <div className="card-body p-5">
    <h2 className=" text-center mb-5">Login Form</h2>

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-4'></div>
        <div className='col-lg-4'>
        <div className="form-outline mb-4 mt-5">
    <label className="form-label" for="form2Example1">Email address</label>
    <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  className="form-control" />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example2">Password</label>
    <input type="password" id="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>


  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    
      <div className="form-check">
        <label className="form-check-label" for="form2Example31"> Remember me </label>
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
      </div>
    </div>

    <div className="col">
    
      <a href="#!">Forgot password?</a>
    </div>
  </div>


  <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e)=>{submit(e)}}>Sign in</button>
        </div>
        <div className='col-lg-4'></div>
      </div>
    </div>
  


  
  </div>

 
  )
}

export default Login;

