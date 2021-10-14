import { Link } from 'react-router-dom';
import { Logo } from '../../../assets';
import { Gap } from '../../atoms';
import './footer.scss';

const Footer = () => {
     return (
          <div className="cFooter">
               <div className="container-fluid">
                    <div className="row justify-content-between align-items-center">
                         <div className="col-lg-6 d-lg-flex align-items-center">
                              <img src={Logo} className="cImageFooter my-3" alt="logo" />
                              <Gap width={60} />
                              <div className="d-lg-flex align-items-center my-3">
                                   <Link to="/about-us" className="paragraph cLinkFooter">About Us</Link>
                                   <Gap width={60} />
                                   <Link to="/our-services" className="paragraph cLinkFooter">Our Services</Link>
                                   <Gap width={60} />
                                   <Link to="/testimonies" className="paragraph cLinkFooter">Testimonies</Link>
                                   <Gap width={60} />
                              </div>
                         </div>
                         <div className="col-lg-3 d-flex align-items-center justify-content-lg-end pe-lg-5 my-3">
                              <Link to={{ pathname: "https://getbootstrap.com/docs/5.0/components/navbar/" }} target="_blank">
                                   <i className="fab fa-2x text-white fa-instagram"></i>
                              </Link>
                              <Gap width={30} />
                              <Link to={{ pathname: "https://getbootstrap.com/docs/5.0/components/navbar/" }} target="_blank">
                                   <i className="fab fa-2x text-white fa-behance"></i>
                              </Link>
                              <Gap width={30} />
                              <Link to={{ pathname: "https://getbootstrap.com/docs/5.0/components/navbar/" }} target="_blank">
                                   <i className="fab fa-2x text-white fa-youtube"></i>
                              </Link>
                              <Gap width={30} />
                              <Link to={{ pathname: "https://getbootstrap.com/docs/5.0/components/navbar/" }} target="_blank">
                                   <i className="fab fa-2x text-white fa-whatsapp"></i>
                              </Link>
                         </div>
                         <div className="col-lg-3 my-3">

                              <h4><i class="fas fa-map-marker-alt text-white"></i> Our Location</h4>
                              <Gap height={10} />
                              <p>Jl. Raya Kb. Jeruk No.27, RT.2/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Footer
