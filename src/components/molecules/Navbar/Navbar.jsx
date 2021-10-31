import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Login, Register } from '..';
import { Logo } from '../../../assets';
import { Gap, Button, } from '../../atoms';
import './navbar.scss';
import Swal from "sweetalert2";
import { useEffect } from 'react/cjs/react.development';

const Navbar = () => {

     const [isLogin, setIsLogin] = useState(false);
     const [isAuth, setIsAuth] = useState(false);
     const [isLoading, setIsLoading] = useState(false);

     const urlAPI = process.env.REACT_APP_API_URL;

     const logout = async () => {

          const token = localStorage.getItem('token');

          if (token) {
               setIsLoading(true);
               await fetch(urlAPI + `logout?token=${token}`, {
                    method: 'GET'
               }).then(res => {
                    localStorage.clear();
                    setIsAuth(false);
                    Swal.fire({ 'icon': 'success', 'title': 'Logout Success', 'showConfirmButton': true, 'confirmButtonColor': "#0F70B7" });
                    setIsLoading(false);
               }).catch(err => {
                    console.log(err);
               });

          }
     }

     useEffect(() => {
          if (localStorage.getItem('token')) {
               setIsAuth(true);
          }
     }, []);

     return (
          <Fragment>
               <nav className="navbar navbar-expand-lg cNavbar">
                    <div className="container-fluid">
                         <Link to="/">
                              <img src={Logo} className="cImageNavbar" alt="logo" />
                         </Link>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon">☰</span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                              <div className="navbar-nav ms-auto d-flex align-items-center justify-content-center">
                                   <Link to="/about-us" className="textBlue1 text-decoration-none">About Us</Link>
                                   <Gap width={30} height={10} />
                                   <Link to="/our-services" className="textBlue1 text-decoration-none">Our Services</Link>
                                   <Gap width={30} height={10} />
                                   {
                                        isAuth ?
                                             <Button type={1} onClick={logout} isLoading={isLoading}>
                                                  <h6 className="fw-bold m-0 p-1">Logout</h6>
                                             </Button>
                                             :
                                             <Fragment>
                                                  <Button type={1} onClick={() => setIsLogin(true)} data-bs-toggle="modal" data-bs-target="#authModal">
                                                       <h6 className="fw-bold m-0 p-1">Login</h6>
                                                  </Button>
                                                  <Gap width={15} height={10} />
                                                  <Button type={2} onClick={() => setIsLogin(false)} data-bs-toggle="modal" data-bs-target="#authModal">
                                                       <h6 className="fw-bold m-0 p-1">Register</h6>
                                                  </Button>
                                             </Fragment>
                                   }
                              </div>
                         </div>
                    </div>
               </nav>
               <div className="modal fade" id="authModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                         <div className="modal-content cModalAuth">
                              <div className="modal-body">
                                   <Gap height={40} />
                                   {
                                        isLogin ?
                                             <Login changeSection={() => setIsLogin(false)} setIsAuth={(value) => setIsAuth(value)} isAuth={isAuth} />
                                             :
                                             <Register changeSection={() => setIsLogin(true)} />
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default Navbar
