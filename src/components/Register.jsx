import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");


  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setconfirmPasswordMessage] = useState("");

  const [error, setError] = useState(false);
  
  let navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    setNameMessage("");
    setEmailMessage("");
    setPasswordMessage("");
    setconfirmPasswordMessage("");
    let validate = true;

    if (name.length ===0) {
      setError(true);
    }

    if (name.trim() ==="") {
      setNameMessage("Please Enter Your Name");
      validate = false;
    }

    if (email.trim() ==="") {
      setEmailMessage("Please Enter Valid Email");
      validate = false;
    }
    if (password ==="") {
      setPasswordMessage("Please Enter Valid Password");
      validate = false;
    }
    
    if (confirmPassword !== password) {
      setconfirmPasswordMessage("Password Doesn't Match");
      validate = false;
    }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailMessage("Please Enter valid Email");
      validate = false;
    }

    if (validate) {
      let users = new Array();
      if (localStorage.getItem("users") != null)
        users = JSON.parse(localStorage.getItem("users"));

      users.forEach(user => {
        if (user.email === email) {
          setEmailMessage("Email already Exist!!");
          validate = false;
        }
      
      });

      if (validate) {
        users.push({
          name: name,
          email: email,
          password: password
        });

        localStorage.setItem("users", JSON.stringify(users));
        navigate("/login");
        alert("Registartation Successful!");
      }
    }
};


return (
  <div className='App'>

  <div className='container-fluid'>
    <div className='row'>
      <div className='col-lg-3'></div>
      <div className='col-lg-6'>
      <section className="vh-100 bg-image">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="card">
            <div className="card-body p-5">
              <h2 className=" text-center mb-5">Register Form</h2>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1cg">Your Name
                </label>

                <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control form-control-lg" />
                <span className='text-danger'>{nameMessage}</span>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control form-control-lg" />
                <span className='text-danger'>{emailMessage}</span>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control form-control-lg" />
                <span className='text-danger'>{passwordMessage}</span>

              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4cdg">Confirm your Password</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} className="form-control form-control-lg" />
                <span className='text-danger'>{confirmPasswordMessage}</span>
              </div>

              {/* <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div> */}

              <div className="d-flex justify-content-center">
                <button type="button"
                  className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={(e) => { submit(e) }}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      </div>
      <div className='col-lg-3'></div>
    </div>
  </div>
    
  </div>
)
}

export default Register;
