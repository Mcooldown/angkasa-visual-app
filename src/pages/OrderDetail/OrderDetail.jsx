import "./OrderDetail.scss";
import { Fragment, useState } from 'react';
import { Gap, Button, Loader } from "../../components/atoms";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory, useParams } from "react-router";
import { OrderItem } from "../../components/molecules";

const OrderDetail = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const [headerOrder, setHeaderOrder] = useState(null);
     const [detailOrder, setDetailOrder] = useState(null);
     const [amount, setAmount] = useState(null);
     const { id } = useParams();
     const history = useHistory();

     const fetchOrderItems = async (token) => {
          const apiFetch = await fetch(urlAPI + `getorderbyorderid/${id}?token=${token}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();
          if (res.success) {
               setHeaderOrder(res.headerOrder);
               setDetailOrder(res.detailOrder);
               setAmount(res.amount);
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
               fetchOrderItems(localStorage.getItem('token'));
          }
     }, []);

     const handleFinish = () => {
          Swal.fire({ icon: "success", title: "Order Finished", confirmButtonColor: "#0F70B7" })
               .then(() => {
                    history.push('/orders');
               })
     }

     return (
          <Fragment>
               <div className="cOrderDetailHeader">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Order Detail</h1>
                         <Gap height={60} />
                    </div>
               </div>
               <div className="cOrderDetailContent">
                    <div className="container-fluid">
                         <Gap height={30} />
                         {
                              detailOrder ?
                                   <Fragment>
                                        {
                                             detailOrder.length > 0 ? detailOrder.map((orderItem) => {
                                                  return (
                                                       <OrderItem key={orderItem.id} id={orderItem.id} image={orderItem.product_image} notes={orderItem.notes} packageName={orderItem.package_name}
                                                            preferredDesigner={orderItem.designer_name} price={new Intl.NumberFormat('ban-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 1 }).format(orderItem.price)} productName={orderItem.product_name} quantity={orderItem.quantity}
                                                            requestFileLink={orderItem.request_file_link} />
                                                  )
                                             }) : <p className="subHeading2 text-center text-white">No order items</p>
                                        }
                                   </Fragment>
                                   : <Loader isWhite={true} />
                         }
                    </div>
               </div>
               {
                    (headerOrder && amount) ?
                         <Fragment>
                              <div className="cOrderHeaderHeader"></div>
                              <div className="cOrderHeaderContent">
                                   <div className="container-fluid">
                                        <div className="row justify-content-center">
                                             <div className="col-lg-6 col-md-8">
                                                  <div className="card shadow-sm" style={{ borderRadius: "20px" }}>
                                                       <div className="card-body text-center">
                                                            <Gap height={20} />
                                                            <h4 className="subHeading2">Payment Detail</h4>
                                                            <Gap height={20} />
                                                            <p className="paragraph">Total Price: <span className="fw-bold">{new Intl.NumberFormat('ban-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 1 }).format(amount)}</span></p>

                                                            <p className="paragraph">Bank Account: <span className="fw-bold">{headerOrder.bank_name}</span></p>
                                                            <p className="paragraph">Account Name: <span className="fw-bold">{headerOrder.account_name}</span></p>
                                                            <p className="paragraph">Account Number: <span className="fw-bold">{headerOrder.account_number}</span></p>
                                                            <p className="paragraph">Payment Proof: <span className="fw-bold">{headerOrder.payment_proof}</span></p>
                                                            <Gap height={20} />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <Gap height={80} />
                                        <Button isFull type={2} onClick={handleFinish}>
                                             <h5 className="subHeading3 texBlue1">FINISH</h5>
                                        </Button>
                                   </div>
                              </div>
                         </Fragment>
                         : null
               }
          </Fragment>
     )
}

export default OrderDetail
