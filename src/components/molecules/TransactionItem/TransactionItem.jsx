import "./TransactionItem.scss";
import { Sample } from "../../../assets";
import { Gap, Button } from "../../atoms";

const TransactionItem = ({ productName, packageName, price, quantity, status, image, designer }) => {
     return (
          <div className="cTransactionCard my-3">
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
                                        <p className="paragraph textGray2 m-0"><b>Rp</b> {price}</p>
                                        <p className="paragraph textGray2 m-0"><b>Package:</b> {packageName}</p>
                                        <p className="paragraph textGray2 m-0"><b>Quantity:</b> {quantity}</p>
                                        <p className="paragraph textGray2 m-0"><b>Designer:</b> {designer}</p>
                                   </div>
                              </div>
                         </div>
                         {
                              !status &&
                              <div className="col-lg-2 my-3 text-end">
                                   <Button type={2} isFull>
                                        <h4 className="mx-3 my-1">Revise</h4>
                                   </Button>
                                   <br />
                                   <Gap height={20} />
                                   <Button type={2} isFull>
                                        <h4 className="mx-3 my-1">Contact</h4>
                                   </Button>
                              </div>
                         }
                    </div>
               </div>
          </div>
     )
}

export default TransactionItem
