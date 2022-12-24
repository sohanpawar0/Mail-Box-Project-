import React from "react";
import "./Sidebar.css";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@material-ui/core";
import MailIcon from "@mui/icons-material/Mail";
import OutboxIcon from "@mui/icons-material/Outbox";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
  // const [unreadcount,setUnreadCount]=useState(0)
  const history = useHistory();
  const emails=useSelector(state=>state.inbox)
  console.log("emails",emails)

// useEffect(()=>{
// if(emails){
//   let count=0
//   Object.keys(emails.emails).map((email) => {
//     if (emails.emails[email].read === false) {
//       count = count + 1;
//       setUnreadCount(count)
//     }
//     else{
//       count=count-1;
//       setUnreadCount(count)
//     }
//   })
// }
// },[emails])

  const composeMailHandler = () => {
    history.push("/composemail");
  };
  const getMailHandler = () => {
    history.push("/displaymail");
  };
  const inboxHandler=()=>{
    history.push("/inboxdisplay")
  }
  return (
    <div className="sidebar">
      <div className="compose__btn">
        <Button startIcon={<AddIcon />} onClick={composeMailHandler}>
          Compose
        </Button>
      </div>
      <div>
        <button onClick={inboxHandler}>
          <MailIcon />
          Inbox
        </button>
      </div>
      <div>
      <br />
      <br />
      </div>
      <div>
        <button onClick={getMailHandler}>
          <OutboxIcon />
          Sent Mail
        </button>
      </div>
      {/* <div>Unread Mails : {unreadcount}</div> */}
    </div>
  );
};

export default Sidebar;
