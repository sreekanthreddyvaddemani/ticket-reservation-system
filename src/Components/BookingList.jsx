import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import style from'../Styles/addbus.css'
import Button from '@mui/material/Button';
const BookingList = () => {
  let [content,setContent]=useState([])
let navigate=useNavigate()
let user=JSON.parse(localStorage.getItem('user'))
useEffect(()=>{
    axios.get(`http://localhost:8080/users/tickets/${user.id}`).then((res)=>{
    setContent(res.data.data)
    console.log(content)
    }).catch(()=>{
      console.log("data is Not fetch")
    })
  },[])
 let onBack=()=>{
    navigate('/userhome')
  }
  return (
    <div>
      <span className={style.spantab}>
           <table>
              <tr>
									<th>ID</th>
                  <th>TICKET NO</th>
                  <th>FROM</th>
                  <th>TO</th>
									<th>SEAT NUMBERS</th>
									<th>NO.OF SEATS</th>
									<th>COST</th>
									<th>TIME OF BOOKING</th>
									<th>USER ID</th>
								</tr>
                {
                content.map((x)=>{
                    return(
                      <tr>
                      <td>{x.id}</td>
                      <td>{x.ticketnumber}</td>
                      <td>{x.from}</td>
                      <td>{x.to}</td>
                      <td>{x.seat_no}</td>
                      <td>{x.number_of_seats}</td>
                      <td>{x.cost}</td>
                      <td>{x.time_of_booking}</td>
                      <td>{user.name}</td>
                    </tr>
                    )
                })
            }
       </table> 
       </span>
       <br /><br />
       <center>
       <Button variant="contained" color="success" onClick={onBack} disableElevation focused>BACK TO BUSLIST</Button> 

       </center>
    </div>
  )
}
export default BookingList
