import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import img1 from '../Images/google-colored-20b8216731.svg'
import img2 from '../Images/facebook-colored-af4249157d.svg'
import img3 from '../Images/downloadApple.svg'
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
const AdminLogin = () => {
let [phone,setPhone]=useState("")
let [password,setPassword]=useState("")
let navigate=useNavigate()

let phoneData=(e)=>{
  setPhone(e.target.value)
}
 let passwordData=(e)=>{
  setPassword(e.target.value)
}
   let handleLogin=(e)=>{
e.preventDefault()
        axios.post(`http://localhost:8080/admin/verifybyphone?phone=${phone}&password=${password}`)
        .then((response)=>{   
            localStorage.setItem("admin",JSON.stringify(response.data.data))
            toast.success("Welcome to Admin Home Page",{
              position:toast.POSITION.TOP_CENTER
          })
            navigate('/adminhomepage')
        }).catch(()=>{
          toast.error("Something is Wrong",{
            position:toast.POSITION.TOP_CENTER
        })
        })
    }
  return (
    <div id="main">
      <Navbar/>
    <div id="scroll">
            <div className="container">
              <center><div className="title">ADMIN LOGIN</div></center>
              <div className="content">
                <form action="">
                  <div className="user-details">
                    <div className="input-box">
                      <span className="details">Phone Number</span> <input type="tel" value={phone}  onChange={phoneData}
                        placeholder="Enter your Phone Number" name="phone"/>
                    </div>
                    <div className="input-box">
                      <span className="details">Password</span> <input type="password" value={password} onChange={passwordData}
                        placeholder="Enter your password" name="password"/>
                    </div>                   
                    </div>
               <center>
      <div id="div4">
        <Button variant="contained" color="secondary"  disableElevation focused onClick={handleLogin}>  REGISTER</Button> 
      </div>
                    </center>
    <br/>
     <div className="div5">
    <div className="reg">
    <div className="logo">
      <img src={img1} alt="" />
    
    </div>
    <div className="name"><h3>Google</h3>
    </div>
    </div>
    <div className="reg">    
    <div className="logo">
      <img src={img2} alt="" />    
    </div>
    <div className="name"><h3>Facebook</h3>
    </div>   
    </div>
    <div className="reg">
    <div className="logo">
      <img  id="img3"src={img3} alt="" /> 
    </div>
    <div className="name"><h3>Apple</h3>
    </div>
    </div>
                    </div>
                    <br/>
    <center><div id="login">
      <p>Don't have an account? <Link to="/adminsignup">Sign up</Link></p>
      </div></center>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer/>
<br /><br /><br /><br />
          <Footer/>
          </div>
  )
}
export default AdminLogin
