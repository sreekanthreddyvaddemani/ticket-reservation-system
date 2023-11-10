import React from 'react'
import axios from "axios"
import img1 from '../Images/google-colored-20b8216731.svg'
import img2 from '../Images/facebook-colored-af4249157d.svg'
import img3 from '../Images/download.png'
import img4 from '../Images/linkedin-colored-1db195795c.svg'
import img5 from '../Images/github-colored-1db995054b.svg'
import '../Styles/landinguserhomepage.css'
import Button from '@mui/material/Button';
import '../Styles/carrental.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
const Footer = () => {
  return (
    <div>
<div className="subscribe">
<h1>Subscribe to see Secret Deals</h1>
<div className="searchbar">
<label>Enter Email Address</label>
<Paper className="paper"
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
  >
    <IconButton sx={{ p: '10px' }} aria-label="menu">
      <EmailIcon style={{ color: "black", height:"30px", width:"30px"}}/>
    </IconButton>
    <InputBase className="search"
      sx={{ ml: 0, flex: 1 }}
      placeholder="Email Address"
      inputProps={{ 'aria-label': 'search google maps' }}
    />
    <Button className="subscribebutton" variant="contained" color="primary"  disableElevation focused >  
            Subscribe
            </Button>
  </Paper>
  <p><LockIcon style={{ color: "rgb(120, 117, 117)", height:"15px", width:"15px"}}/>Don't worry your information is safe with us.</p>
</div>
</div>
<div class="footer">
  <center>
    <div className="circle">
<div id="barnav1"><br />
<h2>Book Your Ticket Enjoy Your Trip</h2>
<br />
<ul>
  <li>Bus</li>
  <li>Car</li>
  <li>Train</li>
</ul>
</div>
<div id="barnav3">
<Button className="signupbutton"   disableElevation focused >  
            Sign Up &#x2192;
            </Button>
            <Button className="signinbebutton"  disableElevation focused >  
            Sign in &#x2192;
            </Button>
</div>
    </div>
  </center>
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Compressions</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Collection</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="#">Free Trip</a></li>
            <li><a href="#">Discounts</a></li>
            <li><a href="#">Buses</a></li>
            <li><a href="#">Popular Travels</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">New Updates</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Tour Update</h4>
          <p>
            Subscribe to our Travalite for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div class="icons">
            <img src={img1}alt="" />
            <img src={img2}alt="" />
            <img className="img3" src={img3}alt="" />
            <img  src={img4}alt="" />
            <img  className="img3" src={img5}alt="" />
          </div>
        </div>
      </div>
      <div className="last">
      <div className="lastnav">
         <li>	&#169;2023 Travalite</li>
         <li>Terms</li>
         <li>Privacy</li>
</div>
  <h3>ALL SYSTEM OPERATIONAL</h3>
</div>
    </div>
    </div>
  )
}
export default Footer
