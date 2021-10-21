import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../assets';
import { Gap, Button } from '../../atoms';
import './navbar.scss';


const Navbar = () => {

     const [isLogin, setIsLogin] = useState(false);

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
                                   <Button type={1} onClick={() => setIsLogin(true)} data-bs-toggle="modal" data-bs-target="#authModal">
                                        <h6 className="fw-bold m-0 p-1">Login</h6>
                                   </Button>
                                   <Gap width={15} height={10} />
                                   <Button type={2} onClick={() => setIsLogin(false)} data-bs-toggle="modal" data-bs-target="#authModal">
                                        <h6 className="fw-bold m-0 p-1">Register</h6>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </nav>
               <div className="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                         <div className="modal-content cModalAuth">
                              <div className="modal-body">
                                   <div className="d-flex justify-content-end">
                                        <button type="button" className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                   </div>
                                   <Gap height={40} />
                                   <h1 className="heading2 textBlue1 text-center">
                                        {
                                             isLogin ? 'SIGN IN TO YOUR ACCOUNT' : 'CREATE AN ACCOUNT'
                                        }
                                   </h1>
                                   <Gap height={80} />
                                   <div className="card cCardAuth">
                                        <div className="card-body">

                                             {/* Form */}
                                             <div className="row">
                                                  <label htmlFor="email" className="col-lg-4"><h1 class="paragraph fw-bold">E-mail</h1></label>
                                                  <div className="col-lg-8">
                                                       <input type="text" className="form-control" placeholder="angkasaworks@gmail.com" />
                                                  </div>
                                             </div>
                                             <Gap height={30} />
                                             <div className="row">
                                                  <label htmlFor="name" className="col-lg-4"><h1 class="paragraph fw-bold">Password</h1></label>
                                                  <div className="col-lg-8">
                                                       <input type="password" placeholder="***********" className="form-control" />
                                                  </div>
                                             </div>

                                        </div>
                                   </div>
                                   <Gap height={40} />
                                   <p className="text-end textBlue1 paragraph fw-bold"><u>Forgot password?</u></p>
                                   <Gap height={20} />
                                   <Button isFull type={2}>
                                        <h5 className="text-white subHeading3">SIGN IN</h5>
                                   </Button>
                                   <Gap height={20} />
                                   <p className="text-center paragraph">Do not have an account? <u className="textBlue1 fw-bold">Sign Up</u></p>
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default Navbar
