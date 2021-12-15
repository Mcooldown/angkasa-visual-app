import { Fragment, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import { Button, Gap, Loader } from "../../components/atoms"
import "./Chat.scss"

const Chat = () => {

     const urlAPI = process.env.REACT_APP_API_URL;
     const [chats, setChats] = useState(null);
     const [message, setMessage] = useState('');
     const { id, designerId } = useParams();
     const history = useHistory();
     const [buttonLoading, setButtonLoading] = useState(false);

     const fetchChat = async () => {

          const checkDesigner = localStorage.getItem('designerId') === null ? "0" : "1";

          const apiFetch = await fetch(urlAPI + `chats?token=${localStorage.getItem('token')}&is_designer=${checkDesigner}&detail_order_id=${id}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.success) {
               setChats(res.data.reverse());
               var chatbox = document.querySelector('#chatbox');
               chatbox.scrollTop = chatbox.scrollHeight - chatbox.clientHeight;
               return true;
          } else {
               console.log(apiFetch.error);
               return false;
          }
     }

     useEffect(() => {
          window.scrollTo(0, 0);
          if (!localStorage.getItem('token')) {
               Swal.fire({ icon: 'error', title: 'error', text: 'Please login first', confirmButtonColor: "#0F70B7" })
                    .then(() => {
                         history.push('/');
                    });
          } else {
               console.log(localStorage.getItem('designerId'))
               fetchChat();
          }
     }, []);

     const sendMessage = async () => {

          setButtonLoading(true)
          const checkDesigner = localStorage.getItem('designerId') === designerId ? "1" : "0";

          const apiFetch = await fetch(urlAPI + `savechat?token=${localStorage.getItem('token')}&is_designer=${checkDesigner}&designer_id=${designerId}&detail_order_id=${id}&message=${message}`, {
               method: 'POST',
          }).catch(err => {
               console.log(err);
          });
          const res = await apiFetch.json();

          if (res.success) {
               setButtonLoading(false);
               setMessage('');
               fetchChat();
               return true;
          } else {
               console.log(apiFetch.error);
               setButtonLoading(false);
               return false;
          }
     }

     return (
          <Fragment>
               <div className="cChatHeader">
                    <div className="container-fluid">
                         <h1 className="title textBlue1 text-center">Chat (ID: {id})</h1>
                         <Gap height={30} />
                    </div>
               </div>
               <div className="cChatContent">
                    <div className="container-fluid">
                         <div className="row justify-content-center">
                              <div className="col-lg-8">
                                   <div className="card bgBlue1" style={{ borderRadius: "20px" }}>
                                        <div className="card-body my-3">
                                             <div id="chatbox" style={{ height: "85vh", overflowY: "scroll" }} className="p-2">
                                                  <p className="text-white text-center">--- Chat Started ---</p>
                                                  {
                                                       chats ? chats.map((chat) => {

                                                            let current = (localStorage.getItem('designerId') !== designerId && chat.is_designer === 0) ||
                                                                 (localStorage.getItem('designerId') === designerId && chat.is_designer === 1);

                                                            return (
                                                                 <Fragment key={chat.chat_id}>
                                                                      <div className={"d-flex align-items-start mb-3 " + (current ? "justify-content-end" : "")}>
                                                                           {
                                                                                !current ?
                                                                                     <div className={current ? "order-2" : "order-1"} style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#79D6FF" }}></div>
                                                                                     : null
                                                                           }
                                                                           <div className={current ? "order-1 text-end me-2" : "order-2 ms-2"}>
                                                                                {
                                                                                     !current ?
                                                                                          <small className="d-block text-white">{chat.is_designer === 0 ? chat.customer_name : chat.designer_name}</small>
                                                                                          : null
                                                                                }
                                                                                <div className={"d-inline-flex px-3 py-2 " + (current ? "justify-content-end bgBlue2 text-white" : "bg-white textBlue1")}
                                                                                     style={{ borderRadius: "20px" }}>
                                                                                     {chat.message}
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </Fragment>
                                                            )
                                                       })
                                                            : <Loader isWhite={true} />
                                                  }
                                             </div>
                                             <div>
                                                  <Gap height={20} />
                                                  <div className="d-flex">
                                                       <input type="text" className="form-control py-3" placeholder="Write your message here..."
                                                            onChange={(e) => setMessage(e.target.value)} value={message} />
                                                       <Gap width={20} />
                                                       <Button type={1} onClick={sendMessage} disabled={message === ''} isLoading={buttonLoading}>
                                                            <i className="fa fa-paper-plane"></i> SEND</Button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default Chat
