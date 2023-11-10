import axios from "axios"
import React, { useState } from 'react'
import img1 from '../Images/google-colored-20b8216731.svg'
import img2 from '../Images/facebook-colored-af4249157d.svg'
import img3 from '../Images/download.png'
import img4 from '../Images/linkedin-colored-1db195795c.svg'
import img5 from '../Images/github-colored-1db995054b.svg'
import '../Styles/landinguserhomepage.css'
import Button from '@mui/material/Button';
import off1 from '../Images/off1.png'
import img15 from '../Images/img15.jpg'
import img16 from '../Images/img16.jpg'
import img17 from '../Images/img17.jpg'
import img18 from '../Images/img18.jpg'
import img19 from '../Images/img19.jpg'
import img20 from '../Images/img20.jpg'
import logo7 from '../Images/delta-airline-logo.png'
import logo6 from '../Images/cathay-pacific-airline-logo.png'
import logo5 from '../Images/american-airline.png'
import logo8 from '../Images/air-france.png'
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/carrental.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ChairIcon from '@mui/icons-material/Chair';
import RoomIcon from '@mui/icons-material/Room';
import ParkIcon from '@mui/icons-material/Park';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
import { useEffect } from "react"
const LandingHomePage = () => {
let [from,setFrom]=useState("kadapa")
let [to,setTo]=useState("bengaluru")
let [dop,setDop]=useState("14-10-2023")
let nav=useNavigate()

let fromData=(e)=>{
    setFrom(e.target.value)
}
let toData=(e)=>{
    setTo(e.target.value)
}
let dopData=(e)=>{
    setDop(e.target.value)
    
}
let handleSubmit=(e)=>{
    e.preventDefault()
    let data={from,to,dop}
if(data.from!='' && data.to!='' &&data.dop!=''){
  localStorage.setItem("filter",JSON.stringify(data))
  nav("/filterbuses")
}
else{
  toast.error("Please Enter Route Details",{
          position:toast.POSITION.TOP_CENTER
      })
}

}
  return (
    <div>
      <div id="bg">
        <br></br><br/>
        <center>
<h1>BUS TICKET BOOKING SITE</h1>
</center>
<form action="">
<div id="div1">
<TextField className='datefield1'  label="FROM" type="text" color="secondary" focused placeholder='Enter Place' name={from} value={from} onChange={fromData}/>
</div>
<div id="div2">
<TextField className='datefield1'  label="TO" type="text"  color="secondary" focused placeholder='Enter Place' name={to} value={to} onChange={toData}/>
  </div>
<div id="div3">
<TextField className='datefield' label="SELECT DATE" type="date" color="secondary" focused  name={dop} value={dop} onChange={dopData}/>
  </div>
<div id="div4">
   <Button variant="contained" color="secondary" placeholder='MM/DD/YYYY'  disableElevation focused onClick={handleSubmit} >  
      SEARCH BUSES
    </Button> 
    </div>
</form>
</div>
<ToastContainer/>
<div id="slide2">
  <center><h1>Trending Offers</h1></center>
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide style={{ height:"180px", width:"290px" ,borderRadius:"20px"}}>
        <div className="off" id="offer1">
        <div className="off1">
  <div className="one">
  <img src={off1} alt="" />
  </div>
  <div className="data">
    <button className="b1">BUS</button>
    <h3>Save up to Rs 250 on bus tickets</h3>
    <h5>Valid till 30 sep</h5>
    <button className="b2">FIRST</button>&nbsp;&nbsp;<ContentCopyIcon style={{ color: "white", height:"15px",marginTop:"5px"}}/>
  </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide style={{ height:"180px", width:"290px"}}>
        <div className="off" id="offer2">
        <div className="off1">
  <div className="one">
  <img src={off1} alt="" />
  </div>
  <div className="data">
    <button className="b1">BUS</button>
    <h3>Save up to Rs 250 on bus tickets</h3>
    <h5>Valid till 30 sep</h5>
    <button className="b2">FIRST</button>&nbsp;&nbsp;<ContentCopyIcon style={{ color: "white", height:"15px",marginTop:"5px"}}/>
  </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide style={{ height:"180px", width:"290px"}}>
        <div className="off" id="offer3">
        <div className="off1">
  <div className="one">
  <img src={off1} alt="" />
  </div>
  <div className="data">
    <button className="b1">BUS</button>
    <h3>Save up to Rs 250 on bus tickets</h3>
    <h5>Valid till 30 sep</h5>
    <button className="b2">FIRST</button>&nbsp;&nbsp;<ContentCopyIcon style={{ color: "white", height:"15px",marginTop:"5px"}}/>
  </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide style={{ height:"180px", width:"290px"}}> <div className="off" id="offer4">
        <div className="off1">
  <div className="one">
  <img src={off1} alt="" />
  </div>
  <div className="data">
    <button className="b1">BUS</button>
    <h3>Save up to Rs 250 on bus tickets</h3>
    <h5>Valid till 30 sep</h5>
    <button className="b2">FIRST</button>&nbsp;&nbsp;<ContentCopyIcon style={{ color: "white", height:"15px",marginTop:"5px"}}/>
  </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide style={{ height:"180px", width:"290px"}}>

        <div className="off" id="offer9">
        <div className="off1">
  <div className="one">
  <img src={off1} alt="" />
  </div>
  <div className="data">
    <button className="b1">BUS</button>
    <h3>Save up to Rs 250 on bus tickets</h3>
    <h5>Valid till 30 sep</h5>
    <button className="b2">FIRST</button>&nbsp;&nbsp;<ContentCopyIcon style={{ color: "white", height:"15px",marginTop:"5px"}}/>
  </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide style={{ height:"180px", width:"290px"}}>
        <div className="off" id="offer5">
        <div className="off1">
  <div className="one">
  <img src={off1} alt="" />
  </div>
  <div className="data">
    <button className="b1">BUS</button>
    <h3>Save up to Rs 250 on bus tickets</h3>
    <h5>Valid till 30 sep</h5>
    <button className="b2">FIRST</button>&nbsp;&nbsp;<ContentCopyIcon style={{ color: "white", height:"15px",marginTop:"5px"}}/>
  </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide style={{ height:"180px", width:"290px"}}>

        <div className="off" id="offer6">
        <div className="off1">
  <div className="one">
  <img src={off1} alt="" />
  </div>
  <div className="data">
    <button className="b1">BUS</button>
    <h3>Save up to Rs 250 on bus tickets</h3>
    <h5>Valid till 30 sep</h5>
    <button className="b2">FIRST</button>&nbsp;&nbsp;<ContentCopyIcon style={{ color: "white", height:"15px",marginTop:"5px"}}/>
  </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide style={{ height:"180px", width:"290px"}}>

        <div className="off" id="offer7">
        <div className="off1">
  <div className="one">
  <img src={off1} alt="" />
  </div>
  <div className="data">
    <button className="b1">BUS</button>
    <h3>Save up to Rs 250 on bus tickets</h3>
    <h5>Valid till 30 sep</h5>
    <button className="b2">FIRST</button>&nbsp;&nbsp;<ContentCopyIcon style={{ color: "white", height:"15px",marginTop:"5px"}}/>
  </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide style={{ height:"180px", width:"290px"}}>

        <div className="off" id="offer8">
        <div className="off1">
  <div className="one">
  <img src={off1} alt="" />
  </div>
  <div className="data">
    <button className="b1">BUS</button>
    <h3>Save up to Rs 250 on bus tickets</h3>
    <h5>Valid till 30 sep</h5>
    <button className="b2">FIRST</button>&nbsp;&nbsp;<ContentCopyIcon style={{ color: "white", height:"15px",marginTop:"5px"}}/>
  </div>
  </div>
</div>
        </SwiperSlide>
      </Swiper>
</div>
{/* 3 */}
<div className="det">
<div className="cons">
<center>
<ErrorOutlineIcon style={{ color: "blue", height:"50px", width:"50px" ,marginTop:"25px"}}/>
<h3>Traveling during COVID-19</h3>
<br />
<p>Find all the current information about our network.</p>
<br />
<a href="">Check here  &gt;</a>
</center>
</div>
<div className="cons">
<center>
<ChairIcon style={{ color: "blue", height:"50px", width:"50px",marginTop:"25px"}}/>
<h3>Comfort on board</h3>
<br />
<p>Our buses are equipped with large and comfortable seats, a toilet, Wi-Fi.</p>
<br />
<a href="">Our onboard service  &gt;</a>
</center>
</div>
<div className="cons">
<center>
<RoomIcon style={{ color: "blue", height:"50px", width:"50px",marginTop:"25px"}}/>
<h3>Largest bus network in India</h3>
<br />
<p>Choose from over 2,500 travel destinations in 35 countries.</p>
<br />
<a href="">Our route network  &gt;</a>
</center>
</div>
<div className="cons">
<center>
<ParkIcon style={{ color: "blue", height:"50px", width:"50px",marginTop:"25px"}}/>
<h3>Travel environmentally-friendly</h3>
<br />
<p>Our efficient coaches are proven to have an excellent carbon footprint.</p>
<br />
<a href="">Bus travel and environment  &gt;</a>
</center>
</div>
</div>
<br />
<br />
<br />
{/* Explore */}
<div className="explore">
  <img src="" alt="" />
<div className="exp">
<h1>Discover all destinations</h1>
<br />
<h3>
Choose from over 2,500 travel destinations in 34 countries.
</h3>
<br />
<Button variant="contained" color="primary"  disableElevation focused >  
              Explore The Map &gt;
            </Button>
</div>
</div>
   {/* Featured Flight Deals */}
<div className="box-components"><br /><br />
  <center><h1>Featured Flight Deals</h1></center>
<div className="box-data">
<div className="box-temp">
<div className="box-img">
<img src={img15} alt="" />
</div>
<div className="box-details">
<div className="box-card">
  <img src={logo5} alt="" />
<h3>London to Paris</h3>
  <p>One way Flight</p>
  <p>From <b>$399.00</b><a href="">Read Details &gt;</a> </p>
</div>
</div>
</div>
<div className="box-temp">
<div className="box-img">
<img src={img16} alt="" />
</div>
<div className="box-details">
<div className="box-card">
  <img src={logo6} alt="" />
<h3>Dubai to Spain</h3>
  <p>Round-trip Flight</p>
  <p>From <b>$570.00</b><a href="">Read Details &gt;</a> </p>
</div>
</div>
</div>
<div className="box-temp">
<div className="box-img">
<img src={img17} alt="" />
</div>
<div className="box-details">
<div className="box-card">
  <img src={logo7} alt="" />
<h3>
Bangkok to Australia</h3>
  <p>One way Flight</p>
  <p>From <b>$299.00</b><a href="">Read Details &gt;</a> </p>
</div>
</div>
</div>
<div className="box-temp">
<div className="box-img">
<img src={img18} alt="" />
</div>
<div className="box-details">
<div className="box-card">
  <img src={logo7} alt="" />
<h3>London to Turkey</h3>
<p>Round-trip Flight</p>
  <p>From <b>$399.00</b><a href="">Read Details &gt;</a> </p>
</div>
</div>
</div>
<div className="box-temp">
<div className="box-img">
<img src={img19} alt="" />
</div>
<div className="box-details">
<div className="box-card">
  <img src={logo8} alt="" />
<h3>New york to Dubai</h3>
  <p>Round-trip Flight</p>
  <p>From <b>$599.00</b><a href="">Read Details &gt;</a> </p>
</div>
</div>
</div>
<div className="box-temp">
<div className="box-img">
<img src={img20} alt="" />
</div>
<div className="box-details">
<div className="box-card">
  <img src={logo6} alt="" />
<h3>Dhaka to Chicago</h3>
  <p>One way Flight</p>
  <p>From <b>$399.00</b><a href="">Read Details &gt;</a> </p>
</div>
</div>
</div>
</div>
</div>
{/* Slide show */}
<div className="slide">
<Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide-show">
        <div className="carousel-item">
    <center>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <h2>" Polite and Professional "</h2>
        <h3>Happy</h3>
      </center>
    </div>
        </SwiperSlide>
        <SwiperSlide className="slide-show">
          <div class="carousel-item">
    <center>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <h2>" To Travel is to Live "</h2>
        <h3>Happy</h3>
      </center>
    </div></SwiperSlide>
        <SwiperSlide className="slide-show">
          <div class="carousel-item">
    <center>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <h2>" Job fill your Pocket but Adventure fill your Soul "</h2>
        <h3>Happy</h3>
      </center>
    </div></SwiperSlide>
        <SwiperSlide className="slide-show">
          <div class="carousel-item">
    <center>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <h2>" Take Only memories,Leave only FootPrints "</h2>
        <h3>Happy</h3>
      </center>
    </div></SwiperSlide>
        <SwiperSlide className="slide-show">
        <div class="carousel-item">
    <center>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <StarIcon style={{ color: "gold", height:"30px", width:"30px",marginTop:"25px"}}/>
        <h2>" Live Your life by a Compass Not A clock "</h2>
        <h3>Happy</h3>
      </center>
    </div>
        </SwiperSlide>
      </Swiper>
      <center>
<Button className="slide-button" variant="contained" color="primary"  disableElevation focused style={{outline:"none"}}>  
              All Comments
            </Button>
            <p>Sounds too good to be true? Have a look at all the reviews (477)</p>
</center>
</div>
<Footer/>
</div>
  )
}
export default LandingHomePage
