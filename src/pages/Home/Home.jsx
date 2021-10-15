import { Fragment } from "react";
import "./Home.scss";
import { Button, Gap } from "../../components/atoms";
import { LandingIllust, Send, Why1, Why2, Why3 } from "../../assets";
import WorkCard from "../../components/molecules/WorkCard/WorkCard";
import OwlCarousel from 'react-owl-carousel2';

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


     return (
          <Fragment>
               <div className="cLanding">
                    <div className="cLandingContent container-fluid row justify-content-between align-items-center">
                         <div className="col-lg-6">
                              <h1 className="title text-white">Fly To The Moon with Our Services</h1>
                              <p className="paragraph text-white">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis urna laoreet commodo scelerisque at sem. Vestibulum fringilla at duis proin aliquam facilisi tempor. In nunc diam lorem id arcu amet.
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
                         <WorkCard key={1} title="Work 1" description="halo halo binusian halo halo binusian halo halo binusian" />
                         <WorkCard key={2} title="Work 2" description="halo halo binusian halo halo binusian halo halo binusian" />
                         <WorkCard key={3} title="Work 3" description="halo halo binusian halo halo binusian halo halo binusian" />
                         <WorkCard key={4} title="Work 4" description="halo halo binusian halo halo binusian halo halo binusian" />
                         <WorkCard key={5} title="Work 5" description="halo halo binusian halo halo binusian halo halo binusian" />
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
