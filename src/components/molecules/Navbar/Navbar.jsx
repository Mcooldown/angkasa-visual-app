import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomerSymbol, DesignerSymbol, Logo, RegisterSuccess } from '../../../assets';
import { Gap, Button, Input, Select } from '../../atoms';
import RadioButton from '../../atoms/RadioButton/RadioButton';
import './navbar.scss';


const Navbar = () => {

     const [isLogin, setIsLogin] = useState(false);
     const [registerSection, setRegisterSection] = useState(1);
     const [isDesigner, setIsDesigner] = useState(false);
     const [isCustomer, setIsCustomer] = useState(false);

     const handleSelectRole = () => {
          if (isDesigner) setRegisterSection(3);
          else setRegisterSection(4);
     }

     const handleCloseModal = () => {
          setRegisterSection(1);
          setIsDesigner(false);
          setIsCustomer(false);
     }

     const handleToSection2 = () => {
          setRegisterSection(2);
     }

     const handleDesignerSubmit = () => {
          setRegisterSection(4);
     }

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
               <div className="modal fade" id="authModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                         <div className="modal-content cModalAuth">
                              <div className="modal-body">
                                   <div className="d-flex justify-content-end">
                                        <button type="button" className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"
                                             onClick={handleCloseModal}></button>
                                   </div>
                                   <Gap height={40} />
                                   {
                                        isLogin ?
                                             <Fragment>
                                                  <h1 className="heading2 textBlue1 text-center">
                                                       SIGN IN TO YOUR ACCOUNT
                                                  </h1>
                                                  <Gap height={80} />
                                                  <div className="card cCardAuth">
                                                       <div className="card-body">
                                                            <Input type="text" id="email" name="email" label="E-mail" placeholder="angkasavisualwork@gmail.com" required />
                                                            <Gap height={30} />
                                                            <Input type="password" id="password" name="password" label="Password" placeholder="******" required />
                                                       </div>
                                                  </div>
                                                  <Gap height={40} />
                                                  <p className="text-end textBlue1 paragraph fw-bold"><u>Forgot password?</u></p>
                                                  <Gap height={20} />
                                                  <Button isFull type={2}>
                                                       <h5 className="text-white subHeading3">SIGN IN</h5>
                                                  </Button>
                                                  <Gap height={20} />
                                                  <p className="text-center paragraph">Do not have an account? <u className="textBlue1 fw-bold" onClick={() => setIsLogin(false)}>Sign Up</u></p>
                                             </Fragment>
                                             :
                                             <Fragment>
                                                  {
                                                       registerSection === 1 ?
                                                            <Fragment>
                                                                 <h1 className="heading2 textBlue1 text-center">
                                                                      CREATE AN ACCOUNT
                                                                 </h1>
                                                                 <Gap height={80} />
                                                                 <div className="card cCardAuth">
                                                                      <div className="card-body">
                                                                           <Input type="text" id="name" name="name" label="Name" placeholder="Angkasa Vis" required />
                                                                           <Gap height={20} />
                                                                           <RadioButton id="gender" name="gender" label="Gender" options={["Female", "Male"]} required />
                                                                           <Gap height={20} />
                                                                           <Input type="text" id="email" name="email" label="E-mail" placeholder="angkasavisualwork@gmail.com" required />
                                                                           <Gap height={20} />
                                                                           <Input type="text" id="phoneNumber" name="phoneNumber" label="Phone Number" placeholder="081xxxxxxxx" required />
                                                                           <Gap height={20} />
                                                                           <Input type="date" id="dateOfBirth" name="dateOfBirth" label="Date of Birth" required />
                                                                           <Gap height={20} />
                                                                           <Select id="domicile" name="domicile" label="Domicile" options={["Jakarta", "Bandung", "Semarang", "Surabaya"]} required />
                                                                           <Gap height={20} />
                                                                           <Input type="password" id="password" name="password" label="Password" placeholder="******" required />
                                                                      </div>
                                                                 </div>
                                                                 <Gap height={40} />
                                                                 <Button isFull type={2} onClick={handleToSection2}>
                                                                      <h5 className="text-white subHeading3">SIGN UP</h5>
                                                                 </Button>
                                                                 <Gap height={20} />
                                                                 <p className="text-center paragraph">Already have an account? <u className="textBlue1 fw-bold" onClick={() => setIsLogin(true)}>Sign In</u></p>
                                                            </Fragment>
                                                            :
                                                            registerSection === 2 ?
                                                                 <Fragment>
                                                                      <h1 className="heading2 textBlue1 text-center">
                                                                           CHOOSE YOUR ROLE (S)
                                                                      </h1>
                                                                      <Gap height={80} />
                                                                      <div className="row">
                                                                           <div className="col-lg-6">
                                                                                <div className={"cCardRole " + (isDesigner ? "selected" : "")} onClick={() => setIsDesigner(!isDesigner)}>
                                                                                     <h1 className="subHeading2 text-center">DESIGNER</h1>
                                                                                     <Gap height={20} />
                                                                                     <img src={DesignerSymbol} className="cImageRole" alt="designerSymbol" />
                                                                                </div>
                                                                           </div>
                                                                           <div className="col-lg-6">
                                                                                <div className={"cCardRole " + (isCustomer ? "selected" : "")} onClick={() => setIsCustomer(!isCustomer)}>
                                                                                     <h1 className="subHeading2 text-center">CUSTOMER</h1>
                                                                                     <Gap height={20} />
                                                                                     <img src={CustomerSymbol} className="cImageRole" alt="customerSymbol" />
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <Gap height={60} />
                                                                      <Button isFull type={2} onClick={handleSelectRole}>
                                                                           <h5 className="text-white subHeading3">NEXT</h5>
                                                                      </Button>
                                                                 </Fragment>
                                                                 : registerSection === 3 ?
                                                                      <Fragment>
                                                                           <h1 className="heading2 textBlue1 text-center">
                                                                                REGISTER AS A DESIGNER
                                                                           </h1>
                                                                           <Gap height={80} />
                                                                           <div className="card cCardAuth">
                                                                                <div className="card-body">
                                                                                     <Input type="text" id="skills" name="skills" label="Visual Works Skill" placeholder="Video Editing, User Interface Design, Poster Design, etc" required />
                                                                                     <Gap height={20} />
                                                                                     <Input type="text" id="portfolioLink" name="portfolioLink" label="Portfolio Link" placeholder="Upload your portfolio link here" required />
                                                                                     <Gap height={20} />
                                                                                     <Select id="bankAccount" name="bankAccount" label="Bank Account" options={["BCA", "BNI", "BRI", "Mandiri", "CIMB Niaga"]} required />
                                                                                     <Gap height={20} />
                                                                                     <Input type="text" id="accountNumber" name="accountNumber" label="Account Number" placeholder="527xxxxxxx" required />
                                                                                </div>
                                                                           </div>
                                                                           <Gap height={40} />
                                                                           <Button isFull type={2} onClick={handleDesignerSubmit}>
                                                                                <h5 className="text-white subHeading3">LET'S BECOME OUR DESIGNERS</h5>
                                                                           </Button>
                                                                           <Gap height={20} />
                                                                           <p className="text-center paragraph">I just want to be a customer <u className="textBlue1 fw-bold" onClick={() => setRegisterSection(2)}>Choose My Role</u></p>
                                                                      </Fragment>
                                                                      :
                                                                      <Fragment>
                                                                           <h1 className="heading2 textBlue1 text-center">
                                                                                REGISTRATION SUCCESS
                                                                           </h1>
                                                                           <Gap height={80} />
                                                                           <div className="row justify-content-center">
                                                                                <div className="col-lg-6">
                                                                                     <h1 class="subHeading3 textBlue1 text-center">
                                                                                          {
                                                                                               registerSection === 4 ?
                                                                                                    "Congratulations, now you can explore Angkasa Visual Works easily"
                                                                                                    :
                                                                                                    "Please wait while we are reviewing your application"
                                                                                          }
                                                                                     </h1>
                                                                                     <img src={RegisterSuccess} alt="registerSuccess" className="w-100" />
                                                                                </div>
                                                                           </div>
                                                                           <Gap height={60} />
                                                                           <Button isFull type={2} onClick={handleCloseModal} data-bs-dismiss="modal" aria-label="Close">
                                                                                <h5 className="text-white subHeading3">OKAY, I GOT IT</h5>
                                                                           </Button>
                                                                      </Fragment>
                                                  }
                                             </Fragment>
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default Navbar
