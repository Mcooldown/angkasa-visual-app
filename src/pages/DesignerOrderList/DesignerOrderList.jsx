import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { RegisterSuccess } from "../../assets";
import { Gap, Button, Loader, Input } from "../../components/atoms";
import "./DesignerOrderList.scss";

const DesignerOrderList = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const history = useHistory();
     const [status, setStatus] = useState(0);
     const [orders, setOrders] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const [orderId, setOrderId] = useState(0);
     const [order, setOrder] = useState(null);
     const [submitDesign, setSubmitDesign] = useState(null);
     const [errSubmitDesign, setErrSubmitDesign] = useState('');
     const [sectionModal, setSectionModal] = useState(1);
     const [buttonLoading, setButtonLoading] = useState(false);

     const fetchSelectedOrder = async (id) => {
          setButtonLoading(false);
          const apiFetch = await fetch(urlAPI + `findorderdesignerbyid/${id}?token=${localStorage.getItem('token')}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.success) {
               setOrder(res.detailOrder);
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     const fetchOrders = async (token) => {

          let fetchLink = "";
          if (status === -1) {
               fetchLink = urlAPI + `getorderwithoutdesigner?token=${token}`;
          } else {
               fetchLink = urlAPI + `getdesignerorders/${status}?token=${token}`;
          }

          const apiFetch = await fetch(fetchLink, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();
          if (res.success) {
               setOrders(res.detailOrder);
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     useEffect(() => {
          window.scrollTo(0, 0);
          if (!localStorage.getItem('token')) {
               Swal.fire({ icon: 'error', title: 'error', text: 'Please login first', confirmButtonColor: "#0F70B7" })
                    .then(() => {
                         history.push('/');
                    });
          } else {
               setIsLoading(true);
               fetchOrders(localStorage.getItem('token')).then((res) => {
                    if (res) {
                         setIsLoading(false)
                    };
               });
          }

     }, [history, status]);

     const updateDesignerOrderToAPI = async (orderId, status, notes, resultDesign) => {
          const apiFetch = await fetch(urlAPI + `updatedetailorders/${orderId}?token=${localStorage.getItem('token')}&status=${status}&notes=${notes}&result_design=${resultDesign}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.success) {
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     const updateAssignedDesignerToAPI = async (orderId, designerId) => {
          const apiFetch = await fetch(urlAPI + `updateorderdesigner/${orderId}?token=${localStorage.getItem('token')}&designer_id=${designerId}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.success) {
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     const handleTakeOrder = (orderId) => {

          setButtonLoading(true);
          updateAssignedDesignerToAPI(orderId, localStorage.getItem('designerId'))
               .then((res) => {
                    setButtonLoading(false);
                    fetchOrders(localStorage.getItem('token'));
                    if (res) {
                         Swal.fire({ icon: "success", title: "Success", text: "Order successfully taken", confirmButtonColor: "#0F70B7" })
                    } else {
                         Swal.fire({ icon: "error", title: "Error", text: "Error while taking the order", confirmButtonColor: "#0F70B7" })
                    }
               });
     }

     const handleDeclineOrder = () => {
          setButtonLoading(true);
          updateAssignedDesignerToAPI(orderId, '')
               .then((res) => {
                    setButtonLoading(false);
                    fetchOrders(localStorage.getItem('token'));
                    if (res) {
                         setSectionModal(2);
                    } else {
                         Swal.fire({ icon: "error", title: "Error", text: "Error while declining the order", confirmButtonColor: "#0F70B7" })
                    }
               });
     }

     const handleAcceptOrder = (orderId) => {

          setButtonLoading(true);
          updateDesignerOrderToAPI(orderId, 1, "", "")
               .then((res) => {
                    setButtonLoading(false);
                    fetchOrders(localStorage.getItem('token'));
                    if (res) {
                         setSectionModal(2);
                    } else {
                         Swal.fire({ icon: "error", title: "Error", text: "Error while accepting the order", confirmButtonColor: "#0F70B7" })
                    }
               })
     }

     const handleSubmitDesign = (orderId) => {

          if (!submitDesign) setErrSubmitDesign("Submit design link must be filled");
          else {
               setButtonLoading(true);
               updateDesignerOrderToAPI(orderId, 3, "", submitDesign)
                    .then((res) => {
                         setButtonLoading(false);
                         fetchOrders(localStorage.getItem('token'));
                         if (res) {
                              setSectionModal(2);
                         } else {
                              Swal.fire({ icon: "error", title: "Error", text: "Error while submitting design", confirmButtonColor: "#0F70B7" })
                         }
                    })
          }
     }

     return (
          <Fragment>
               <div className="cDesignerOrderListHeader">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Order List</h1>
                         <Gap height={60} />
                         <div className="text-center">
                              <div className="btn-group" role="group">
                                   <Button type={status === -1 ? 2 : 1} onClick={() => setStatus(-1)}>
                                        <h4 className="my-3 mx-4">Available Orders</h4>
                                   </Button>
                                   <Button type={status === 0 ? 2 : 1} onClick={() => setStatus(0)}>
                                        <h4 className="my-3 mx-4">Pending</h4>
                                   </Button>
                                   <Button type={status === 1 ? 2 : 1} onClick={() => setStatus(1)}>
                                        <h4 className="my-3 mx-4">Ongoing</h4>
                                   </Button>
                                   <Button type={status === 2 ? 2 : 1} onClick={() => setStatus(2)}>
                                        <h4 className="my-3 mx-4">Revision</h4>
                                   </Button>
                                   <Button type={status === 3 ? 2 : 1} onClick={() => setStatus(3)}>
                                        <h4 className="my-3 mx-4">Completed</h4>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
               <Gap height={40} />
               <div className="cDesignerOrderListContent">
                    <div className="container-fluid">
                         {
                              (!isLoading && orders) ?
                                   <div className="card shadow-sm" style={{ borderRadius: "20px" }}>
                                        <div className="card-body my-4">
                                             {
                                                  orders.length > 0 ?
                                                       <div className="table-responsive">
                                                            <table className="table table-hover">
                                                                 <thead className="bgBlue1 text-white">
                                                                      <tr className="paragraph">
                                                                           <th scope="col">ID</th>
                                                                           <th scope="col">Requestor Name</th>
                                                                           <th scope="col">Requestor Email</th>
                                                                           <th scope="col">Created At</th>
                                                                           <th scope="col">Expected Deadline</th>
                                                                           <th scope="col">Action</th>
                                                                      </tr>
                                                                 </thead>
                                                                 <tbody>
                                                                      {
                                                                           orders.map(order => {
                                                                                return (
                                                                                     <tr key={order.id}>
                                                                                          <td>{order.id}</td>
                                                                                          <td>{order.requestor_name}</td>
                                                                                          <td>{order.requestor_email}</td>
                                                                                          <td>{order.created_at}</td>
                                                                                          <td>{order.expected_deadline}</td>
                                                                                          <td>
                                                                                               <div className="d-inline-flex" role="group">
                                                                                                    <Gap width={20} />
                                                                                                    {
                                                                                                         order.designer_id !== null ?
                                                                                                              <Button type={2} data-bs-toggle="modal" data-bs-target="#designerOrderModal" onClick={() => { setOrderId(order.id); fetchSelectedOrder(order.id) }}>
                                                                                                                   <i className="fa fa-eye text-white"></i>
                                                                                                              </Button>
                                                                                                              : null
                                                                                                    }
                                                                                                    {
                                                                                                         order.status === 1 && order.status === 2 ?
                                                                                                              <Fragment>
                                                                                                                   <Button type={2} onClick={() => { }}>
                                                                                                                        <i class="fas fa-comments"></i>
                                                                                                                   </Button>
                                                                                                              </Fragment>
                                                                                                              : null
                                                                                                    }
                                                                                                    {
                                                                                                         order.designer_id === null ?
                                                                                                              <Button type={2} isLoading={buttonLoading} onClick={() => handleTakeOrder(order.id)}>
                                                                                                                   <i class="fas fa-check"></i>
                                                                                                              </Button>
                                                                                                              : null
                                                                                                    }
                                                                                               </div>
                                                                                          </td>
                                                                                     </tr>

                                                                                )
                                                                           })
                                                                      }
                                                                 </tbody>
                                                            </table>
                                                       </div>
                                                       : <p className="subHeading2 text-center textBlue1">No orders</p>
                                             }
                                        </div>
                                   </div>

                                   : <Loader isWhite={true} />
                         }
                    </div>
               </div>

               <div className="modal fade" id="designerOrderModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                         <div className="modal-content cModalAuth">
                              <div className="modal-body">
                                   <Gap height={40} />
                                   <div className="d-flex justify-content-end">
                                        <button type="button" className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"
                                             onClick={() => { setOrderId(0); setSectionModal(1) }}></button>
                                   </div>
                                   <Gap height={40} />
                                   {
                                        sectionModal === 1 ?
                                             <Fragment>
                                                  <h1 className="heading2 textBlue1 text-center">
                                                       Order Detail (ID: {orderId})
                                                  </h1>
                                                  <Gap height={50} />
                                                  {
                                                       order ?
                                                            <Fragment>
                                                                 <Input label="Requestor" value={order.requestor_name} disabled />
                                                                 <Gap height={20} />
                                                                 <Input label="Created At" value={new Date(order.created_at).toLocaleString('en-US', { day: "numeric", month: "long", year: "numeric" })} disabled />
                                                                 <Gap height={20} />
                                                                 <Input label="Product Name" value={order.product_name} disabled />
                                                                 <Gap height={20} />
                                                                 <Input label="Product Package" value={order.package_name} disabled />
                                                                 <Gap height={20} />
                                                                 <Input label="Quantity" value={order.quantity} disabled />
                                                                 <Gap height={20} />
                                                                 <Input label="Request File Link" value={order.request_file_link} disabled />
                                                                 <Gap height={20} />
                                                                 <Input label="Deadline" value={new Date(order.deadline).toLocaleString('en-US', { day: "numeric", month: "long", year: "numeric" })} disabled />
                                                                 <Gap height={20} />
                                                                 <Input label="Price" value={new Intl.NumberFormat('ban-ID', { style: 'currency', currency: 'IDR' }).format(order.price)} disabled />
                                                                 <Gap height={20} />
                                                                 <Input label="Notes" value={order.notes} disabled />
                                                                 {
                                                                      order.status !== "0" ?
                                                                           <Fragment>
                                                                                <Gap height={20} />
                                                                                <Input label="Submit Design" value={submitDesign} onChange={(e) => { setSubmitDesign(e.target.value); setErrSubmitDesign('') }} error={errSubmitDesign} disabled={order.status === "3"} />
                                                                           </Fragment>
                                                                           : null
                                                                 }
                                                                 <Gap height={50} />
                                                                 {
                                                                      order.status === "0" ?
                                                                           <div className="row">
                                                                                <div className="col-6">
                                                                                     <Button isFull type={1} isLoading={buttonLoading} onClick={() => handleDeclineOrder(order.id)}>
                                                                                          <h5 className="subHeading3 my-1">Decline this Order</h5>
                                                                                     </Button>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                     <Button isFull type={2} isLoading={buttonLoading} onClick={() => handleAcceptOrder(order.id)}>
                                                                                          <h5 className="subHeading3 my-1">Accept this order</h5>
                                                                                     </Button>
                                                                                </div>
                                                                           </div>
                                                                           : (order.status !== "3") ? <Button isFull type={2} isLoading={buttonLoading} onClick={() => handleSubmitDesign(order.id)}>
                                                                                <h5 className="subHeading3 my-1">Submit Design</h5>
                                                                           </Button> : null
                                                                 }
                                                            </Fragment>
                                                            : <Loader isWhite={false} />
                                                  }
                                                  <Gap height={40} />
                                             </Fragment>
                                             : <Fragment>
                                                  <h1 className="heading2 textBlue1 text-center">
                                                       SUCCESS
                                                  </h1>
                                                  <Gap height={80} />
                                                  <div className="row justify-content-center">
                                                       <div className="col-lg-6">
                                                            <h1 class="subHeading3 textBlue1 text-center">
                                                                 Please close this popup
                                                            </h1>
                                                            <img src={RegisterSuccess} alt="registerSuccess" className="w-100" />
                                                       </div>
                                                  </div>
                                                  <Gap height={60} />
                                                  <Button isFull type={2} onClick={() => { setOrderId(0); setSectionModal(1) }} data-bs-dismiss="modal" aria-label="Close">
                                                       <h5 className="text-white subHeading3">OKAY, I GOT IT</h5>
                                                  </Button>
                                             </Fragment>
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default DesignerOrderList
