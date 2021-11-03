import { Fragment, useState } from "react";
import { Gap, Button } from "../../components/atoms";
import "./DesignerOrderList.scss";

const DesignerOrderList = () => {

     const [status, setStatus] = useState(1);

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
                         <div className="card shadow-sm" style={{ borderRadius: "20px" }}>
                              <div className="card-body my-4">
                                   <div className="table-responsive">
                                        <table className="table table-hover">
                                             <thead className="bgBlue1 text-white">
                                                  <tr>
                                                       <th scope="col">ID</th>
                                                       <th scope="col">Requestor</th>
                                                       <th scope="col">Created At</th>
                                                       <th scope="col">Expected Deadline</th>
                                                       <th scope="col">Action</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  <tr>
                                                       <td>123</td>
                                                       <td>A</td>
                                                       <td>129120192</td>
                                                       <td>12121212</td>
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
                                             </tbody>
                                        </table>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default DesignerOrderList
