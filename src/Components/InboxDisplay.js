import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./EmailBody.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

const InboxDisplay = (props) => {
  console.log("Inbox", props);
  const [inboxData, setInboxData] = useState([]);
  const [read, setRead] = useState(false);
  const loggedInEmail = useSelector((state) => state.auth.loggedInEmail);
  const updatedLoggedInEmail = loggedInEmail.replace("@", "").replace(".", "");
  const emails = useSelector((state) => state.inbox.emails);
  console.log("emailInbox", emails);

  const deleteHandler = (id) => {
    const email1 = localStorage.getItem("email");
    console.log("id", id);

    console.log(email1);
    try {
      const res = axios.delete(
        `https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}Inbox/${id}.json`
      );
      console.log(id);

      const result = inboxData.filter((item) => item.id !== id);
      setInboxData(result);
      alert("Sucessfully deleted");
      
    } catch (err) {
      console.log(err);
    }
  };

  const seenHandler = (id) => {
    console.log("idSeen", id);
    axios.patch(
      `https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}Inbox/${id}.json`,
      {
        read: true,
      }
    );
    alert('Seen Successfully')
    setRead(true);
  };

  // let display;
  // if (props.data == 0) {
  //   display = (
  //     <img
  //       src="https://cdn.dribbble.com/users/1590794/screenshots/5822231/blank_inbox_email.png"
  //       alt="empty"
  //       width="50%"
  //       right="70%"
  //     />
  //   );
  // }
  // useEffect(()=>{
  //   if(props.data==0){
  //   display=<img src="https://cdn.dribbble.com/users/1590794/screenshots/5822231/blank_inbox_email.png" alt="empty" width='50%' right='70%'/>
  //   }else{
  //        display = props.data.map((item) => (
  //           <ul style={{backgroundColor:item.read ?'white':'red'}}>
  //             <li>
  //             <div className="emailbody">
  //               <div className="emailbody__left">
  //               {<a onClick={seenHandler.bind(null,item.id)}><h3>From:- {item.mail}</h3></a>}
  //               </div>
  //               <div className="emailbody__right">
  //                 <h4>{item.subject} </h4>
  //               </div>
  //               <div className="emailbody__middle">
  //                 <div className="emailbody__middle__msg">
  //                   <p>{item.text}</p>
  //                 </div>
  //               </div>
  //                 <button onClick={deleteHandler.bind(null,item.id)}>Del</button>
  //               </div>
  //             </li>
  //           </ul>
  //         ))};},[read])

  console.log("displayLog", props.data);

  return (
    <div>
      <Header />
      <Sidebar />
      <h3>Inbox</h3>
      <ul>
        {props.data.map((item) => (
          <li style={{ color: item.read ? "black" : "red" }}>
            <div className="emailbody">
              <div className="emailbody__left">
                {
                  <a onClick={seenHandler.bind(null, item.id)}>
                    <h3>From:- {item.mail}</h3>
                  </a>
                }
              </div>
              <div className="emailbody__right">
                <h4>{item.subject} </h4>
              </div>
              <div className="emailbody__middle">
                <div className="emailbody__middle__msg">
                  <p>{item.text}</p>
                </div>
              </div>
              <button onClick={deleteHandler.bind(null, item.id)}>Del</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InboxDisplay;
