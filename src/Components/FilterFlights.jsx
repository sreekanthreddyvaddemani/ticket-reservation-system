import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import style from "./homecrud.module.css"
import { Link, useNavigate } from "react-router-dom"
// import UserHome from './UserHome'
import style from'../Styles/addbus.css'
import Button from '@mui/material/Button';
// import '../Styles/registration.css'
import '../Styles/userlogin.css'
import Footer from './Footer';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import StarIcon from '@mui/icons-material/Star';
import Person2Icon from '@mui/icons-material/Person2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavUser from './NavUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FilterFlights = () => {


let [content,setContent]=useState([])
let navigate=useNavigate()
let filter=JSON.parse(localStorage.getItem('filter'))

  let bookFlight=(value)=>{
  localStorage.setItem("flight",JSON.stringify(value))

    navigate(`/flightbook/${value.id}`)
  }

    let back=()=>{
      navigate('/userhome')
     }

     useEffect(()=>{
      axios.get(`http://localhost:8080/flight/filter?from=${filter.from}&to=${filter.to}&dop=${filter.dop}`)
  .then((res)=>{
  setContent(res.data.data)
  console.log(res)
  }).catch(()=>{
    toast.error("Data Not Found",{
      position:toast.POSITION.TOP_CENTER
  })
  })
    },[])



    let noofSeats=(flight)=>{
    let num=0;
    for (let index = 0; index < flight.flighttickets.length; index++) {
    const element = flight.flighttickets[index];
    num=num+element.number_of_seats;
  }
  num=192-num;
  return num;
     }
  return (
    <div>
      <NavUser/>
      <div className="spantab">
                {
                content.map((x)=>{
                    return(
                    <div className="buslist">
                    <div className="busimg">
                    <img src={x.travel_img} alt="" />
                    </div>
            <div className="busd">
                       <div className="busdata">
                        <div className="travelname">
                        <center>
                        <h2>{x.name.toUpperCase()}</h2>
                        <h3>Flight No : {x.flight_no}</h3>
                        </center>
                          </div>
                   <div className="timedata">
                   <div className="time1">
                   <h3>{x.from.toUpperCase()}</h3>
              <p>{x.dop}</p>
              <p>{x.arrivaltime}</p>
       
            </div>
                    <div className="timebet">
            <p>-&nbsp;&nbsp;-<b>6:30 Hours</b>-&nbsp;&nbsp;-</p>
            </div>
            <div className="time2">
            <h3>{x.to.toUpperCase()}</h3>
              <p>{x.dop}</p>
              <p>{x.deptime}</p>
            </div>
            
            </div>
            
            
            </div>
            
            <div className="dropdata">
            <div className="rate">
              <div className="rate1">
            <StarIcon style={{ color: "#3d3c3c",height:"20px",width:"20px" }}/><p>4.7</p>
              </div>
              <div className="rate2">
                <Person2Icon style={{ color: "#3d3c3c",height:"20px",width:"20px" }}/><p>1.0M</p>
              </div>
            
            </div>
            </div>
            
            
            <div className="dropdown">
            <li><a href="">Boarding & Droping Point </a></li>
            <li><a href="">Cancellation Policy</a></li>
            <li><a href="">Travel Policy</a></li>
            <li><a href="">Amenities </a></li>
            <li><a href="">Offers </a></li>

            
            
            </div>
            
            
            
            </div>
            
            
            
            
            <div className="ticketcost">
            <center>
            <h3>COST PER SEAT</h3>
            <h1>&#8377;{x.cost_per_seat}</h1>
            <Button id="costbutton" variant="contained" color='error' placeholder='MM/DD/YYYY'  disableElevation focused onClick={()=>{bookFlight(x)}}>SHOW SEATS</Button > 
            <h4 id="nos">{noofSeats(x)} Seats Available</h4>
            </center>
            </div>
                  </div>
                    )
                })
            }
       </div>
<center>
<Button variant="contained" color='success' placeholder='MM/DD/YYYY'  disableElevation focused onClick={back} >BACK TO SEARCH</Button > 
</center>
<Footer/>
<ToastContainer/>
    </div> 
  )
}
export default FilterFlights