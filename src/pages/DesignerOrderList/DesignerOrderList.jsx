import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { Gap, Button, Loader } from "../../components/atoms";
import "./DesignerOrderList.scss";

const DesignerOrderList = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const history = useHistory();
     const [status, setStatus] = useState(0);
     const [orders, setOrders] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

     const fetchOrders = async (token, status) => {
          const apiFetch = await fetch(urlAPI + `getdesignerorders/${0}?token=${token}`, {
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
                    if (res) {
                         setIsLoading(false)
                    };
               });
          }

     }, [history, status]);

     return (
          <Fragment>
               <div className="cDesignerOrderListHeader">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Order List</h1>
                         <Gap height={60} />
                         <div className="text-center">
                              <div className="btn-group" role="group">
                                   <Button type={status === 1 ? 2 : 1} onClick={() => setStatus(1)}>
                                        <h4 className="my-3 mx-4">Pending</h4>
                                   </Button>
                                   <Button type={status === 2 ? 2 : 1} onClick={() => setStatus(2)}>
                                        <h4 className="my-3 mx-4">Ongoing</h4>
                                   </Button>
                                   <Button type={status === 3 ? 2 : 1} onClick={() => setStatus(3)}>
                                        <h4 className="my-3 mx-4">Revision</h4>
                                   </Button>
                                   <Button type={status === 4 ? 2 : 1} onClick={() => setStatus(4)}>
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
                                                                      <tr>
                                                                           <th scope="col">ID</th>
                                                                           <th scope="col">Requestor Name</th>
                                                                           <th scope="col">Requestor Phone Number</th>
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
                                                                                          <td>{order.requestor_phone_number}</td>
                                                                                          <td>{order.requestor_email}</td>
                                                                                          <td>{order.created_at}</td>
                                                                                          <td>{order.expected_deadline}</td>
                                                                                          <td>
                                                                                               <div className="d-inline-flex" role="group">
                                                                                                    <Button type={2} onClick={() => { }}>
                                                                                                         <i className="fa fa-eye text-white"></i>
                                                                                                    </Button>
                                                                                                    <Gap width={20} />
                                                                                                    <Button type={2} onClick={() => { }}>
                                                                                                         <i class="fas fa-comments"></i>
                                                                                                    </Button>
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
          </Fragment>
     )
}

export default DesignerOrderList
