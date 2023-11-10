import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Footer from './Footer';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import img1 from '../Images/shutterstock_1325384843.webp';
const TrackTicket = () => {
let [ticketno,setTicketno]=useState("")
let[email,setEmail]=useState("")

  let emailData=(e)=>{
    setEmail(e.target.value)
}
let ticketData=(e)=>{
  setTicketno(e.target.value)
}

  let handleSubmit=()=>{
let buscode=ticketno.substring(0,6)
    axios.get(`http://localhost:8080/bus/buscode?buscode=${buscode}&email=${email}`).then((res)=>{
      toast.success("Location has been sended to your mail",{
        position:toast.POSITION.TOP_CENTER
      })
    }).catch(()=>{
      toast.error("Sorry No Ticket Matched",{
        position:toast.POSITION.TOP_CENTER
      })
    })

  }


  return (
    <div>
      <Navbar/>
      <div className="trackmain">
      <center>
<img src={img1} alt="" id="trackticket"/>
</center>
      <br /><br />
<div className="track-form">
<div className="track-form1">
<center>
<h1>Enter Ticket Details</h1>
</center>
<center>
<h3>
Check your email or SMS that you received while booking
</h3>
</center>
<div className="track-field">
      <TextField className="outlined-basic" label="ENTER TICKET NUMBER" type="text" variant="outlined" name="buscode" value={ticketno} onChange={ticketData} color="secondary" />
      <TextField className="outlined-basic" label="ENTER EMAIL ID" type="text" variant="outlined" name="email" value={email} onChange={emailData} color="secondary"/>
    <Button id="track-button" variant="contained" color="success"  disableElevation focused onClick={handleSubmit} >Track Ticket</Button> 
</div>
</div>
    </div>
<br />
<div className="demovedio">
  <center><h1>How It Work</h1></center>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta facere sit cum sed, explicabo ipsum amet unde cumque saepe eos quidem provident iste aspernatur quasi, culpa dolores ratione itaque tenetur?
  Consequuntur similique mollitia laborum ullam in, ipsam voluptates ab cupiditate reiciendis nostrum accusamus veniam ipsa fugiat nulla facilis nisi animi at eos repellendus sint veritatis! Omnis nostrum architecto excepturi molestias.
  Natus corrupti aliquid tempore voluptatibus ratione asperiores tempora odio, atque recusandae alias, commodi modi libero? Officiis, nesciunt nam. Natus doloremque tempore rem. Perferendis maiores necessitatibus est incidunt! Dolor, vitae corrupti!
  Vel iure, laborum vero aliquam reprehenderit ipsum blanditiis asperiores officia! Repellat sint nihil in, eum hic iusto expedita, laboriosam fugiat dolorum eius id? Ullam, at autem corrupti doloribus praesentium reprehenderit.
 omnis repudiandae quis cupiditate aliquam facilis provident totam, mollitia tempore distinctio dicta nisi consectetur odit maxime reprehenderit modi autem! Quibusdam, consequatur vero! Ut, adipisci?
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta facere sit cum sed, explicabo ipsum amet unde cumque saepe eos quidem provident iste aspernatur quasi, culpa dolores ratione itaque tenetur?
  Consequuntur similique mollitia laborum ullam in, ipsam voluptates ab cupiditate reiciendis nostrum accusamus veniam ipsa fugiat nulla facilis nisi animi at eos repellendus sint veritatis! Omnis nostrum architecto excepturi molestias.
  Natus corrupti aliquid tempore voluptatibus ratione asperiores tempora odio, atque recusandae alias, commodi modi libero? Officiis, nesciunt nam. Natus doloremque tempore rem. Perferendis maiores necessitatibus est incidunt! Dolor, vitae corrupti!
  Vel iure, laborum vero aliquam reprehenderit ipsum blanditiis asperiores officia! Repellat sint nihil in, eum hic iusto expedita, laboriosam fugiat dolorum eius id? Ullam, at autem corrupti doloribus praesentium reprehenderit.
  Eos quasi ratione delectus doloremque iusto omnis repudiandae quis cupiditate aliquam facilis provident totam, mollitia tempore distinctio dicta nisi consectetur odit maxime reprehenderit modi autem! Quibusdam, consequatur vero! Ut, adipisci?
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta facere sit cum sed, explicabo ipsum amet unde cumque saepe eos quidem provident iste aspernatur quasi, culpa dolores ratione itaque tenetur?
  Consequuntur similique mollitia laborum ullam in, ipsam voluptates ab cupiditate reiciendis nostrum accusamus veniam ipsa fugiat nulla facilis nisi animi at eos repellendus sint veritatis! Omnis nostrum architecto excepturi molestias.
  Natus corrupti aliquid tempore voluptatibus ratione asperiores tempora odio, atque recusandae alias, commodi modi libero? Officiis, nesciunt nam. Natus doloremque tempore rem. Perferendis maiores necessitatibus est incidunt! Dolor, vitae corrupti!
  Vel iure, laborum vero aliquam reprehenderit ipsum blanditiis asperiores officia! Repellat sint nihil in, eum hic iusto expedita, laboriosam fugiat dolorum eius id? Ullam, at autem corrupti doloribus praesentium reprehenderit.
  Eos quasi ratione delectus doloremque iusto omnis repudiandae quis cupiditate aliquam facilis provident totam, mollitia tempore distinctio dicta nisi consectetur odit maxime reprehenderit modi autem! Quibusdam, consequatur vero! Ut, adipisci?
</p>
</div>
    <div id="track-details">
    <div id="track-details1">
    <center>
<h1>The journey of a thousand miles begins with a single step</h1>
<div id="track-buttons">
<Button id="track-button1" variant="contained" color="warning"  disableElevation focused>Track Demo <ChevronRightIcon/></Button> 
<Button id="track-button2" variant="outlined" color="warning"  disableElevation focused href="#trackticket">Get Started <ChevronRightIcon/></Button> 
</div>
</center>
</div>
    </div>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}
export default TrackTicket
