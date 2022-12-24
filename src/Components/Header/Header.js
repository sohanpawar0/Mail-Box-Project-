import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'
import ReorderIcon from "@mui/icons-material/Reorder";
import { IconButton,Avatar } from "@material-ui/core";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { useSelector } from "react-redux";
import Logout from "./Logout";
const Header = () => {
  const id=useSelector((state)=>state.auth.loggedInEmail)
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
       <Link to='/inboxdisplay'> <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyTuYIHPx3PReRy_jrwGo2FgEFYMwdirWoRIRtJj1IUjrbYp5lV3jyaH-3l3s2u0tYbw&usqp=CAU"
          alt="gmail-img"
          width="150px"
        />
        </Link>
      </div>
      <div className="header__middle">
        <div className="search_mail">
          {/* <IconButton> */}
          <h3>{id}</h3>
          {/* </IconButton> */}
          {/* <input type="text" placeholder="search mail" /> */}
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
             <Avatar/>
        <Logout/>
      </div>
    </div>
  );
};

export default Header;
