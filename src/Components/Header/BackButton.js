import React from 'react'
import {useHistory} from "react-router-dom"

const BackButton = () => {
    const history=useHistory()

    const backHandler=()=>{
             history.replace("/inboxdisplay");
    }
  return (
    <div>
        <button onClick={backHandler}>Back</button>
    </div>
  )
}

export default BackButton