import { Fragment, useState, useEffect } from "react"
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import { Sample, Send } from "../../assets";
import { Gap, Button, Input } from "../../components/atoms";
import "./ServiceDetail.scss";

const ServiceDetail = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const history = useHistory();
     const { id } = useParams();
     const [isLoading, setIsLoading] = useState(false);

     const [products, setProducts] = useState(null);
     const [designers, setDesigners] = useState(null);

     const [designerId, setDesignerId] = useState(null);
     const [errDesignerId, setErrDesignerId] = useState(null);
     const [productPackageId, setProductPackageId] = useState(null);
     const [errProductPackageId, setErrProductPackageId] = useState(null);
     const [requestFileLink, setRequestFileLink] = useState(null);
     const [errRequestFileLink, setErrRequestFileLink] = useState(null);
     const [quantity, setQuantity] = useState(null);
     const [errQuantity, setErrQuantity] = useState(null);
     const [notes, setNotes] = useState(null);
     const [errNotes, setErrNotes] = useState(null);
     const [deadline, setDeadline] = useState(null);
     const [errDeadline, setErrDeadline] = useState(null);

     const fetchProducts = async () => {
          const apiFetch = await fetch(urlAPI + `product/${id}`, {
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

     const fetchDesigners = async () => {
          const apiFetch = await fetch(urlAPI + `finddesignerbyproduct/${id}`, {
               method: 'GET',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.success) {
               setDesigners(res.designers);
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     useEffect(() => {
          if (id) {
               fetchProducts();
               fetchDesigners();
          }
     }, []);

     const handleSubmit = () => {

          let pass = true;
          if (!productPackageId) {
               pass = false;
               setErrProductPackageId("Please select package");
          }
          if (!designerId) {
               pass = false;
               setErrDesignerId("Please select preferred designer");
          }
          if (!quantity) {
               pass = false;
               setErrQuantity("Please fill quantity");
          }
          if (!deadline) {
               pass = false;
               setErrDeadline("Please fill deadline");
          }
          if (!requestFileLink) {
               pass = false;
               setErrRequestFileLink("Please fill request file link");
          }

          if (pass) {
               addToCartAPI().then((res) => {
                    if (res) {
                         Swal.fire({ icon: 'success', title: 'success', text: "Order successfully added to your cart", showConfirmButton: true, confirmButtonColor: "#0F70B7" })
                              .then(() => {
                                   history.push('/cart');
                              });
                    } else {
                         setIsLoading(false);
                    }
               });
          }
     }

     const addToCartAPI = async () => {
          setIsLoading(true);

          const apiFetch = await fetch(urlAPI + `savecart?package_id=${productPackageId}&designer_id=${designerId}&request_file_link=${requestFileLink}&quantity=${quantity}&notes=${notes}&deadline=${deadline}&token=${localStorage.getItem('token')}`, {
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
               <div className="cServiceDetailHeader">
                    <div className="container-fluid">
                         <div className="row align-items-center justify-content-between">
                              {
                                   products ?
                                        <Fragment>
                                             <div className="col-lg-5">
                                                  <img src={products[0].image ? products[0].image : Sample} alt="serviceDetail" className="w-100" />
                                             </div>
                                             <div className="col-lg-7 ps-lg-5 text-white">
                                                  <h1 className="title">{products[0].product_name}</h1>
                                                  <Gap height={15} />
                                                  <p className="paragraph m-0">{products[0].product_desc}</p>
                                             </div>
                                        </Fragment>
                                        : <div className="col-12 text-center">
                                             <h5 className="text-white">Please wait...</h5>
                                        </div>
                              }
                         </div>
                    </div>
               </div>
               <div className="cServiceDetailPackage">
                    <div className="container-fluid">
                         <h1 className="title text-center textBlue1">Available Package</h1>
                         <Gap height={60} />
                         <div className="row">
                              {
                                   products && products.map(product => {
                                        return (

                                             <div className="col-lg-6" key={product.product_package_id}>
                                                  <div className="cCardPackage border">
                                                       <div className="cCardPackageHeader bgBlue1">
                                                            <h1 className="heading2 text-center text-white">{product.package_name}</h1>
                                                       </div>
                                                       <div className="card-body p-lg-5 textBlue2">
                                                            <h1 className="heading1 text-center">Rp {product.price}/Design</h1>
                                                            <Gap height={30} />
                                                            <h4 className="subHeading2 fw-normal">
                                                                 <i className="fa fa-star"></i> {product.package_description}
                                                            </h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        )
                                   })
                              }
                         </div>
                    </div>
               </div>
               <div className="cOrderToCart">
                    <div className="container-fluid">
                         {
                              localStorage.getItem('token') && products ?
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
                                                       <div className="row align-items-center">
                                                            <label htmlFor="productPackageId" className="col-lg-4">
                                                                 <h1 class="paragraph fw-bold">Package</h1>
                                                            </label>
                                                            <div className="col-lg-8">
                                                                 <select className={"form-select cFormInput" + (errProductPackageId ? ' is-invalid' : '')} id="productPackageId"
                                                                      onChange={(e) => { setProductPackageId(e.target.value); setErrProductPackageId(null) }} value={productPackageId}>
                                                                      <option value="">Choose...</option>
                                                                      {
                                                                           products && products.map(product => {
                                                                                return (
                                                                                     <option value={product.product_package_id}>{product.package_name}</option>
                                                                                )
                                                                           })
                                                                      }
                                                                 </select>
                                                                 {
                                                                      errProductPackageId &&
                                                                      <small className="text-danger">{errProductPackageId}</small>
                                                                 }
                                                            </div>
                                                       </div>
                                                       <Gap height={30} />
                                                       <div className="row align-items-center">
                                                            <label htmlFor="productPackageId" className="col-lg-4">
                                                                 <h1 class="paragraph fw-bold">Preferred Designer</h1>
                                                            </label>
                                                            <div className="col-lg-8">
                                                                 <select className={"form-select cFormInput" + (errDesignerId ? ' is-invalid' : '')} id="designerId"
                                                                      onChange={(e) => { setDesignerId(e.target.value); setErrDesignerId(null) }} value={designerId}>
                                                                      <option value="">Choose...</option>
                                                                      {
                                                                           designers && designers.map(designer => {
                                                                                return (
                                                                                     <option value={designer.designer_id}>{designer.name}</option>
                                                                                )
                                                                           })
                                                                      }
                                                                 </select>
                                                                 {
                                                                      errDesignerId &&
                                                                      <small className="text-danger">{errDesignerId}</small>
                                                                 }
                                                            </div>
                                                       </div>
                                                       <Gap height={30} />
                                                       <Input label="Quantity" id="quantity" name="quantity" type="number" min={1} placeholder="Input your quantity here"
                                                            onChange={(e) => { setQuantity(e.target.value); setErrQuantity(null) }} error={errQuantity} value={quantity} />
                                                       <Gap height={30} />
                                                       <Input label="Deadline" id="deadline" name="deadline" type="date" placeholder="Input deadline"
                                                            onChange={(e) => { setDeadline(e.target.value); setErrDeadline(null) }} error={errDeadline} value={deadline} />
                                                       <Gap height={30} />
                                                       <Input label="Request File Link" id="requestFileLink" name="requestFileLink" type="text" placeholder="Input file link"
                                                            onChange={(e) => { setRequestFileLink(e.target.value); setErrRequestFileLink(null) }} error={errRequestFileLink} value={requestFileLink} />
                                                       <Gap height={10} />
                                                       <Button type={1}>
                                                            <h5 className="paragraph textBlue1 my-1">Download request file template</h5>
                                                       </Button>
                                                       <Gap height={30} />
                                                       <Input label="Notes" id="notes" name="notes" type="text" placeholder="Input your notes here"
                                                            onChange={(e) => { setNotes(e.target.value); setErrNotes(null) }} error={errNotes} value={notes} />
                                                       <Gap height={40} />
                                                       <Button isFull type={2} onClick={handleSubmit} isLoading={isLoading}>
                                                            <h5 className="subHeading3 texBlue1">Add to Cart</h5>
                                                       </Button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   : <h1 className="heading2 textBlue1 text-center">Please login first before order</h1>
                         }
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
