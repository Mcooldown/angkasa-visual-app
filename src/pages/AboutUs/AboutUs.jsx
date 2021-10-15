import { Fragment } from "react";
import { Adie, Kathleen, Michele, Putu, Sample, Vincent } from "../../assets";
import { Gap } from "../../components/atoms";
import "./AboutUs.scss";
import OwlCarousel from 'react-owl-carousel2';
import DesignerCard from "../../components/molecules/DesignerCard/DesignerCard";
import { Button } from "../../components/atoms";

const AboutUs = () => {

     const optionsDesigners = {
          items: 2,
          center: true,
          stagePadding: 20,
          margin: 50,
          autoplay: true,
          loop: true,
          responsive: {
               0: {
                    items: 1
               },
               600: {
                    items: 2
               }
          }
     };

     return (
          <Fragment>
               <div className="cAbout">
                    <div className="container-fluid">
                         <div className="row justify-content-between align-items-center">
                              <div className="col-lg-7 pe-lg-5 my-3">
                                   <img src={Sample} className="w-100" alt="" />
                              </div>
                              <div className="col-lg-5 my-3">
                                   <h1 className="heading1 textBlue1">ABOUT US</h1>
                                   <p className="paragraph textBlue1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis urna laoreet commodo scelerisque at sem. Vestibulum fringilla at duis proin aliquam facilisi tempor. In nunc diam lorem id arcu amet.</p>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="cTeam">
                    <div className="container-fluid">
                         <div className="row justify-content-between align-items-center">
                              <div className="col-lg-4 text-end my-3">
                                   <h1 className="heading1 textBlue1">OUR TEAM</h1>
                                   <p className="paragraph textBlue1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis urna laoreet commodo scelerisque at sem. Vestibulum fringilla at duis proin aliquam facilisi tempor. In nunc diam lorem id arcu amet.</p>
                              </div>
                              <div className="col-lg-8 my-3">
                                   <div className="row justify-content-around align-items-start">
                                        <div className="col-lg-3 my-3 col-10">
                                             <div className="cImageSquare">
                                                  <img src={Adie} alt="adie" />
                                             </div>
                                             <Gap height={30} />
                                             <div className="text-center">
                                                  <h1 className="subHeading3 textBlue1">Adie Satriyo Nirbito</h1>
                                                  <p className="paragraph textBlue1">Chief Executive Officer</p>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 my-3 col-10">
                                             <div className="cImageSquare">
                                                  <img src={Putu} alt="putu" />
                                             </div>
                                             <Gap height={30} />
                                             <div className="text-center">
                                                  <h1 className="subHeading3 textBlue1">I Putu Gede Prama Duta</h1>
                                                  <p className="paragraph textBlue1">Chief Information Officer</p>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 my-3 col-10">
                                             <div className="cImageSquare">
                                                  <img src={Kathleen} alt="kathleen" />
                                             </div>
                                             <Gap height={30} />
                                             <div className="text-center">
                                                  <h1 className="subHeading3 textBlue1">Kathleen Febiola Susanto</h1>
                                                  <p className="paragraph textBlue1">Chief Operating Officer</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="row justify-content-center align-items-start">
                                        <div className="col-lg-3 my-3 col-10">
                                             <div className="cImageSquare">
                                                  <img src={Michele} alt="michele" />
                                             </div>
                                             <Gap height={30} />
                                             <div className="text-center">
                                                  <h1 className="subHeading3 textBlue1">Michele Carolina</h1>
                                                  <p className="paragraph textBlue1">Chief Marketing Officer</p>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 offset-lg-1 my-3 col-10">
                                             <div className="cImageSquare">
                                                  <img src={Vincent} alt="vincent" />
                                             </div>
                                             <Gap height={30} />
                                             <div className="text-center">
                                                  <h1 className="subHeading3 textBlue1">Vincent Hadinata</h1>
                                                  <p className="paragraph textBlue1">Chief Technology Officer</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cLocation">
                    <div className="container-fluid">
                         <div className="row justify-content-between align-items-center">
                              <div className="col-lg-7 pe-lg-5 my-3">
                                   <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2826888773193!2d106.82831486433057!3d-6.357443386095118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6dcc7d2c4ad%3A0x209cb1eef39be168!2sBINUS%20University%2C%20Anggrek%20Campus!5e0!3m2!1sen!2sid!4v1634286699163!5m2!1sen!2sid" width="100%" height="600" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                              </div>
                              <div className="col-lg-5 my-3">
                                   <h1 className="heading1 textBlue1">OUR LOCATION</h1>
                                   <p className="paragraph textBlue1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis urna laoreet commodo scelerisque at sem. Vestibulum fringilla at duis proin aliquam facilisi tempor. In nunc diam lorem id arcu amet.</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cDesigners">
                    <h1 className="heading1 textBlue1 text-center">OUR DESIGNERS</h1>
                    <Gap height={30} />
                    <p className="paragraph textBlue1 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis urna laoreet commodo scelerisque at sem. Vestibulum fringilla at duis proin aliquam facilisi tempor. In nunc diam lorem id arcu amet.</p>
                    <Gap height={50} />
                    <OwlCarousel options={optionsDesigners}>
                         <DesignerCard key={1} name="Designer 1" specialty="Web Designer" description="halo halo binus halo halo binus halo halo binus" />
                         <DesignerCard key={2} name="Designer 2" specialty="Graphic Designer" description="halo halo binus halo halo binus halo halo binus" />
                         <DesignerCard key={3} name="Designer 3" specialty="Animator" description="halo halo binus halo halo binus halo halo binus" />
                    </OwlCarousel>
               </div>
               <div className="cContactUs">
                    <div className="container-fluid">
                         <div className="row align-items-center justify-content-between">
                              <div className="col-lg-5 text-end my-3">
                                   <h1 className="heading1 textBlue1">CONTACT US</h1>
                                   <p className="paragraph textBlue1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis urna laoreet commodo scelerisque at sem. Vestibulum fringilla at duis proin aliquam facilisi tempor. In nunc diam lorem id arcu amet.</p>
                              </div>
                              <div className="col-lg-7 ps-lg-5 my-3">
                                   <div className="cCardContact">
                                        <div className="card-body">

                                             {/* Form */}
                                             <div className="row">
                                                  <label htmlFor="name" className="col-lg-4"><h1 class="paragraph fw-bold">Name</h1></label>
                                                  <div className="col-lg-8">
                                                       <input type="text" className="form-control" />
                                                  </div>
                                             </div>
                                             <Gap height={30} />
                                             <div className="row">
                                                  <label htmlFor="email" className="col-lg-4"><h1 class="paragraph fw-bold">E-mail</h1></label>
                                                  <div className="col-lg-8">
                                                       <input type="text" className="form-control" />
                                                  </div>
                                             </div>
                                             <Gap height={30} />
                                             <div className="row">
                                                  <label htmlFor="subject" className="col-lg-4"><h1 class="paragraph fw-bold">Subject</h1></label>
                                                  <div className="col-lg-8">
                                                       <input type="text" className="form-control" />
                                                  </div>
                                             </div>
                                             <Gap height={30} />
                                             <div className="row">
                                                  <label htmlFor="subject" className="col-lg-4"><h1 class="paragraph fw-bold">Phone Number</h1></label>
                                                  <div className="col-lg-8">
                                                       <input type="text" className="form-control" />
                                                  </div>
                                             </div>
                                             <Gap height={30} />
                                             <div className="row">
                                                  <label htmlFor="subject" className="col-lg-4"><h1 class="paragraph fw-bold">Message</h1></label>
                                                  <div className="col-lg-8">
                                                       <input type="text" className="form-control" />
                                                  </div>
                                             </div>
                                             <Gap height={30} />
                                             <div className="row">
                                                  <label htmlFor="file" className="col-lg-4"><h1 class="paragraph fw-bold">File</h1></label>
                                                  <div className="col-lg-8">
                                                       <Button type={1}>
                                                            <h5 className="paragraph textBlue1 m-0">Browse</h5>
                                                       </Button>
                                                  </div>
                                             </div>
                                             <Gap height={40} />
                                             <Button isFull type={2}>
                                                  <h5 className="subHeading3 texBlue1">SEND</h5>
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default AboutUs















