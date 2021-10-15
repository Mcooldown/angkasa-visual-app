import { Fragment } from "react";
import { Gap, Button } from "../../components/atoms";
import "./OurServices.scss";
import OwlCarousel from "react-owl-carousel2";
import ServiceCard from "../../components/molecules/ServiceCard/ServiceCard";
import { Send } from "../../assets";

const OurServices = () => {

     const optionsCarousel = {
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
               <div className="cOurServices">
                    <div className="container-fluid">
                         <div className="row justify-content-center">
                              <div className="col-lg-8">
                                   <h1 className="title textBlue1 text-center">Our Services</h1>
                                   <Gap height={40} />
                                   <p className="paragraph textBlue1 text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam rem nostrum facilis. Soluta optio asperiores distinctio veritatis vel necessitatibus, totam eos reiciendis amet harum, ea hic itaque sequi esse!
                                   </p>
                                   <Gap height={60} />
                                   <div className="row text-center align-items-start">
                                        <div className="col-md-4 col-10">
                                             <h1 className="heading2 textBlue1">GRAPHIC DESIGN</h1>
                                        </div>
                                        <div className="col-md-4 col-10">
                                             <h1 className="heading2 textBlue1">VIDEO &#38; ANIMATION</h1>
                                        </div>
                                        <div className="col-md-4 col-10">
                                             <h1 className="heading2 textBlue1">GRAPHIC DESIGN</h1>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cGraphicDesign">
                    <div className="container-fluid">
                         <h1 className="cTitleCarousel text-white text-end">Graphic Design</h1>
                    </div>
                    <Gap height={50} />
                    <OwlCarousel options={optionsCarousel}>
                         <ServiceCard key={1} title="Service 1" description="halo halo binus halo halo binus halo halo binus" rangeMin={20000} rangeMax={30000} />
                    </OwlCarousel>
               </div>
               <div className="cVideoAnimation">
                    <div className="container-fluid">
                         <h1 className="cTitleCarousel text-white">Video &#38; Animation</h1>
                    </div>
                    <Gap height={50} />
                    <OwlCarousel options={optionsCarousel}>
                         <ServiceCard key={1} title="Service 1" description="halo halo binus halo halo binus halo halo binus" rangeMin={20000} rangeMax={30000} />
                    </OwlCarousel>
               </div>
               <div className="cTechDesign">
                    <div className="container-fluid">
                         <h1 className="cTitleCarousel text-white text-end">Tech Design</h1>
                    </div>
                    <Gap height={50} />
                    <OwlCarousel options={optionsCarousel}>
                         <ServiceCard key={1} title="Service 1" description="halo halo binus halo halo binus halo halo binus" rangeMin={20000} rangeMax={30000} />
                    </OwlCarousel>
               </div>
               <div className="cLeaveMessage">
                    <div className="container-fluid">
                         <div className="d-inline-flex align-items-center">
                              <div>
                                   <h1 className="title textBlue1">Didn't find what you need?</h1>
                                   <h1 className="subHeading2 textBlue2">Leave us a message</h1>
                              </div>
                              <Gap width={40} />
                              <Button type={1}>
                                   <div className="d-flex align-items-center m-2">
                                        <img src={Send} height="50px" alt="send" />
                                        <Gap width={20} />
                                        <h1 className="heading2 textBlue1">Let's Talk!</h1>
                                   </div>
                              </Button>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default OurServices;
