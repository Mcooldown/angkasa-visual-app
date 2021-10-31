import { Fragment } from "react";
import "./OrderList.scss";

const OrderList = () => {
     return (
          <Fragment>
               <div className="cOrderList">
                    <div className="container-fluid">
                         <div className="row justify-content-center">
                              <div className="col-lg-8">
                                   <h1 className="title textBlue1 text-center">Your Order</h1>
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default OrderList
