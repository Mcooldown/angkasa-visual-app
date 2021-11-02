import { Fragment, useEffect, useState } from "react"
import { useHistory } from "react-router"
import Swal from "sweetalert2"
import { Gap, Input, Select, Button } from "../../components/atoms"
import { OrderItem } from "../../components/molecules"
import "./Checkout.scss"

const Checkout = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const history = useHistory();
     const [bankAccount, setBankAccount] = useState('');
     const [errBankAccount, setErrBankAccount] = useState(null);
     const [accountName, setAccountName] = useState('');
     const [errAccountName, setErrAccountName] = useState(null);
     const [accountNumber, setAccountNumber] = useState('');
     const [errAccountNumber, setErrAccountNumber] = useState(null);
     const [paymentProof, setPaymentProof] = useState(null);
     const [errPaymentProof, setErrPaymentProof] = useState(null);
     const [isLoading, setIsLoading] = useState(null);

     const [cartItems, setCartItems] = useState();
     const [subTotal, setSubTotal] = useState();

     const fetchCart = async (token) => {
          const apiFetch = await fetch(urlAPI + `carts?token=${token}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();
          if (res.success) {
               setSubTotal(res.amount);
               setCartItems(res.data);
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     useEffect(() => {

          if (!localStorage.getItem('token')) {
               Swal.fire({ icon: 'error', title: 'error', text: 'Please login first', confirmButtonColor: "#0F70B7" })
                    .then(() => {
                         history.push('/');
                    });
          } else {
               fetchCart(localStorage.getItem('token'));
          }

     }, [history]);

     const checkoutToAPI = async () => {
          const apiFetch = await fetch(urlAPI + `saveorder?tanggal_order=${new Date().toLocaleString('en-GB', { "day": "numeric", "month": "numeric", "year": "numeric" })}&bank_name=${bankAccount}&account_name=${accountName}&account_number=${accountNumber}&payment_proof=${paymentProof}&payment_status=0&token=${localStorage.getItem('token')}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();
          return res;
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
               setIsLoading(true);
               checkoutToAPI().then((res) => {
                    if (res.success) {
                         Swal.fire({ icon: "success", title: "Checkout Success", confirmButtonColor: "#0F70B7" })
                              .then(() => {
                                   history.push('/orders/' + res.orderId);
                              })
                    } else {
                         Swal.fire({ icon: "error", title: "Checkout Error", confirmButtonColor: "#0F70B7" });
                    }
                    setIsLoading(false);
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
                         {
                              cartItems ? cartItems.map((cartItem) => {
                                   return (
                                        <OrderItem key={cartItem.id} id={cartItem.id} image={cartItem.product_image} notes={cartItem.notes} packageName={cartItem.package_name}
                                             preferredDesigner={cartItem.designer_name} price={cartItem.price} productName={cartItem.product_name} quantity={cartItem.quantity}
                                             requestFileLink={cartItem.request_file_link} />
                                   )
                              }) : <p className="text-white">Please wait...</p>
                         }
                    </div>
               </div>
               <Gap height={50} />
               <div className="cCheckoutStepHeader"></div>
               <div className="cCheckoutStep2">
                    <div className="container-fluid">
                         <h1 className="subHeading1 text-white">Step 2: Choose payment method</h1>
                         <Gap height={50} />
                         <div className="cCheckoutFormCard">
                              {
                                   subTotal &&
                                   <div className="d-flex justify-content-center align-items-center">
                                        <p className="m-0 paragraph">Total Price: </p>
                                        <Gap width={15} />
                                        <h1 className="subHeading2 text-danger">Rp {subTotal}</h1>
                                   </div>
                              }
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
                         <Button isFull type={2} onClick={handlePay} isLoading={isLoading}>
                              <h5 className="subHeading3 texBlue1">PAY</h5>
                         </Button>
                    </div>
               </div>
          </Fragment>
     )
}

export default Checkout
