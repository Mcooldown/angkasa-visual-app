import React from 'react'
import { Fragment, useState } from 'react';
import { Gap, Input, Button } from '../../atoms';
import "./Login.scss";
import { RegisterSuccess } from '../../../assets';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';

const Login = ({ changeSection, setIsAuth, isAuth, setAuthUser }) => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const history = useHistory();
     const [isLoading, setIsLoading] = useState(false);

     // Login form
     const [emailLogin, setEmailLogin] = useState('');
     const [errEmailLogin, setErrEmailLogin] = useState(null);
     const [passwordLogin, setPasswordLogin] = useState('');
     const [errPasswordLogin, setErrPasswordLogin] = useState(null);

     const loginToAPI = async () => {
          const apiFetch = await fetch(urlAPI + `login?email=${emailLogin}&password=${passwordLogin}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.success) {
               localStorage.setItem('token', res.token);
               return true;
          } else {
               Swal.fire({ 'icon': 'error', 'title': 'Login Error', 'showConfirmButton': true, 'confirmButtonColor': "#0F70B7" });
               return false;
          }
     }

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
          if (pass) {
               setIsLoading(true);
               loginToAPI().then((res) => {
                    if (res) {
                         setIsAuth(true);
                         setAuthUser();
                         history.push('/our-services');
                    }
                    setIsLoading(false);
               })
          } else {
               setIsLoading(false);
          }
     }

     const clearForm = () => {
          setEmailLogin(''); setErrEmailLogin(null);
          setPasswordLogin(''); setErrPasswordLogin(null);
     }

     const handleCloseModal = () => {
          clearForm();
          setIsLoading(false);
     }

     return (
          <Fragment>
               <div className="d-flex justify-content-end">
                    <button type="button" className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"
                         onClick={() => clearForm()}></button>
               </div>
               <Gap height={40} />
               {
                    isAuth ?
                         <Fragment>
                              <h1 className="heading2 textBlue1 text-center">
                                   LOGIN SUCCESS
                              </h1>
                              <Gap height={80} />
                              <div className="row justify-content-center">
                                   <div className="col-lg-6">
                                        <h1 class="subHeading3 textBlue1 text-center">
                                             Now you can explore Angkasa Visual Works"
                                        </h1>
                                        <img src={RegisterSuccess} alt="registerSuccess" className="w-100" />
                                   </div>
                              </div>
                              <Gap height={60} />
                              <Button isFull type={2} onClick={handleCloseModal} data-bs-dismiss="modal" aria-label="Close">
                                   <h5 className="text-white subHeading3">OKAY, I GOT IT</h5>
                              </Button>
                         </Fragment>
                         :
                         <Fragment>
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
                              <Button isFull type={2} isLoading={isLoading} onClick={handleLogin}>
                                   <h5 className="text-white subHeading3">SIGN IN</h5>
                              </Button>
                              <Gap height={20} />
                              <p className="text-center paragraph">Do not have an account? <u className="textBlue1 fw-bold" onClick={() => { clearForm(); changeSection(); }}>Sign Up</u></p>
                         </Fragment>
               }
          </Fragment>
     )
}

export default Login
