import React from 'react'
import { Fragment, useState } from 'react';
import { Gap, Input, Button } from '../../atoms';
import "./Login.scss";

const Login = ({ changeSection }) => {

     // Login form
     const [emailLogin, setEmailLogin] = useState('');
     const [errEmailLogin, setErrEmailLogin] = useState(null);
     const [passwordLogin, setPasswordLogin] = useState('');
     const [errPasswordLogin, setErrPasswordLogin] = useState(null);

     // Submit Login
     const handleLogin = () => {

          let pass = true;

          if (!emailLogin) {
               setErrEmailLogin('Email must be filled');
               pass = false;
          }
          if (!passwordLogin) {
               setErrPasswordLogin('Password must be filled');
               pass = false;
          }

          pass && alert("Success");
     }

     const clearForm = () => {
          setEmailLogin(''); setErrEmailLogin(null);
          setPasswordLogin(''); setErrPasswordLogin(null);
     }

     return (
          <Fragment>
               <div className="d-flex justify-content-end">
                    <button type="button" className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"
                         onClick={() => clearForm()}></button>
               </div>
               <Gap height={40} />
               <h1 className="heading2 textBlue1 text-center">
                    SIGN IN TO YOUR ACCOUNT
               </h1>
               <Gap height={80} />
               <div className="card cCardAuth">
                    <div className="card-body">
                         <Input type="text" value={emailLogin} id="email" name="email" label="E-mail" placeholder="angkasavisualwork@gmail.com"
                              onChange={(e) => { setEmailLogin(e.target.value); setErrEmailLogin(null) }} error={errEmailLogin} required />
                         <Gap height={30} />
                         <Input type="password" value={passwordLogin} id="password" name="password" label="Password" placeholder="******"
                              onChange={(e) => { setPasswordLogin(e.target.value); setErrPasswordLogin(null) }} error={errPasswordLogin} required />
                    </div>
               </div>
               <Gap height={40} />
               <p className="text-end textBlue1 paragraph fw-bold"><u>Forgot password?</u></p>
               <Gap height={20} />
               <Button isFull type={2} onClick={handleLogin}>
                    <h5 className="text-white subHeading3">SIGN IN</h5>
               </Button>
               <Gap height={20} />
               <p className="text-center paragraph">Do not have an account? <u className="textBlue1 fw-bold" onClick={() => { clearForm(); changeSection(); }}>Sign Up</u></p>
          </Fragment>
     )
}

export default Login
