import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { Button, Gap, Loader } from "../../components/atoms";
import { TransactionItem } from "../../components/molecules";
import "./OrderList.scss";

const OrderList = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const [status, setStatus] = useState(0);
     const [orders, setOrders] = useState(null);
     const history = useHistory();
     const [isLoading, setIsLoading] = useState(true);

     const fetchOrders = async (token, status) => {
          const apiFetch = await fetch(urlAPI + `getorders/${status}?token=${token}`, {
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
               fetchOrders(localStorage.getItem('token'), status).then((res) => {
                    if (res) setIsLoading(false);
               });
          }

     }, [history, status]);

     return (
          <Fragment>
               <div className="cOrderList">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Your Order</h1>
                         <Gap height={40} />
                         <div className="text-center">
                              <div className="btn-group" role="group">
                                   <Button type={status === 0 ? 2 : 1} onClick={() => setStatus(0)}>
                                        <h4 className="my-3 mx-4">Ongoing</h4>
                                   </Button>
                                   <Button type={status === 1 ? 2 : 1} onClick={() => setStatus(1)}>
                                        <h4 className="my-3 mx-4">Completed</h4>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cOrderListContent">
                    <div className="container-fluid">
                         {
                              (!isLoading && orders) ?
                                   <Fragment>
                                        {
                                             orders.length > 0 ? orders.map(order => {
                                                  return (
                                                       <TransactionItem designer={order.designer_name} image={order.product_image} packageName={order.package_name} price={new Intl.NumberFormat('ban-ID', { style: 'currency', currency: 'IDR' }).format(order.price)} productName={order.product_name}
                                                            quantity={order.quantity} status={false} />
                                                  )
                                             })
                                                  : <p className="subHeading3 text-center text-white">No orders</p>
                                        }
                                   </Fragment>
                                   : <Loader isWhite />
                         }
                    </div>
               </div>
          </Fragment>
     )
}

export default OrderList
