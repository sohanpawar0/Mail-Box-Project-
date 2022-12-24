import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const SingleMsg = (props) => {
    console.log("propsSi",props)
  return (
    <div>
<Header/>
<Sidebar/>
    </div>
  )
}

export default SingleMsg


