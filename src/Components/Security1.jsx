import React from 'react'
import { Navigate } from 'react-router-dom'
const Security1 = ({Child}) => {
    let verifyAdmin=()=>{
        let x=JSON.parse(localStorage.getItem("admin"))
        if(x==null){
            return false
        }
        else{
            return true
        }
    }
  return (
    <div>
      {verifyAdmin() ? <Child/> : <Navigate to="/adminlogin"/>}
    </div>
  )
}
export default Security1
