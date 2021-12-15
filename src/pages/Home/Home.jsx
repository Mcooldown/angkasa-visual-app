import { Fragment } from "react";
import "./Home.scss";
import { Button, Gap } from "../../components/atoms";
import { HoodieDesign, LandingIllust, PhotoEditing, Send, TShirtDesign, UIDesign, VideoEditing, Why1, Why2, Why3 } from "../../assets";
import WorkCard from "../../components/molecules/WorkCard/WorkCard";
import OwlCarousel from 'react-owl-carousel2';
import { useEffect } from "react";

const Home = () => {

     const optionsRecentWorks = {
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

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <Fragment>
               <div className="cLanding">
                    <div className="cLandingContent container-fluid row justify-content-between align-items-center">
                         <div className="col-lg-6">
                              <h1 className="title text-white">With Us, There is no Limit for Creativity</h1>
                              <p className="paragraph text-white">
                                   Angkasa Visual Works is a digital platform that provides digital design, video creation and editing, also UI/ UX design services in high-quality results, yet at standardized prices.
                              </p>
                              <Gap height={20} />
                              <Button type={1}>
                                   <div className="m-1">
                                        <i className="fa fa-play"></i>
                                        <span className="paragraph font-weight-bold text-center m-0 ms-3">Company Profile</span>
                                   </div>
                              </Button>
                         </div>
                         <div className="col-lg-6 d-none d-lg-block">
                              <img src={LandingIllust} width="100%" alt="landing-illust" />
                         </div>
                    </div>
               </div>
               <div className="cRecentWorks">
                    <h1 className="title textBlue1 text-center">Our Recent Works</h1>
                    <Gap height={50} />
                    <OwlCarousel options={optionsRecentWorks}>
                         <WorkCard key={1} title="Hoodie Design" image={HoodieDesign} description="Make your own hoodie design" />
                         <WorkCard key={2} title="Photo Editing" image={PhotoEditing} description="Make your own photo editing" />
                         <WorkCard key={3} title="T-Shirt Design" image={TShirtDesign} description="Make your own t-Shirt design" />
                         <WorkCard key={4} title="UI Design" image={UIDesign} description="Make your own UI design" />
                         <WorkCard key={5} title="Video Editing" image={VideoEditing} description="Make your own video editing" />
                    </OwlCarousel>
               </div>
               <div className="cWhyAngkasa">
                    <div className="container-fluid">
                         <div className="row align-items-center justify-content-around">
                              <div className="col-lg-4 my-3 order-lg-2">
                                   <h1 className="title text-end textBlue1"><span className="fw-normal">WHY</span> ANGKASA VISUAL WORKS?</h1>
                              </div>
                              <div className="col-lg-7 my-3 order-lg-1">
                                   <div className="row text-center">
                                        <div className="col-lg-4">
                                             <img src={Why1} width="100%" alt="" />
                                             <h1 className="subHeading1 textBlue2">Best Quality Guaranteed</h1>
                                        </div>
                                        <div className="col-lg-4">
                                             <img src={Why2} width="100%" alt="" />
                                             <h1 className="subHeading1 textBlue2">Fast Order Handling</h1>
                                        </div>
                                        <div className="col-lg-4">
                                             <img src={Why3} width="100%" alt="" />
                                             <h1 className="subHeading1 textBlue2">Communication Made Easy</h1>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cStatistics">
                    <div className="container-fluid">
                         <h1 className="title text-center textBlue1"><span className="fw-normal">We are continuously</span> scale up <span className="fw-normal">our services to</span> fulfill your needs!</h1>
                         <Gap height={80} />
                         <div className="row text-center justify-content-around">
                              <div className="col-lg-3">
                                   <h1 className="textStatistic textBlue2">72,000+</h1>
                                   <Gap height={20} />
                                   <p className="subHeading2 fw-normal">Designs accepted</p>
                              </div>
                              <div className="col-lg-3">
                                   <h1 className="textStatistic textBlue2">58,000+</h1>
                                   <Gap height={20} />
                                   <p className="subHeading2 fw-normal">Users</p>
                              </div>
                              <div className="col-lg-3">
                                   <h1 className="textStatistic textBlue2">500+</h1>
                                   <Gap height={20} />
                                   <p className="subHeading2 fw-normal">Designers</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cLeaveMessage">
                    <div className="container-fluid">
                         <div className="d-inline-flex align-items-center">
                              <div>
                                   <h1 className="title textBlue1">Like What You See?</h1>
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

export default Home
