import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mailAction } from "../Store/MailSlice";
import DisplayMail from "./DisplayMail";

const GetMail = () => {
  const [mail, setMail] = useState([]);
  const dispatch = useDispatch();
  const loggedInEmail = useSelector((state) => state.auth.loggedInEmail);
  console.log("lim", loggedInEmail);
  const updatedLoggedInEmail = loggedInEmail.replace("@", "").replace(".", "");

  useEffect(() => {
    displaymail();
  }, []);
  const displaymail = async () => {
    try {
      const response = await fetch(
        `https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}SentMail.json/`
      );
      const data = await response.json();
      console.log("dataa", data);

      dispatch(mailAction.addedMail(data));
      const array = [];
      for (const key in data) {
        array.push({
          id:key,
          mail: data[key].mail,
          subject: data[key].subject,
          text: data[key].text,
        });
      }
      setMail(array);
      console.log("arrray", array);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      {/* {display.map((mail) => (
        <>
          {mail.mail}
          {mail.subject}
          {mail.text}
          
        </>
      ))} */}

      <DisplayMail data={mail} />
    </div>
  );
};

export default GetMail;
