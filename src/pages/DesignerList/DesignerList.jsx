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
     const [buttonLoading, setButtonLoading] = useState(false);

     const [designerId, setDesignerId] = useState('');
     const [productId, setProductId] = useState(0);
     const [errProductId, setErrProductId] = useState(null);
     const [designerProducts, setDesignerProducts] = useState(null);
     const [isAdd, setIsAdd] = useState(false);

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

     const fetchDesignerProducts = async (id) => {

          const apiFetch = await fetch(urlAPI + `getdesignerswithdetailskill/${id}?token=${localStorage.getItem('token')}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.success) {
               setDesignerProducts(res.designers);
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

     const updateDesignerToAPI = async (designerId, productId, isApprove) => {
          const apiFetch = await fetch(urlAPI + `updatedesigner?token=${localStorage.getItem('token')}&is_approved=${isApprove}&designer_id=${designerId}&product_id=${productId}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();
          if (res.success) {
               fetchDesigners(localStorage.getItem('token'));
               fetchDesignerProducts(designerId);
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     const handleUpdateDesigner = (designerId, productId, isApprove) => {
          setButtonLoading(true)
          updateDesignerToAPI(designerId, productId, isApprove).then(() => {
               setButtonLoading(false);
               Swal.fire({ icon: 'success', 'title': 'Success', confirmButtonColor: "#0F70B7" })
                    .then(() => {
                         setIsAdd(false);
                         fetchDesigners();
                    })
          })
     }

     const deleteDesignerProductToAPI = async (id) => {
          const apiFetch = await fetch(urlAPI + `deletedetailskill?id=${id}&token=${localStorage.getItem('token')}`, {
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

     const handleDeleteDesignerProduct = (id) => {

          deleteDesignerProductToAPI(id)
               .then((res) => {
                    if (res) {
                         Swal.fire({ icon: 'success', 'title': 'Success', text: "Success delete assigned product", confirmButtonColor: "#0F70B7" })
                         fetchDesignerProducts(designerId);
                    } else {
                         Swal.fire({ icon: 'error', 'title': 'Error', text: "Error while deleting assigned product", confirmButtonColor: "#0F70B7" })
                    }
               });
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
                                        <h4 className="my-3 mx-4">Not Approved</h4>
                                   </Button>
                                   <Button type={status === 2 ? 2 : 1} onClick={() => setStatus(2)}>
                                        <h4 className="my-3 mx-4">Approved</h4>
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
                                                                 <th scope="col">ID Card</th>
                                                                 <th scope="col">Bank Account</th>
                                                                 <th scope="col">Account Number</th>
                                                                 {
                                                                      status === 1 ?
                                                                           <Fragment>
                                                                                <th scope="col">Skills</th>
                                                                                <th scope="col">Resume</th>
                                                                                <th scope="col">Portfolio</th>
                                                                           </Fragment>
                                                                           : null
                                                                 }
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
                                                                                     <td>{designer.id_card}</td>
                                                                                     <td>{designer.bank_account}</td>
                                                                                     <td>{designer.account_number}</td>
                                                                                     {
                                                                                          status === 1 &&
                                                                                          <Fragment>
                                                                                               <td>{designer.skills}</td>
                                                                                               <td>{designer.resume}</td>
                                                                                               <td>{designer.portofolio_link}</td>
                                                                                          </Fragment>
                                                                                     }
                                                                                     <td>
                                                                                          <div className="d-inline-flex" role="group">
                                                                                               {
                                                                                                    designer.is_approved ?
                                                                                                         <Fragment>
                                                                                                              <Button type={2} data-bs-toggle="modal" data-bs-target="#designerModal" onClick={() => { setDesignerId(designer.id); fetchDesignerProducts(designer.id) }}>
                                                                                                                   <i className="fa fa-info text-white"></i> Assigned Products
                                                                                                              </Button>
                                                                                                              <Gap width={10} />
                                                                                                              <Button type={1} onClick={() => handleUpdateDesigner(designer.id, '', 0)}>
                                                                                                                   <i className="fa fa-times"></i> Reject
                                                                                                              </Button>
                                                                                                         </Fragment>
                                                                                                         :
                                                                                                         <Button type={2} onClick={() => handleUpdateDesigner(designer.id, '', 1)}>
                                                                                                              <i className="fa fa-check text-white"></i> Approve
                                                                                                         </Button>
                                                                                               }
                                                                                          </div>
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

               <div className="modal fade" id="designerModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="designerModal" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                         <div className="modal-content cModalAuth">
                              <div className="modal-body">
                                   <div className="d-flex justify-content-end">
                                        <button type="button" className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"
                                        ></button>
                                   </div>
                                   <h1 className="heading2 textBlue1 text-center">
                                        Designer Assigned Products -  (ID: {designerId})
                                   </h1>
                                   <Gap height={50} />
                                   {
                                        isAdd ?
                                             < div>
                                                  <select className={"form-select " + (errProductId ? 'is-invalid' : '')} name="productId" id="productId" onChange={(e) => { setProductId(e.target.value); setErrProductId(null) }}>
                                                       <option value="">Choose product...</option>
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
                                                  <Gap height={10} />
                                                  <div className="d-flex justify-content-end">
                                                       <Button type={1} onClick={() => setIsAdd(false)}>Cancel</Button>
                                                       <Gap width={10} />
                                                       <Button type={2} isLoading={buttonLoading} onClick={() => handleUpdateDesigner(designerId, productId, 1)}>
                                                            Assign
                                                       </Button>
                                                  </div>
                                             </div>
                                             :
                                             <Button type={2} onClick={() => setIsAdd(true)}><i className="fa fa-plus text-white"></i> Assign Product to Designer</Button>
                                   }
                                   {
                                        designerProducts ?
                                             <Fragment>
                                                  {
                                                       designerProducts.length > 0 ?
                                                            <Fragment>
                                                                 <Gap height={40} />
                                                                 <div className="table-responsive">
                                                                      <table className="table table-hover">
                                                                           <thead className="bgBlue1 text-white">
                                                                                <tr>
                                                                                     <th>No</th>
                                                                                     <th>Product ID</th>
                                                                                     <th>Product Category</th>
                                                                                     <th>Product Name</th>
                                                                                     <th>Action</th>
                                                                                </tr>
                                                                           </thead>
                                                                           <tbody>
                                                                                {
                                                                                     designerProducts.map((designerProduct, index) => {
                                                                                          return (
                                                                                               <tr>
                                                                                                    <td>{index + 1}</td>
                                                                                                    <td>{designerProduct.product_id}</td>
                                                                                                    <td>{designerProduct.product_category}</td>
                                                                                                    <td>{designerProduct.product_name}</td>
                                                                                                    <td>
                                                                                                         <div className="d-inline-flex" role="group">
                                                                                                              <Button type={2} onClick={() => handleDeleteDesignerProduct(designerProduct.detail_skills_id)}>
                                                                                                                   <i className="fa fa-trash text-white"></i> Delete
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
                                                            </Fragment>
                                                            :
                                                            <Fragment>
                                                                 <Gap height={50} />
                                                                 <p className="paragraph textBlue1 text-center">No assigned product for this designer</p>
                                                            </Fragment>
                                                  }
                                             </Fragment>
                                             : <Loader isWhite={false} />
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment >
     )
}

export default DesignerList
