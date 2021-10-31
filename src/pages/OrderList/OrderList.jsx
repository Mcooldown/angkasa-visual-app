import { Fragment } from "react";
import { useState } from "react/cjs/react.development";
import { Button, Gap } from "../../components/atoms";
import { TransactionItem } from "../../components/molecules";
import "./OrderList.scss";

const OrderList = () => {

     const [section, setSection] = useState(1);

     const handleChangeToOnGoing = () => {
          setSection(1);
     }

     const handleChangeToCompleted = () => {
          setSection(2);
     }

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
                         <TransactionItem designer={"A"} image={""} packageName={"Sky Package"} price={20000} productName={"Logo Design"}
                              quantity={2} status={false} />
                         <TransactionItem designer={"B"} image={""} packageName={"Sky Package"} price={20000} productName={"Logo Design"}
                              quantity={1} status={true} />
                    </div>
               </div>
          </Fragment>
     )
}

export default OrderList
