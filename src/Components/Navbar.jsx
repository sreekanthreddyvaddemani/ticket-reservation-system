import React from 'react'
import '../Styles/navbar.css'
import LuggageIcon from '@mui/icons-material/Luggage';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
const Navbar = () => {
  let navigate=useNavigate()
  let submit=()=>{
    navigate("/")
  }
  return (
    <div>
      <div id="nav">
      <div id="logo">
        <div id='logo1' onClick={submit}>
          <div id='logo2'>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"white" } }/>
            <h2>LONG</h2></div>
            <div id='logo3'>
            <h2>TRIP</h2>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"black" } }/>
            </div>
        </div>
      </div>
      <div id="contents1">
             <div className="con"><LocalOfferIcon style={{ color: "black" }}/><li id=""><a href="/offers">OFFERS</a></li></div>
             <div className="con" ><InfoIcon style={{ color: "black" }}/>&nbsp;<li><a href="/about">ABOUT US</a></li></div>
             <div className="con" id="location"><ShareLocationIcon style={{ color: "black" }}/><li id=""><a href="/track">TRACK TICKET</a></li></div>
      </div>
      <h2 id="line">|</h2>

      <div id="contents2">
      <div className="con2">
      <li id=""><a href="/adminlogin">ADMIN LOGIN</a></li></div>
      <div className="con2">
        <li id=""><a href="/userlogin">USER LOGIN</a></li></div>
      </div>
      </div>
    </div>
  )
}
export default Navbar
