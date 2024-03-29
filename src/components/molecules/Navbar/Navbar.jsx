import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Login, Register } from '..';
import { Logo } from '../../../assets';
import { Gap, Button, } from '../../atoms';
import './navbar.scss';
import Swal from "sweetalert2";
import { useHistory, useLocation } from 'react-router';

const Navbar = () => {

     const history = useHistory();
     const location = useLocation();
     const [isLogin, setIsLogin] = useState(false);
     const [isAuth, setIsAuth] = useState(false);
     const [authUser, setAuthUser] = useState(null);

     const urlAPI = process.env.REACT_APP_API_URL;

     const logout = async () => {

          const token = localStorage.getItem('token');

          if (token) {
               await fetch(urlAPI + `logout?token=${token}`, {
                    method: 'POST'
               }).then(() => {
                    localStorage.clear();
                    setIsAuth(false);
                    Swal.fire({ 'icon': 'success', 'title': 'Logout Success', 'showConfirmButton': true, 'confirmButtonColor': "#0F70B7" })
                         .then(() => {
                              history.push('/');
                         });
               }).catch(err => {
                    console.log(err);
               });

          }
     }

     const fetchAuthUser = async () => {
          const apiFetch = await fetch(urlAPI + `getuser?token=${localStorage.getItem('token')}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();
          if (res.user) {
               let pass = true;
               if ((location.pathname === '/admin/designers' && res.user.is_admin === 0) ||
                    (location.pathname === '/cart' && res.user.is_customer === 0) ||
                    (location.pathname === '/orders' && res.user.is_customer === 0) ||
                    (location.pathname === '/checkout' && res.user.is_customer === 0) ||
                    (location.pathname === '/designer/orders' && res.user.is_designer === 0)) {
                    pass = false;
               }

               if (!pass) {
                    history.push('/')
                    Swal.fire({ icon: 'error', title: "error", text: "Unauthorized access", confirmButtonColor: "#0F70B7" });
               }

               setAuthUser(res.user);
               if (res.user.is_designer === 1) {
                    localStorage.setItem('designerId', res.user.id);
               }
               setIsAuth(true);
          } else {
               setIsAuth(false);
               localStorage.clear();
               Swal.fire({ icon: 'error', title: "error", text: "Your session are expired. Please login again", confirmButtonColor: "#0F70B7" })
                    .then(() => {
                         history.push('/');
                    });
          }
     }

     useEffect(() => {
          if (localStorage.getItem('token')) {
               setIsAuth(true);
               fetchAuthUser();
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
                                             <li className="nav-item dropdown">
                                                  {
                                                       authUser &&
                                                       <Fragment>
                                                            <div className="textBlue1 text-decoration-none dropdown-toggle pe-lg-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                 {authUser.name}
                                                            </div>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                 {
                                                                      authUser.is_admin ?
                                                                           <Link to="/admin/designers" className="text-decoration-none text-reset"><li className="dropdown-item">Designer List</li></Link>
                                                                           : null
                                                                 }
                                                                 {
                                                                      authUser.is_designer && authUser.is_approved ?
                                                                           <Link to="/designer/orders" className="text-decoration-none text-reset"><li className="dropdown-item">Designer Orders</li></Link>
                                                                           : null
                                                                 }
                                                                 {
                                                                      authUser.is_customer ?
                                                                           <Fragment>
                                                                                <Link to="/cart" className="text-decoration-none text-reset"><li className="dropdown-item">Cart</li></Link>
                                                                                <Link to="/orders" className="text-decoration-none text-reset"><li className="dropdown-item">Orders</li></Link>
                                                                           </Fragment> : null
                                                                 }
                                                                 <li onClick={logout} className="dropdown-item" style={{ cursor: "pointer" }}>Logout</li>
                                                            </ul>
                                                       </Fragment>
                                                  }
                                             </li>
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
               <div className="modal fade" id="authModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                         <div className="modal-content cModalAuth">
                              <div className="modal-body">
                                   <Gap height={40} />
                                   {
                                        isLogin ?
                                             <Login changeSection={() => setIsLogin(false)} setIsAuth={(value) => setIsAuth(value)} isAuth={isAuth} setAuthUser={() => fetchAuthUser()} />
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
