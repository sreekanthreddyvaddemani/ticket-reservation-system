import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import style from'../Styles/addbus.css'
import Button from '@mui/material/Button';
import '../Styles/registration.css'
import '../Styles/carrental.css'
import axios from "axios"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Footer';
const FlightReservations = () => {
let [content,setContent]=useState([])
let navigate=useNavigate()
let {index}=useParams()
useEffect(()=>{
    axios.get(`http://localhost:8080/flight/${index}`).then((res)=>{
        setContent(res.data.data.flighttickets)
    }).catch(()=>{
        alert("No data")
    })
  },[])
 
  return (
    <div>
      <span className={style.spantab}>
           <table>
              <tr>
									<th>ID</th>
									<th>SEAT NUMBERS</th>
									<th>NO.OF SEATS</th>
									<th>COST</th>
									<th>TIME OF BOOKING</th>
								</tr>
                {
                content.map((x)=>{
                    return(
                      <tr>
                      <td>{x.id}</td>
                      <td>{x.seat_no}</td>
                      <td>{x.number_of_seats}</td>
                      <td>{x.cost}</td>
                      <td>{x.time_of_booking}</td>
                    </tr>
                    )
                })
            }
       </table> 
       </span>
       <br /><br />
       <center>
       {/* <Button variant="contained" color="success" onClick={onBack} disableElevation focused>BACK TO BUSLIST</Button>  */}
       </center>
      <Footer/>
    </div>
  )
}
export default FlightReservations
