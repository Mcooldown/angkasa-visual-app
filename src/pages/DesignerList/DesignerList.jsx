import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { Gap, Button, Loader } from "../../components/atoms";
import "./DesignerList.scss";

const DesignerList = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const history = useHistory();
     const [status, setStatus] = useState(1);
     const [designers, setDesigners] = useState(null);
     const [products, setProducts] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

     const [designerId, setDesignerId] = useState('');
     const [productId, setProductId] = useState(0);
     const [errProductId, setErrProductId] = useState(null);

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

     const fetchDesigners = async (token) => {
          const apiFetch = await fetch(urlAPI + `getdesigners?token=${token}`, {
               method: 'POST',
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

     const updateDesignerToAPI = async () => {
          const apiFetch = await fetch(urlAPI + `updatedesigner?token=${localStorage.getItem('token')}&is_approved=1&designer_id=${designerId}&product_id=${productId}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();
          if (res.success) {
               fetchDesigners(localStorage.getItem('token'));
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     const handleAccept = () => {
          if (!productId) {
               setErrProductId("Please select product");
          } else {
               updateDesignerToAPI().then(() => {
                    Swal.fire({ icon: 'success', 'title': 'Success', confirmButtonColor: "#0F70B7" })
                         .then(() => {
                              fetchDesigners();
                         })
               })
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
               fetchProducts();
               fetchDesigners(localStorage.getItem('token')).then(() => setIsLoading(false));
          }
     }, [status]);

     return (
          <Fragment>
               <div className="cDesignerListHeader">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Designer List</h1>
                         <Gap height={60} />
                         <div className="text-center">
                              <div className="btn-group" role="group">
                                   <Button type={status === 1 ? 2 : 1} onClick={() => setStatus(1)}>
                                        <h4 className="my-3 mx-4">Pending</h4>
                                   </Button>
                                   <Button type={status === 2 ? 2 : 1} onClick={() => setStatus(2)}>
                                        <h4 className="my-3 mx-4">Confirmed</h4>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
               <Gap height={40} />
               <div className="cDesignerListContent">
                    <div className="container-fluid">
                         {
                              (!isLoading && designers) ?

                                   <div className="card shadow-sm" style={{ borderRadius: "20px" }}>
                                        <div className="card-body my-4">
                                             <div className="table-responsive">
                                                  <table className="table table-hover">
                                                       <thead className="bgBlue1 text-white">
                                                            <tr>
                                                                 <th scope="col">Designer ID</th>
                                                                 <th scope="col">Name</th>
                                                                 <th scope="col">Skills</th>
                                                                 <th scope="col">Bank Account</th>
                                                                 <th scope="col">Account Number</th>
                                                                 <th scope="col">Resume</th>
                                                                 <th scope="col">Portfolio</th>
                                                                 <th scope="col">Action</th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            {
                                                                 designers.length > 0 && designers.map(designer => {

                                                                      if ((status === 1 && designer.is_approved === 0) || (status === 2 && designer.is_approved === 1)) {
                                                                           return (
                                                                                <tr>
                                                                                     <td>{designer.id}</td>
                                                                                     <td>{designer.name}</td>
                                                                                     <td>{designer.skills}</td>
                                                                                     <td>{designer.bank_account}</td>
                                                                                     <td>{designer.account_number}</td>
                                                                                     <td>{designer.resume}</td>
                                                                                     <td>{designer.portofolio_link}</td>
                                                                                     <td>
                                                                                          {
                                                                                               designerId === designer.id ?
                                                                                                    < div className="d-flex mt-3">
                                                                                                         <Button type={1} onClick={() => setDesignerId(0)}>Cancel</Button>
                                                                                                         <Gap width={10} />
                                                                                                         <div>
                                                                                                              <select className={"form-select " + (errProductId ? 'is-invalid' : '')} name="productId" id="productId" onChange={(e) => { setProductId(e.target.value); setErrProductId(null) }}>
                                                                                                                   <option value="">Choose...</option>
                                                                                                                   {
                                                                                                                        products && products.map(product => {
                                                                                                                             return (
                                                                                                                                  <option value={product.id}>{product.product_name}</option>
                                                                                                                             )
                                                                                                                        })
                                                                                                                   }

                                                                                                              </select>
                                                                                                              {
                                                                                                                   errProductId &&
                                                                                                                   <small className="text-danger">{errProductId}</small>
                                                                                                              }
                                                                                                         </div>
                                                                                                         <Gap width={10} />
                                                                                                         <Button type={2} onClick={handleAccept}>
                                                                                                              <i className="fa fa-check text-white"></i>
                                                                                                         </Button>
                                                                                                    </div> :
                                                                                                    <div className="d-inline-flex" role="group">
                                                                                                         <Button type={2} onClick={() => setDesignerId(designer.id)}>
                                                                                                              <i className="fa fa-plus text-white"></i>
                                                                                                         </Button>
                                                                                                    </div>
                                                                                          }
                                                                                     </td>
                                                                                </tr>
                                                                           );
                                                                      } else return null;
                                                                 })
                                                            }
                                                       </tbody>
                                                  </table>
                                             </div>
                                        </div>
                                   </div>
                                   : <Loader isWhite={true} />
                         }
                    </div>
               </div>
          </Fragment >
     )
}

export default DesignerList
