import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import  "./EmailBody.css"
import { useSelector } from "react-redux";
const DisplayMail = (props) => {

   
  console.log("props", props);
  const loggedInEmail= useSelector(state=>state.auth.loggedInEmail)
  const updatedLoggedInEmail=loggedInEmail.replace('@','').replace('.','')

  const deleteHandler= async (id)=>{
   console.log("idSent", id)
   const response= await fetch(`https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}SentMail/${id}.json/`,{
    method:'DELETE'
   })
   if(response.status==200){
    alert('Deleted Successfully')
   }

  }
let display
if(props.data==0){
display=<p>SentMail is empty</p>
}else{
  display = props.data.map((item) => (
    <ul>
    <li>
      <div className="emailbody">
        <div className="emailbody__left">
          <h3>To:- {item.mail}</h3>
        </div>
        <div className="emailbody__right">
          <h4>{item.subject} </h4>
        </div>
        <div className="emailbody__middle">
          <div className="emailbody__middle__msg">
            <p>{item.text}</p>
          </div>
        </div>
        <button onClick={deleteHandler.bind(null,item.id)}>Del</button>      
      </div>
    </li>
  </ul>
));
}
  
  return (
    <div>
        <Header/>
        <Sidebar/>
       <h2>Mail</h2>
        {display}
        
    </div>
  );
};

export default DisplayMail;
