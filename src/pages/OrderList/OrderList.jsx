import { useEffect } from "react";
import { Fragment } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import Swal from "sweetalert2";
import { Button, Gap } from "../../components/atoms";
import { TransactionItem } from "../../components/molecules";
import "./OrderList.scss";

const OrderList = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const [section, setSection] = useState(1);
     const [orders, setOrders] = useState(null);
     const history = useHistory();


     const handleChangeToOnGoing = () => {
          setSection(1);
     }

     const handleChangeToCompleted = () => {
          setSection(2);
     }

     const fetchOrders = async (token) => {
          const apiFetch = await fetch(urlAPI + `getorders?token=${token}`, {
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
               fetchOrders(localStorage.getItem('token'));
          }

     }, [history]);

     return (
          <Fragment>
               <div className="cOrderList">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Your Order</h1>
                         <Gap height={40} />
                         <div className="text-center">
                              <div className="btn-group" role="group">
                                   <Button type={section === 2 ? 1 : 2} onClick={handleChangeToOnGoing}>
                                        <h4 className="my-3 mx-4">Ongoing</h4>
                                   </Button>
                                   <Button type={section === 2 ? 2 : 1} onClick={handleChangeToCompleted}>
                                        <h4 className="my-3 mx-4">Completed</h4>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cOrderListContent">
                    <div className="container-fluid">
                         {
                              (orders && orders.length > 0) ? orders.map(order => {
                                   return (
                                        <TransactionItem designer={order.designer_name} image={order.product_image} packageName={order.package_name} price={order.price} productName={order.product_name}
                                             quantity={order.quantity} status={false} />
                                   )
                              })
                                   : null
                         }
                    </div>
               </div>
          </Fragment>
     )
}

export default OrderList
