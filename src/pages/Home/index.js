import { Fragment, useRef } from "react";
import "./Home.scss";
import {Button, Gap} from "../../components/atoms";
import { LandingIllust } from "../../assets";
import WorkCard from "../../components/molecules/WorkCard";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'; //Allows for server-side rendering.

const Home = () => {

     const ref = useRef();

     const options = {
          items: 3,
          nav: false,
          dotsEach: true,
          stagePadding: 20,
          margin: 20,
          rewind: true,
          autoplay: true
     };
 
     const events = {
     //     onDragged: function(event) {...},
     //     onChanged: function(event) {...}
     };

     return (
          <Fragment>
               <div className="cLanding">
                    <div className="cLandingContent container-fluid row justify-content-between align-items-center">
                         <div className="col-lg-5">
                              <h1 className="cLandingText text-white">Fly To The Moon</h1>
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
                         <div className="col-lg-7 d-none d-lg-block">
                              <img src={LandingIllust} width="100%" alt="landing-illust" />
                         </div>
                    </div>
               </div>
               <div className="cRecentWorks">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Our Recent Works</h1>
                         <Gap height={50} />
                         {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
                              <div class='item'>
                              </div>
                              <div class='item'>
                                   <WorkCard title="Work 2" description="halo halo binusian halo halo binusian halo halo binusian" />
                              </div>
                              <div class='item'>
                                   <WorkCard title="Work 3" description="halo halo binusian halo halo binusian halo halo binusian" />
                              </div>
                         </OwlCarousel> */}
                         <OwlCarousel ref={ref} options={options} events={events}>
                              <WorkCard key={1} title="Work 1" description="halo halo binusian halo halo binusian halo halo binusian" />
                              <WorkCard key={2} title="Work 1" description="halo halo binusian halo halo binusian halo halo binusian" />
                              <WorkCard key={3} title="Work 1" description="halo halo binusian halo halo binusian halo halo binusian" />
                         </OwlCarousel>
                         {/* <div className="row justify-content-center">
                              <div className="col-lg-4">
                                   <WorkCard title="Work 1" description="halo halo binusian halo halo binusian halo halo binusian" />
                              </div>
                              <div className="col-lg-4">
                                   <WorkCard title="Work 2" description="halo halo binusian halo halo binusian halo halo binusian" />
                              </div>
                              <div className="col-lg-4">
                                   <WorkCard title="Work 3" description="halo halo binusian halo halo binusian halo halo binusian" />
                              </div>
                         </div> */}
                    </div>
               </div>
          </Fragment>
     )
}

export default Home
