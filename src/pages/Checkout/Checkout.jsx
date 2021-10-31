import { Fragment, useEffect } from "react"
import { useHistory } from "react-router"
import { useState } from "react/cjs/react.development"
import Swal from "sweetalert2"
import { Gap, Input, Select, Button } from "../../components/atoms"
import OrderItem from "../../components/molecules/OrderItem/OrderItem"
import "./Checkout.scss"

const Checkout = () => {

     const history = useHistory();
     const [bankAccount, setBankAccount] = useState('');
     const [errBankAccount, setErrBankAccount] = useState(null);
     const [accountName, setAccountName] = useState('');
     const [errAccountName, setErrAccountName] = useState(null);
     const [accountNumber, setAccountNumber] = useState('');
     const [errAccountNumber, setErrAccountNumber] = useState(null);
     const [paymentProof, setPaymentProof] = useState(null);
     const [errPaymentProof, setErrPaymentProof] = useState(null);

     useEffect(() => {
          if (!localStorage.getItem('token')) {
               Swal.fire({ icon: 'error', title: 'error', text: 'Please login first', confirmButtonColor: "#0F70B7" })
                    .then(() => {
                         history.push('/');
                    });
          }
     }, [history]);

     const checkoutToAPI = async () => {
          return true;
     }

     const handlePay = () => {

          let pass = true;
          if (!bankAccount) {
               setErrBankAccount("Bank Account must be selected");
               pass = false;
          }
          if (!accountNumber) {
               setErrAccountNumber("Account Number must be filled");
               pass = false;
          }
          if (!accountName) {
               setErrAccountName("Account Name must be filled");
               pass = false;
          }
          if (!paymentProof) {
               setErrPaymentProof("Payment proof must be filled");
               pass = false;
          }

          if (pass) {
               checkoutToAPI().then((res) => {
                    alert('success');
               })
          }
     }

     return (
          <Fragment>
               <div className="cCheckoutHeader">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Checkout</h1>
                         <Gap height={60} />
                    </div>
               </div>
               <div className="cCheckoutStep1">
                    <div className="container-fluid">
                         <h1 className="subHeading1 text-white">Step 1: Check your order</h1>
                         <Gap height={30} />
                         <OrderItem key={1} id={1} image={""} notes="Bagus" packageName={"Sky Package"}
                              preferredDesigner={"Budi"} price={20000} productName={"Logo Design"} quantity={1}
                              requestFileLink={"www.google.com"} />
                         <OrderItem key={1} id={1} image={""} notes="Bagus" packageName={"Sky Package"}
                              preferredDesigner={"Budi"} price={20000} productName={"Logo Design"} quantity={1}
                              requestFileLink={"www.google.com"} />
                    </div>
               </div>
               <Gap height={50} />
               <div className="cCheckoutStepHeader"></div>
               <div className="cCheckoutStep2">
                    <div className="container-fluid">
                         <h1 className="subHeading1 text-white">Step 2: Choose payment method</h1>
                         <Gap height={50} />
                         <div className="cCheckoutFormCard">
                              <div className="d-flex justify-content-center align-items-center">
                                   <p className="m-0 paragraph">Total Price: </p>
                                   <Gap width={15} />
                                   <h1 className="subHeading2 text-danger">Rp 100.000</h1>
                              </div>
                              <Gap height={40} />
                              <Select id="bankAccount" name="bankAccount" label="Bank Account" options={["BCA", "BNI", "BRI", "Mandiri", "CIMB Niaga"]}
                                   value={bankAccount} onChange={(e) => { setBankAccount(e.target.value); setErrBankAccount(null); }} error={errBankAccount} />
                              <Gap height={20} />
                              <Input type="text" id="accountName" name="accountName" label="Account Name" placeholder="Input your account name here"
                                   value={accountName} onChange={(e) => { setAccountName(e.target.value); setErrAccountName(null); }} error={errAccountName} />
                              <Gap height={20} />
                              <Input type="text" id="accountNumber" name="accountNumber" label="Account Number" placeholder="Input your account number here"
                                   value={accountNumber} onChange={(e) => { setAccountNumber(e.target.value); setErrAccountNumber(null); }} error={errAccountNumber} />
                              <Gap height={20} />
                              <Input type="text" id="paymentProof" name="paymentProof" label="Payment Proof Link" placeholder="Input your payment proof link here"
                                   value={paymentProof} onChange={(e) => { setPaymentProof(e.target.value); setErrPaymentProof(null); }} error={errPaymentProof} />
                         </div>
                         <Gap height={30} />
                         <Button isFull type={2} onClick={handlePay}>
                              <h5 className="subHeading3 texBlue1">PAY</h5>
                         </Button>
                    </div>
               </div>
          </Fragment>
     )
}

export default Checkout
