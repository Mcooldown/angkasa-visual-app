import { Fragment, useEffect } from "react"
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { Gap, Button } from "../../components/atoms"
import { OrderItem } from "../../components/molecules";
import "./Cart.scss";

const Cart = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const history = useHistory();

     const fetchCart = async (token) => {
          const apiFetch = await fetch(urlAPI + `carts?token=${token}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();
          console.log(res);
          // if (res.success) {
          //      return true;
          // } else {
          //      console.log(apiFetch.error);
          //      return false;
          // }
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

     return (
          <Fragment>
               <div className="cCart">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">My Cart</h1>
                         <Gap height={60} />
                         <OrderItem key={1} id={1} image={""} notes="Bagus" onDelete={() => { }} packageName={"Sky Package"}
                              preferredDesigner={"Budi"} price={20000} productName={"Logo Design"} quantity={1}
                              requestFileLink={"www.google.com"} />
                         <Gap height={100} />
                         <div className="d-flex justify-content-end align-items-center">
                              <p className="m-0 paragraph">Subtotal: </p>
                              <Gap width={15} />
                              <h1 className="heading2 text-danger">Rp 100.000</h1>
                         </div>
                         <Gap height={50} />
                         <Button isFull type={2} onClick={() => history.push('/checkout')}>
                              <h5 className="subHeading3 texBlue1">CHECKOUT</h5>
                         </Button>
                    </div>
               </div>
          </Fragment >
     )
}

export default Cart
