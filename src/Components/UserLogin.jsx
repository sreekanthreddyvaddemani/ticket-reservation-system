import React, { useState } from 'react'
import '../Styles/userloginsignup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import img1 from '../Images/google-colored-20b8216731.svg'
import img2 from '../Images/facebook-colored-af4249157d.svg'
import img3 from '../Images/downloadApple.svg'
import Footer from './Footer';
import EmailSend from './EmailSend';
import Navbar from './Navbar';
const UserLogin = () => {
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let navigate=useNavigate()
  let emailData=(e)=>{
    setEmail(e.target.value)
  }
   let passwordData=(e)=>{
    setPassword(e.target.value)
  }
     let handleLogin=(e)=>{
  e.preventDefault()
      let data={email,password}
          axios.post(`http://localhost:8080/users/verifybyemail?email=${email}&password=${password}`,data)
          .then((response)=>{
              localStorage.setItem("user",JSON.stringify(response.data.data))
              toast.success("Welcome to User Home Page",{
                position:toast.POSITION.TOP_CENTER
            })
              navigate('/userhome')
          }).catch(()=>{
            toast.error("SomeThing Is Wrong",{
              position:toast.POSITION.TOP_CENTER
          })
          })
      }
  return (
    <div id="main1">
      <Navbar/>
    <div id="scroll1">     
            <div className="container1">
              <center><div className="title1">USRE LOGIN</div></center>
              <div className="content1">
                <form action="">
                  <div className="user-details1">
                    <div className="input-box1">
                      <span className="details1">Email ID</span> <input type="email" value={email} onChange={emailData} 
                        placeholder="Enter your Email ID" name="email"/>
                    </div>
                    <div className="input-box1">
                      <span className="details1">Password</span> <input type="password" value={password} onChange={passwordData}
                        placeholder="Enter your password" name="password"/>
                    </div>
                    </div>
               <center>
                    <div id="div41">
       <Button variant="contained" color="primary"  disableElevation focused onClick={handleLogin}>  
          REGISTER
        </Button> 
                    </div>
                    </center>
    <br/>
                    <div className="div51">
    <div className="reg1">
    <div className="logo1">
      <img src={img1} alt="" />
    </div>
    <div className="name"><h3>Google</h3>
    </div>
    </div>
    <div className="reg1">
    <div className="logo1">
      <img src={img2} alt="" />
    </div>
    <div className="name"><h3>Facebook</h3>
    </div>
    </div>
    <div className="reg1">
    <div className="logo1">
      <img  id="img3"src={img3} alt="" />
    </div>
    <div className="name"><h3>Apple</h3>
    </div>
    </div>
                    </div>
                    <br/>
    <center><div id="login1">
      <p>Don't have an account? <a href="/usersignup">Sign up</a></p>
      </div></center>
                </form>
              </div>
            </div>
          </div>
<ToastContainer/>
<br /><br /><br /><br />
<EmailSend/>
<Footer/>








          </div>
  )
}

export default UserLogin


