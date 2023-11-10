import React from 'react'
import { useState } from 'react'
import axios from "axios"
import Button from '@mui/material/Button';
import img1 from '../Images/google-colored-20b8216731.svg'
import img2 from '../Images/facebook-colored-af4249157d.svg'
import img3 from '../Images/downloadApple.svg'
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailSend from './EmailSend';
import Navbar from './Navbar';
const AdminSignUp = () => {
  let [name,setName]=useState("")
let [email,setEmail]=useState("")
let [phone,setPhone]=useState("")
let [password,setPassword]=useState("")
let [gst,setGst]=useState("")
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
   let gstData=(e)=>{
    setGst(e.target.value)
}
let handleSubmit=(e)=>{
    e.preventDefault()
    let data={name,email,phone,password,gst}
axios.post(`http://localhost:8080/admin`,data)
.then((res)=>{
    toast.success("Admin added Successfully",{
      position:toast.POSITION.TOP_CENTER
  })
}).catch(()=>{
    toast.error("SomeThing is Wrong",{
      position:toast.POSITION.TOP_CENTER
  })
})
}
  return (
         <div id="main">
      <Navbar/>

<div id="scroll">
				<div className="container">
					<center><div className="title">ADMIN REGISTRATION</div></center>
					<div className="content">
						<form action="">
							<div className="user-details">
								<div className="input-box">
									<span className="details">Full Name</span> <input type="text" id="" value={name} onChange={nameData}
										placeholder="Enter your name" name="name"/>
								</div>
								<div className="input-box">
									<span className="details">Email</span> <input type="email" id="" value={email} onChange={emailData} 
										placeholder="Enter your email" name="email"/>
								</div>
								<div className="input-box">
									<span className="details">Phone Number</span> <input type="tel" value={phone}  onChange={phoneData}
										placeholder="Enter your Phone Number" name="phone"/>
								</div>
								<div className="input-box">
									<span className="details">Password</span> <input type="password" value={password} onChange={passwordData}
										placeholder="Enter your password" name="password"/>
								</div>
                <div className="input-box">
									<span className="details">GST</span> <input type="number" value={gst}  onChange={gstData}
										placeholder="Enter your Age" name="gst"/>
								</div>
                </div>
           <center>
								<div id="div4">
   <Button variant="contained" color="secondary"  disableElevation focused onClick={handleSubmit}>  
      REGISTER
    </Button> 
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
  <p>Have an account already? <a href="/adminlogin">Log in</a></p>
  </div></center>
						</form>
					</div>
				</div>
			</div>
<br /><br /><br /><br />
<ToastContainer/>
<Footer/>
    </div> 
  )
}
export default AdminSignUp
