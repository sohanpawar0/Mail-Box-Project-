import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import {useHistory} from "react-router-dom"
import "./LogoutButton.css"


const Logout = (props) => {
    const history=useHistory()

    const logoutHandler=()=>{

        localStorage.clear();
        history.replace('/authform')
    }
  return (
    <div className='exit-btn'>
       <LogoutIcon className='exit-btn-3' onClick={logoutHandler}/>
       
    </div>
  )
}

export default Logout