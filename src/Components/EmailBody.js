import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import "./EmailBody.css"

const EmailBody = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="emailbody">
        <div className="emailbody__left">
          <LabelOutlinedIcon />
          <h4>Abhishek</h4>
        </div>
        <div className="emailbody__middle">
          <div className="emailbody__middle__msg">
            <p>
              <b>Subject</b> This is message body
            </p>
          </div>
        </div>
        <div className="emailbody__right">
          <p>2:30</p>
        </div>
      </div>
    </div>
  );
};

export default EmailBody;
