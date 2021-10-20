import { Link } from 'react-router-dom';
import { Logo } from '../../../assets';
import { Gap, Button } from '../../atoms';
import './navbar.scss';


const Navbar = () => {
     return (
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
                              <Button type={1}>
                                   <h6 className="fw-bold m-0 p-1">Login</h6>
                              </Button>
                              <Gap width={15} height={10} />
                              <Button type={2}>
                                   <h6 className="fw-bold m-0 p-1">Register</h6>
                              </Button>
                         </div>
                    </div>
               </div>
          </nav>
     )
}

export default Navbar
