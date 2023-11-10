import React from 'react'
import { Navigate } from 'react-router-dom'
const Security2 = ({Child}) => {
    let verifyUser=()=>{
        let y=JSON.parse(localStorage.getItem("user"))
        if(y==null){
            return false
        }
        else{
            return true
        }
    }
  return (
    <div>
      {verifyUser() ? <Child/> : <Navigate to="/landinguserhomepage"/>}
    </div>
  )
}
export default Security2
