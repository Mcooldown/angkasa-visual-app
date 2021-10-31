import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import { CustomerSymbol, DesignerSymbol, RegisterSuccess } from "../../../assets";
import { Gap, Input, Select, Button } from "../../atoms";
import RadioButton from "../../atoms/RadioButton/RadioButton";
import "./Register.scss";

const Register = ({ changeSection }) => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const history = useHistory();
     const [registerSection, setRegisterSection] = useState(1);
     const [isLoading, setIsLoading] = useState(false);

     // Register Form
     const [name, setName] = useState('');
     const [errName, setErrName] = useState(null);
     const [email, setEmail] = useState('');
     const [errEmail, setErrEmail] = useState(null);
     const [gender, setGender] = useState('');
     const [errGender, setErrGender] = useState(null);
     const [phoneNumber, setPhoneNumber] = useState('');
     const [errPhoneNumber, setErrPhoneNumber] = useState(null);
     const [dateOfBirth, setDateOfBirth] = useState('');
     const [errDateOfBirth, setErrDateOfBirth] = useState(null);
     const [address, setAddress] = useState('');
     const [errAddress, setErrAddress] = useState(null);
     const [password, setPassword] = useState('');
     const [errPassword, setErrPassword] = useState(null);
     const [isDesigner, setIsDesigner] = useState(false);
     const [isCustomer, setIsCustomer] = useState(false);

     // Designer form apply
     const [idCard, setIdCard] = useState('');
     const [errIdCard, setErrIdCard] = useState(null);
     const [skills, setSkills] = useState('');
     const [errSkills, setErrSkills] = useState(null);
     const [resume, setResume] = useState('');
     const [errResume, setErrResume] = useState(null);
     const [portfolioLink, setPortfolioLink] = useState('');
     const [errPortfolioLink, setErrPortfolioLink] = useState(null);
     const [bankAccount, setBankAccount] = useState('');
     const [errBankAccount, setErrBankAccount] = useState(null);
     const [accountName, setAccountName] = useState('');
     const [errAccountName, setErrAccountName] = useState(null);
     const [accountNumber, setAccountNumber] = useState('');
     const [errAccountNumber, setErrAccountNumber] = useState(null);

     const clearForm = () => {
          setName(''); setErrName(null);
          setEmail(''); setErrEmail(null);
          setGender(''); setErrGender(null);
          setPhoneNumber(''); setErrPhoneNumber(null);
          setDateOfBirth(''); setErrDateOfBirth(null);
          setAddress(''); setErrAddress(null);
          setPassword(''); setErrPassword(null);
          setIsDesigner(false); setIsCustomer(false);
          setResume(''); setErrResume(null);
          setPortfolioLink(''); setErrPortfolioLink(null);
          setBankAccount(''); setErrBankAccount(null);
          setAccountName(''); setErrAccountName(null);
          setAccountNumber(''); setErrAccountNumber(null);
          setIdCard(''); setErrIdCard(null);
          setSkills(''); setErrSkills(null);
     }

     const handleCloseModal = () => {
          setRegisterSection(1);
          clearForm();
          setIsLoading(false);
     }

     const handleSubmitPersonalData = () => {

          let pass = true;

          if (!name) {
               setErrName("Name must be filled");
               pass = false;
          }
          if (!email) {
               setErrEmail("Email must be filled");
               pass = false;
          }
          if (!gender) {
               setErrGender("Gender must be filled");
               pass = false;
          }
          if (!phoneNumber) {
               setErrPhoneNumber("Phone Number must be filled");
               pass = false;
          }
          if (!dateOfBirth) {
               setErrDateOfBirth("Date of birth must be selected");
               pass = false;
          }
          if (!address) {
               setErrAddress("Address must be filled");
               pass = false;
          }
          if (!password) {
               setErrPassword("Password must be filled");
               pass = false;
          }

          pass && setRegisterSection(2);
     }

     const handleSelectRole = () => {
          if (isDesigner) setRegisterSection(3);
          else if (isCustomer) {
               addUserToAPI().then((res) => {
                    if (res) {
                         setRegisterSection(4);
                         history.push('/');
                    } else {
                         setIsLoading(false);
                    }
               });
          };
     }

     const handleSubmitDesignerData = () => {

          let pass = true;

          if (!skills) {
               setErrSkills("Skill must be filled");
               pass = false;
          }
          if (!idCard) {
               setErrIdCard("ID Card link must be filled");
               pass = false;
          }
          if (!resume) {
               setErrResume("Resume link must be filled");
               pass = false;
          }
          if (!portfolioLink) {
               setErrPortfolioLink("Portfolio link must be filled");
               pass = false;
          }
          if (!bankAccount) {
               setErrBankAccount("Bank Account must be selected");
               pass = false;
          }
          if (!accountNumber) {
               setErrAccountNumber("Account Number must be filled");
               pass = false;
          }
          if (!accountName) {
               setErrAccountName("Account Name must be filled");
               pass = false;
          }

          if (pass) {
               addDesignerToAPI().then((res) => {
                    if (res) {
                         setRegisterSection(5);
                         history.push('/');
                    } else {
                         setIsLoading(false);
                    }
               });
          }
     }

     const addUserToAPI = async () => {
          setIsLoading(true);

          const apiFetch = await fetch(urlAPI + `register?name=${name}&email=${email}&phone_number=${phoneNumber}&dob=${dateOfBirth}&address=${address}&password=${password}&id_card=&is_designer=${isDesigner}&is_customer=${isCustomer}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.error) {
               console.log(apiFetch.error);
               return false;
          } else {
               return true;
          }
     }

     const addDesignerToAPI = async () => {
          setIsLoading(true);

          const apiFetch = await fetch(urlAPI + `registerdesigner?name=${name}&email=${email}&phone_number=${phoneNumber}&dob=${dateOfBirth}&address=${address}&password=${password}&id_card=${idCard}&is_designer=${isDesigner}&is_customer=${isCustomer}&bank_account=${bankAccount}&account_name=${accountName}&account_number=${accountNumber}&resume=${resume}&portofolio_link=${portfolioLink}&skills=${skills}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.error) {
               console.log(apiFetch.error);
               return false;
          } else {
               return true;
          }
     }

     return (
          <Fragment>
               <div className="d-flex justify-content-end">
                    <button type="button" className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"
                         onClick={handleCloseModal}></button>
               </div>
               <Gap height={40} />
               {
                    registerSection === 1 ?
                         <Fragment>
                              <h1 className="heading2 textBlue1 text-center">
                                   CREATE AN ACCOUNT
                              </h1>
                              <Gap height={80} />
                              <div className="card cCardAuth">
                                   <div className="card-body">
                                        <Input type="text" id="name" label="Name" placeholder="Angkasa Vis"
                                             value={name} onChange={(e) => { setName(e.target.value); setErrName(null); }} error={errName} />
                                        <Gap height={20} />

                                        <RadioButton id="gender" name="gender" label="Gender" options={["Female", "Male"]}
                                             value={gender} onChange={(e) => { setGender(e.target.value); setErrGender(null); }} error={errGender} />
                                        <Gap height={20} />

                                        <Input type="text" id="email" name="email" label="E-mail" placeholder="angkasavisualwork@gmail.com"
                                             value={email} onChange={(e) => { setEmail(e.target.value); setErrEmail(null); }} error={errEmail} />
                                        <Gap height={20} />

                                        <Input type="text" id="phoneNumber" name="phoneNumber" label="Phone Number" placeholder="081xxxxxxxx"
                                             value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value); setErrPhoneNumber(null); }} error={errPhoneNumber} />
                                        <Gap height={20} />

                                        <Input type="date" id="dateOfBirth" name="dateOfBirth" label="Date of Birth"
                                             value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value); setErrDateOfBirth(null); }} error={errDateOfBirth} />
                                        <Gap height={20} />

                                        <Input type="text" id="address" name="address" label="Address"
                                             value={address} onChange={(e) => { setAddress(e.target.value); setErrAddress(null); }} error={errAddress} />
                                        <Gap height={20} />

                                        <Input type="password" id="password" name="password" label="Password" placeholder="******"
                                             value={password} onChange={(e) => { setPassword(e.target.value); setErrPassword(null); }} error={errPassword} />
                                   </div>
                              </div>
                              <Gap height={40} />
                              <Button isFull type={2} onClick={handleSubmitPersonalData}>
                                   <h5 className="text-white subHeading3">SIGN UP</h5>
                              </Button>
                              <Gap height={20} />
                              <p className="text-center paragraph">Already have an account? <u className="textBlue1 fw-bold" onClick={changeSection}>Sign In</u></p>
                         </Fragment>
                         :
                         registerSection === 2 ?
                              <Fragment>
                                   {
                                        !isLoading ?
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
                                                  <div className="row justify-content-center">
                                                       {
                                                            (isDesigner || isCustomer) &&
                                                            <div className="col-md-6 order-md-2">
                                                                 <Button isFull type={2} onClick={handleSelectRole}>
                                                                      <h5 className="text-white subHeading3 m-1">NEXT</h5>
                                                                 </Button>
                                                            </div>
                                                       }
                                                       <div className="col-md-6 order-md-1">
                                                            <Button isFull type={1} onClick={() => setRegisterSection(1)}>
                                                                 <h5 className="subHeading3 m-1">BACK</h5>
                                                            </Button>
                                                       </div>
                                                  </div>
                                             </Fragment>
                                             :
                                             <p>Please wait...</p>
                                   }
                              </Fragment>
                              : registerSection === 3 ?
                                   <Fragment>
                                        {
                                             !isLoading ?
                                                  <Fragment>
                                                       <h1 className="heading2 textBlue1 text-center">
                                                            REGISTER AS A DESIGNER
                                                       </h1>
                                                       <Gap height={80} />
                                                       <div className="card cCardAuth">
                                                            <div className="card-body">
                                                                 <Input type="text" id="skills" name="skills" label="Skills" placeholder="Fill your skills here"
                                                                      value={skills} onChange={(e) => { setSkills(e.target.value); setErrSkills(null); }} error={errSkills} />
                                                                 <Gap height={20} />
                                                                 <Input type="text" id="idCard" name="idCard" label="ID Card Link" placeholder="Upload your ID Card/KTP link here"
                                                                      value={idCard} onChange={(e) => { setIdCard(e.target.value); setErrIdCard(null); }} error={errIdCard} />
                                                                 <Gap height={20} />
                                                                 <Input type="text" id="resume" name="resume" label="Resume Link" placeholder="Upload your resume link here"
                                                                      value={resume} onChange={(e) => { setResume(e.target.value); setErrResume(null); }} error={errResume} />
                                                                 <Gap height={20} />
                                                                 <Input type="text" id="portfolioLink" name="portfolioLink" label="Portfolio Link" placeholder="Upload your portfolio link here"
                                                                      value={portfolioLink} onChange={(e) => { setPortfolioLink(e.target.value); setErrPortfolioLink(null); }} error={errPortfolioLink} />
                                                                 <Gap height={20} />
                                                                 <Select id="bankAccount" name="bankAccount" label="Bank Account" options={["BCA", "BNI", "BRI", "Mandiri", "CIMB Niaga"]}
                                                                      value={bankAccount} onChange={(e) => { setBankAccount(e.target.value); setErrBankAccount(null); }} error={errBankAccount} />
                                                                 <Gap height={20} />
                                                                 <Input type="text" id="accountName" name="accountName" label="Account Name"
                                                                      value={accountName} onChange={(e) => { setAccountName(e.target.value); setErrAccountName(null); }} error={errAccountName} />
                                                                 <Gap height={20} />
                                                                 <Input type="text" id="accountNumber" name="accountNumber" label="Account Number" placeholder="527xxxxxxx"
                                                                      value={accountNumber} onChange={(e) => { setAccountNumber(e.target.value); setErrAccountNumber(null); }} error={errAccountNumber} />
                                                            </div>
                                                       </div>
                                                       <Gap height={40} />
                                                       <Button isFull type={2} onClick={handleSubmitDesignerData}>
                                                            <h5 className="text-white subHeading3">LET'S BECOME OUR DESIGNERS</h5>
                                                       </Button>
                                                       <Gap height={20} />
                                                       <p className="text-center paragraph">I just want to be a customer <u className="textBlue1 fw-bold" onClick={() => setRegisterSection(2)}>Choose My Role</u></p>
                                                  </Fragment>
                                                  :
                                                  <p>Please wait...</p>
                                        }
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
     )
}

export default Register
