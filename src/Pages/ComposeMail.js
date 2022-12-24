import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from "react-router-dom";

import BackButton from "../Components/Header/BackButton";
import { mailAction } from "../Store/MailSlice";

const ComposeMail = () => {
  const history = useHistory();
  const dispatch=useDispatch();
  const loggedInEmail = useSelector((state) => state.auth.loggedInEmail);
  console.log("lie", loggedInEmail);
  
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  // const textInputRef=useRef();
  const updatedLoggedInEmail = loggedInEmail
  .replace("@", "")
  .replace(".", "");
  let bodyText;

  const onEditorStateChange = (event) => {
    bodyText = event.getCurrentContent().getPlainText();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const mail = emailInputRef.current.value;
    const subject = subjectInputRef.current.value;
    // const text=textInputRef.current.value;
    // console.log(mail,subject,text)
    const mailid = mail.replace("@", "").replace(".", "");
const input={
          mail: updatedLoggedInEmail,
          subject: subject,
          text: bodyText,
          read:false,
}
    fetch(
      `https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail/${mailid}Inbox.json`,
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("resp1", resp);
          dispatch(mailAction.sendMail(input))
          return resp.json();
        } else {
          return resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        console.log(data.name);
        
      })
      .catch((err) => {
        alert(err);
      });

    
    fetch(
      `https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}SentMail.json`,
      {
        method: "POST",
        body: JSON.stringify({
          mail: mailid,
          subject: subject,
          text: bodyText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("resp1", resp);
          return resp.json();
        } else {
          return resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        console.log(data.name);
        alert("Mail sent successfully...")
        history.replace("/inboxdisplay");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <Header />
      <BackButton/>
      {/* <Sidebar/> */}
      <form onSubmit={submitHandler}>
        <div>
          <label>To:</label>
          <input
            type="email"
            placeholder="mail id"
            ref={emailInputRef}
            required
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            placeholder="Subject"
            ref={subjectInputRef}
            required
          />
        </div>
        <div>
          <Editor
            // editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
          {/* <label>Text</label>
          <input type="text" width="100" placeholder="text" ref={textInputRef} required/> */}
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ComposeMail;
