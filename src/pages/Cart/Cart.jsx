import { Fragment, useEffect, useState } from "react"
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { Gap, Button } from "../../components/atoms"
import { OrderItem } from "../../components/molecules";
import "./Cart.scss";

const Cart = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const history = useHistory();
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


     const deleteCartItem = async (id) => {
          const apiFetch = await fetch(urlAPI + `deletecart?id=${id}&token=${localStorage.getItem('token')}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();
          if (res.success) {
               Swal.fire({ 'icon': 'success', 'title': 'Success', 'text': 'Cart Item deleted', 'confirmButtonColor': '#0F70B7' })
               fetchCart(localStorage.getItem('token'));
          } else {
               console.log(apiFetch.error);
               Swal.fire({ 'icon': 'error', 'title': 'Error', 'text': 'Error delete cart item', 'confirmButtonColor': '#0F70B7' })
          }
     }

     return (
          <Fragment>
               <div className="cCart">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">My Cart</h1>
                         <Gap height={60} />
                         {
                              (cartItems && cartItems.length > 0) ? cartItems.map((cartItem) => {
                                   return (
                                        <OrderItem key={cartItem.id} id={cartItem.id} image={cartItem.product_image} notes={cartItem.notes} onDelete={deleteCartItem} packageName={cartItem.package_name}
                                             preferredDesigner={cartItem.designer_name} price={cartItem.price} productName={cartItem.product_name} quantity={cartItem.quantity}
                                             requestFileLink={cartItem.request_file_link} />
                                   )
                              }) : <p className="paragraph text-muted text-center mt-4">No cart items</p>
                         }
                         <Gap height={100} />
                         {
                              subTotal ?
                                   <div className="d-flex justify-content-end align-items-center">
                                        <p className="m-0 paragraph">Subtotal: </p>
                                        <Gap width={15} />
                                        <h1 className="heading2 text-danger">Rp {subTotal}</h1>
                                   </div> : null
                         }
                         <Gap height={50} />
                         {
                              (cartItems && cartItems.length > 0) &&
                              <Button isFull type={2} onClick={() => history.push('/checkout')}>
                                   <h5 className="subHeading3">CHECKOUT</h5>
                              </Button>
                         }
                    </div>
               </div>
          </Fragment >
     )
}

export default Cart
