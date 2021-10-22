import { Fragment } from "react"
import { Sample, Send } from "../../assets";
import { Gap, Button, Input, Select } from "../../components/atoms";
import { WorkCard } from "../../components/molecules";
import "./ServiceDetail.scss";
import OwlCarousel from 'react-owl-carousel2';

const ServiceDetail = () => {

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
               <div className="cServiceDetailHeader">
                    <div className="container-fluid">
                         <div className="row align-items-center justify-content-between">
                              <div className="col-lg-5">
                                   <img src={Sample} alt="serviceDetail" className="w-100" />
                              </div>
                              <div className="col-lg-7 ps-lg-5 text-white">
                                   <h1 className="title">Poster Design</h1>
                                   <p className="paragraph">Penjelasan Service</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cServiceDetailPackage">
                    <div className="container-fluid">
                         <h1 className="title text-center textBlue1">Available Package</h1>
                         <Gap height={60} />
                         <div className="row">
                              <div className="col-lg-6">
                                   <div className="cCardPackage border">
                                        <div className="cCardPackageHeader bgBlue2">
                                             <h1 className="heading2 text-center text-white">Sky Package</h1>
                                        </div>
                                        <div className="card-body p-lg-5 textBlue2">
                                             <h1 className="heading1">Rp. 75.000/Poster</h1>
                                             <Gap height={30} />
                                             <ul className="list-unstyled">
                                                  <li className="d-flex">
                                                       <i className="fa fa-star fa-2x"></i>
                                                       <Gap width={20} />
                                                       <h1 className="subHeading2 fw-normal">2-3 days process</h1>
                                                  </li>
                                                  <Gap height={10} />
                                                  <li className="d-flex">
                                                       <i className="fa fa-star fa-2x"></i>
                                                       <Gap width={20} />
                                                       <h1 className="subHeading2 fw-normal">PNG/JPEG/ PDF file</h1>
                                                  </li>
                                                  <Gap height={10} />
                                                  <li className="d-flex">
                                                       <i className="fa fa-star fa-2x"></i>
                                                       <Gap width={20} />
                                                       <h1 className="subHeading2 fw-normal">Max Revision 3 times</h1>
                                                  </li>
                                                  <Gap height={10} />
                                                  <li className="d-flex">
                                                       <i className="fa fa-star fa-2x"></i>
                                                       <Gap width={20} />
                                                       <h1 className="subHeading2 fw-normal">Free consultation with designer</h1>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-6">
                                   <div className="cCardPackage border">
                                        <div className="cCardPackageHeader bgBlue1">
                                             <h1 className="heading2 text-center text-white">Space Package</h1>
                                        </div>
                                        <div className="card-body p-lg-5 textBlue2">
                                             <h1 className="heading1">Rp. 150.000/Poster</h1>
                                             <Gap height={30} />
                                             <ul className="list-unstyled">
                                                  <li className="d-flex">
                                                       <i className="fa fa-star fa-2x"></i>
                                                       <Gap width={20} />
                                                       <h1 className="subHeading2 fw-normal">1-2 days process</h1>
                                                  </li>
                                                  <Gap height={10} />
                                                  <li className="d-flex">
                                                       <i className="fa fa-star fa-2x"></i>
                                                       <Gap width={20} />
                                                       <h1 className="subHeading2 fw-normal">PNG/JPEG/ PDF file</h1>
                                                  </li>
                                                  <Gap height={10} />
                                                  <li className="d-flex">
                                                       <i className="fa fa-star fa-2x"></i>
                                                       <Gap width={20} />
                                                       <h1 className="subHeading2 fw-normal">CDR/EPS/AI Master File</h1>
                                                  </li>
                                                  <Gap height={10} />
                                                  <li className="d-flex">
                                                       <i className="fa fa-star fa-2x"></i>
                                                       <Gap width={20} />
                                                       <h1 className="subHeading2 fw-normal">Max Revision 3 times</h1>
                                                  </li>
                                                  <Gap height={10} />
                                                  <li className="d-flex">
                                                       <i className="fa fa-star fa-2x"></i>
                                                       <Gap width={20} />
                                                       <h1 className="subHeading2 fw-normal">Free consultation with designer</h1>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cPortfolioService">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Our Portfolio</h1>
                         <Gap height={40} />
                         <p className="paragraph textBlue1 text-center">
                              Here's our recent work on Poster Design
                         </p>
                    </div>
                    <Gap height={30} />
                    <OwlCarousel options={optionsCarousel}>
                         <WorkCard key={1} title="Work 1" description="halo halo binusian halo halo binusian halo halo binusian" />
                    </OwlCarousel>
               </div>
               <div className="cOrderToCart">
                    <div className="container-fluid">
                         <div className="row align-items-center justify-content-between">
                              <div className="col-lg-5 text-end my-3">
                                   <h1 className="heading1 textBlue1">Drop Your Order Here!</h1>
                                   <Gap height={10} />
                                   <p className="paragraph textBlue1">
                                        Before ordering, please carefully read our order guidelines below:
                                   </p>
                                   <Gap height={10} />
                                   <Button type={2}>
                                        <h5 className="m-1">Order Guidelines</h5>
                                   </Button>
                              </div>
                              <div className="col-lg-7 ps-lg-5 my-3">
                                   <div className="cCardContact">
                                        <div className="card-body">

                                             {/* Form */}
                                             <Input label="Name" id="name" name="name" type="text" placeholder="Input your name here" required />
                                             <Gap height={30} />
                                             <Input label="Email" id="email" name="email" type="text" placeholder="Input your email here" required />
                                             <Gap height={30} />
                                             <Select label="Poster Type" id="posterType" name="posterType" options={["1", "2"]} required />
                                             <Gap height={30} />
                                             <Select label="Size (Dimension)" id="posterSize" name="posterSize" options={["1", "2"]} required />
                                             <Gap height={30} />
                                             <Select label="Package Offer" id="packageOffer" name="packageOffer" options={["Sky Package", "Space Package"]} required />
                                             <Gap height={30} />
                                             <div className="row align-items-center">
                                                  <label htmlFor="posterBrief" className="col-lg-4"><h1 class="paragraph fw-bold">Poster Brief</h1></label>
                                                  <div className="col-lg-8">
                                                       <Button type={1}>
                                                            <h5 className="paragraph textBlue1 m-1">Browse</h5>
                                                       </Button>
                                                  </div>
                                             </div>
                                             <Gap height={30} />
                                             <Input label="Additional Note" id="additionalNote" name="additionalNote" type="text" placeholder="Input your additional note here" required />
                                             <Gap height={40} />
                                             <Button isFull type={2}>
                                                  <h5 className="subHeading3 texBlue1">Add to Cart</h5>
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cLeaveMessage">
                    <div className="container-fluid">
                         <div className="d-inline-flex align-items-center">
                              <div>
                                   <h1 className="title textBlue1">Didn't find what you need?</h1>
                                   <h1 className="subHeading2 fw-normal textBlue2">If you can’t find offer fitting to your budget feel free to leave us a message!
                                        We’ll be more than glad to find designers willing to do your project for you!</h1>
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

export default ServiceDetail
