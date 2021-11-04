import { Fragment, useState } from "react";
import { Gap, Button, Loader } from "../../components/atoms";
import "./OurServices.scss";
import OwlCarousel from "react-owl-carousel2";
import { ServiceCard } from "../../components/molecules";
import { GraphicDesign, Send, TechDesign, VideoAnimation } from "../../assets";
import { useEffect } from "react";
import { useHistory } from "react-router";

const OurServices = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const [products, setProducts] = useState(null);
     const history = useHistory();
     const [isLoading, setIsLoading] = useState(true);

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

     const fetchProducts = async () => {
          const apiFetch = await fetch(urlAPI + `products`, {
               method: 'GET',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.success) {
               setProducts(res.product);
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     useEffect(() => {
          setIsLoading(true)
          window.scrollTo(0, 0);
          fetchProducts().then(res => {
               if (res) setIsLoading(false);
          });
     }, []);

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
                                             <img src={GraphicDesign} className="w-100" alt="" />
                                             <h1 className="heading2 textBlue1">GRAPHIC DESIGN</h1>
                                        </div>
                                        <div className="col-md-4 col-10">
                                             <img src={VideoAnimation} className="w-100" alt="" />
                                             <h1 className="heading2 textBlue1">VIDEO &#38; ANIMATION</h1>
                                        </div>
                                        <div className="col-md-4 col-10">
                                             <img src={TechDesign} className="w-100" alt="" />
                                             <h1 className="heading2 textBlue1">TECH DESIGN</h1>
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
                    {
                         (!isLoading && products) ?
                              <OwlCarousel options={optionsCarousel}>
                                   {
                                        products.length > 0 ? products.map(product => {
                                             if (product.product_category === 'Graphic Design and Editing') {
                                                  return (
                                                       <ServiceCard key={product.id} title={product.product_name} description={product.product_desc} image={product.product_image} onClick={() => history.push('/services/' + product.id)} />
                                                  )
                                             } else return null;
                                        }) : null
                                   }
                              </OwlCarousel>
                              : <Loader isWhite={false} />
                    }
               </div>
               <div className="cVideoAnimation">
                    <div className="container-fluid">
                         <h1 className="cTitleCarousel text-white">Video &#38; Animation</h1>
                    </div>
                    <Gap height={50} />
                    {
                         (!isLoading && products) ?
                              <OwlCarousel options={optionsCarousel}>
                                   {
                                        products.length > 0 ? products.map(product => {
                                             if (product.product_category === 'Video and Animation') {
                                                  return (
                                                       <ServiceCard key={product.id} title={product.product_name} description={product.product_desc} image={product.product_image} onClick={() => history.push('/services/' + product.id)} />
                                                  )
                                             } else return null;
                                        }) : null
                                   }
                              </OwlCarousel> : <Loader isWhite={false} />
                    }
               </div>
               <div className="cTechDesign">
                    <div className="container-fluid">
                         <h1 className="cTitleCarousel text-white text-end">Tech Design</h1>
                    </div>
                    <Gap height={50} />
                    {
                         (!isLoading && products) ?
                              <OwlCarousel options={optionsCarousel}>
                                   {
                                        products ? products.map(product => {
                                             if (product.product_category === 'Tech Design') {
                                                  return (
                                                       <ServiceCard key={product.id} title={product.product_name} description={product.product_desc} image={product.product_image} onClick={() => history.push('/services/' + product.id)} />
                                                  )
                                             } else return null;
                                        }) : null
                                   }
                              </OwlCarousel> : <Loader isWhite={false} />
                    }
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
