import { Fragment } from "react"
import { useHistory } from "react-router";
import { Sample } from "../../assets";
import { Gap, Input, Select, Button } from "../../components/atoms"
import "./Cart.scss";

const Cart = () => {

     const history = useHistory();
     // const [cartItems, setCartItems] = useState(null);

     // Edit 1 item cart
     // const [editedId, setEditedId] = useState(null);
     // const [editedName, setEditedName] = useState(null);
     // const [editedPrice, setEditedPrice] = useState(null);
     // const [editedPackage, setEditedPackage] = useState(null);
     // const [editedType, setEditedType] = useState(null);
     // const [editedQuantity, setEditedQuantity] = useState(null);
     // const [editedDetailRequestLink, setEditedDetailRequestLink] = useState(null);
     // const [editedPreferredDesigner, setEditedPreferredDesigner] = useState(null);
     // const [editedNotes, setEditedNotes] = useState(null);
     // const [editedEstimatedTime, setEditedEstimatedTime] = useState(null);


     return (
          <Fragment>
               <div className="cCart">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">My Cart</h1>
                         <Gap height={60} />
                         <div className="cCartCard">
                              <div className="card-body p-lg-5">
                                   <div className="row justify-content-between align-items-center">
                                        <div className="col-lg-8">
                                             <div className="row align-items-center">
                                                  <div className="col-lg-4 my-3">
                                                       <img src={Sample} className="w-100" alt="" />
                                                  </div>
                                                  <div className="col-lg-7 my-3 ps-lg-5">
                                                       <h1 className="subHeading2 textBlue1">Logo Design</h1>
                                                       <Gap height={5} />
                                                       <p className="paragraph">Rp 50.000 - Rp 100.000</p>
                                                       <Gap height={15} />
                                                       <Select label="Type" id="type" options={['Typhography']} name="type" />
                                                       <Gap height={10} />
                                                       <Input type="number" label="Quantity" id="quantity" name="quantity" min={1} />
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 my-3 text-end">
                                             <Select id="package" options={['Sky Package', 'Space Package', 'Universe Package']} name="package" />
                                             <Gap height={15} />
                                             <p className="fst-italic">Estimated processing time: <b>3 days</b></p>
                                             <Gap height={10} />
                                             <h1 className="subHeading2 text-danger">Rp 50.000 - Rp 100.000</h1>
                                             <Gap height={20} />
                                             <Button type={1}>
                                                  <h5 className="m-1">Remove</h5>
                                             </Button>
                                        </div>
                                   </div>
                                   <hr />
                                   <Gap height={20} />
                                   <Input label="Detail Request Link" placeholder="Put your request file (word/pdf) at google drive and copy the link here"
                                        name="requestFileLink" id="requestFileLink" type="text" />
                                   <Gap height={20} />
                                   <Select label="Preferred Designer" id="preferredDesigner" name="preferredDesigner" options={["Andi", "Budi"]} />
                                   <Gap height={20} />
                                   <Input label="Notes" id="notes" name="notes" type="text" />
                              </div>
                         </div>
                         <Gap height={50} />
                         <div className="d-flex justify-content-end align-items-center">
                              <p className="m-0 paragraph">Subtotal: </p>
                              <Gap width={15} />
                              <h1 className="subHeading2 text-danger">Rp 50.000 - Rp 100.000</h1>
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
