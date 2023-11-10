import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import img1 from '../Images/google-colored-20b8216731.svg'
import img2 from '../Images/facebook-colored-af4249157d.svg'
import img3 from '../Images/downloadApple.svg'
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
const UserSignUp = () => {
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [phone,setPhone]=useState("")
    let [password,setPassword]=useState("")
    let [dob,setDob]=useState("")
    let [adhaar,setAdhaar]=useState("")
let navigate =useNavigate()
    let nameData=(e)=>{
        setName(e.target.value)
    }
    let emailData=(e)=>{
        setEmail(e.target.value)
    }
       let phoneData=(e)=>{
        setPhone(e.target.value)
    }
    let passwordData=(e)=>{
        setPassword(e.target.value)
    }
       let dobData=(e)=>{
        setDob(e.target.value)
    }
    let adhaarData=(e)=>{
        setAdhaar(e.target.value)
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        let data={name,email,phone,password,dob,adhaar}
    axios.post(`http://localhost:8080/users`,data)
    .then(()=>{
        toast.success("Welcome User Login Page",{
            position:toast.POSITION.TOP_CENTER
        })
        navigate('/userlogin')
    }).catch(()=>{
        toast.error("Something is Wrong",{
            position:toast.POSITION.TOP_CENTER
        })
    })
    }
      return (
        <div id="main1">
<Navbar/>
        <div id="scroll1">
                        <div className="container1">
                            <center><div className="title1">USER REGISTRATION</div></center>
                            <div className="content1">
                                <form action="">
                                    <div className="user-details1">
                                        <div className="input-box1">
                                            <span className="details1">Full Name</span> <input type="text" id="" value={name} onChange={nameData}
                                                placeholder="Enter your name" name="name"/>
                                        </div>
                                        <div className="input-box1">
                                            <span className="details1">Email</span> <input type="email" id="" value={email} onChange={emailData} 
                                                placeholder="Enter your email" name="email"/>
                                        </div>
                                        <div className="input-box1">
                                            <span className="details1">Phone Number</span> <input type="tel" value={phone}  onChange={phoneData}
                                                placeholder="Enter your Phone Number" name="phone"/>
                                        </div>
                                        <div className="input-box1">
                                            <span className="details1">Password</span> <input type="password" value={password} onChange={passwordData}
                                                placeholder="Enter your password" name="password"/>
                                        </div>
                        <div className="input-box1">
                                            <span className="details1">Date Of Birth</span> <input type="date" value={dob}  onChange={dobData}
                                                placeholder="Enter your Age" name="dob"/>
                                        </div>
                                        <div className="input-box1">
                                            <span className="details1">Adhaar No</span> <input type="number" value={adhaar}  onChange={adhaarData}
                                                placeholder="Enter your Age" name="adhaar"/>
                                        </div>
                        </div>
                   <center>
                                        <div id="div41">
           <Button variant="contained" color="primary"  disableElevation focused onClick={handleSubmit}>  
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
          <p>Have an account already? <a href="/userlogin">Log in</a></p>
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
export default UserSignUp
