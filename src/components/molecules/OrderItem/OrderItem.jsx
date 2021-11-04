import { Sample } from "../../../assets";
import { Gap, Button } from "../../atoms";
import "./OrderItem.scss";

const OrderItem = ({ id, image, productName, price, packageName, quantity, preferredDesigner, requestFileLink, notes, onDelete }) => {
     return (
          <div className="cOrderCard my-3">
               <div className="card-body p-lg-5">
                    <div className="row justify-content-between align-items-center">
                         <div className="col-lg-8">
                              <div className="row align-items-center">
                                   <div className="col-lg-4 my-3">
                                        <img src={image ? image : Sample} className="w-100" alt="" />
                                   </div>
                                   <div className="col-lg-7 my-3 ps-lg-5">
                                        <h1 className="subHeading1 textBlue1">{productName}</h1>
                                        <Gap height={15} />
                                        <p className="paragraph textGray2 m-0"><b>Package:</b> {packageName}</p>
                                        <p className="paragraph textGray2 m-0"><b>Quantity:</b> {quantity}</p>
                                        <p className="paragraph textGray2 m-0"><b>Preferred Designer:</b> {preferredDesigner}</p>
                                        <p className="paragraph textGray2 m-0"><b>Request File Link:</b> {requestFileLink}</p>
                                        <p className="paragraph textGray2 m-0"><b>Notes:</b> {notes ? notes : '-'}</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-lg-3 my-3 text-end">
                              <p className="paragraph textGray2 m-0"><b>Price:</b></p>
                              <h1 className="subHeading1 text-danger">{price}</h1>
                              <Gap height={20} />
                              {
                                   onDelete &&
                                   <Button type={1} onClick={() => onDelete(id)}>
                                        <h5 className="m-1">Remove</h5>
                                   </Button>
                              }
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default OrderItem;
