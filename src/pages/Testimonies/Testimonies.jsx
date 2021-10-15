import "./Testimonies.scss";
import { Gap, Button } from "../../components/atoms";
import { Fragment } from "react";
import TestimonyCard from "../../components/molecules/TestimonyCard/TestimonyCard";
import { Send } from "../../assets";

const Testimonies = () => {
     return (
          <Fragment>
               <div className="cTestimonies">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Testimonies</h1>
                         <Gap height={40} />
                         <p className="paragraph textBlue1 text-center">
                              Let’s hear what they say about Angkasa Visual Works!
                         </p>
                    </div>
               </div>
               <div className="cTestimoniesContent">
                    <div className="container-fluid">
                         <div className="cTestimoniesWrapper card">
                              <div className="card-body my-3">
                                   <div className="card cTestimoniesHeader">
                                        <div className="card-body my-2 d-flex justify-content-between align-items-center">
                                             <h3 className="subHeading2 m-0">Testimonies</h3>
                                             <div className="d-flex">
                                                  <i className="fa fa-chevron-down fa-2x"></i>
                                                  <Gap width={70} />
                                                  <i className="fa fa-minus fa-2x"></i>
                                                  <Gap width={30} />
                                                  <i className="fa fa-square fa-2x"></i>
                                                  <Gap width={30} />
                                                  <i className="fa fa-times fa-2x"></i>
                                             </div>
                                        </div>
                                   </div>
                                   <Gap height={30} />
                                   <TestimonyCard name="Budi" gender="Male" age="20"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium urna. Maecenas ut enim at lectus facilisis consectetur non vitae leo. Fusce auctor eget dolor ac congue. Suspendisse gravida quis lorem dictum aliquet. Curabitur sed velit ut augue dapibus pretium. Fusce ipsum tortor, dapibus a metus eget, fringilla iaculis risus. Vivamus consequat rutrum commodo. Nullam semper libero lectus, ut varius urna aliquet eget." />
                                   <Gap height={30} />
                                   <TestimonyCard name="Andi" gender="Male" age="20" leftSideImage
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium urna. Maecenas ut enim at lectus facilisis consectetur non vitae leo. Fusce auctor eget dolor ac congue. Suspendisse gravida quis lorem dictum aliquet. Curabitur sed velit ut augue dapibus pretium. Fusce ipsum tortor, dapibus a metus eget, fringilla iaculis risus. Vivamus consequat rutrum commodo. Nullam semper libero lectus, ut varius urna aliquet eget." />
                                   <Gap height={30} />
                                   <TestimonyCard name="Rini" gender="Female" age="20"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium urna. Maecenas ut enim at lectus facilisis consectetur non vitae leo. Fusce auctor eget dolor ac congue. Suspendisse gravida quis lorem dictum aliquet. Curabitur sed velit ut augue dapibus pretium. Fusce ipsum tortor, dapibus a metus eget, fringilla iaculis risus. Vivamus consequat rutrum commodo. Nullam semper libero lectus, ut varius urna aliquet eget." />
                                   <Gap height={30} />
                                   <TestimonyCard name="Toni" gender="Male" age="20" leftSideImage
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium urna. Maecenas ut enim at lectus facilisis consectetur non vitae leo. Fusce auctor eget dolor ac congue. Suspendisse gravida quis lorem dictum aliquet. Curabitur sed velit ut augue dapibus pretium. Fusce ipsum tortor, dapibus a metus eget, fringilla iaculis risus. Vivamus consequat rutrum commodo. Nullam semper libero lectus, ut varius urna aliquet eget." />
                              </div>
                         </div>
                    </div>
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

export default Testimonies;
