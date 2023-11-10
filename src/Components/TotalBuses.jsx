import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import style from'../Styles/addbus.css'
import Button from '@mui/material/Button';
import '../Styles/registration.css'
import '../Styles/carrental.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Footer';
const TotalBuses = () => {
let [content,setContent]=useState([])
let navigate=useNavigate()
  let bookBus=(value)=>{
    navigate(`/ticketbook/${value}`)
  }
  useEffect(()=>{
    axios.get("http://localhost:8080/buses").then((response)=>{
      console.log(response.data.data);
      setContent(response.data.data)
    })
    .catch(()=>{
        console.log("did not get the data");
    })
        },[])
  return (
    <div>
      <span className={style.spantab}>
           <table>
              <tr>
									<th>ID</th>
									<th>NAME</th>
									<th>FROM</th>
									<th>TO</th>
									<th>BUS NO</th>
									<th>DOP</th>
									<th>SEATS</th>
                  <th></th>
								</tr>
                {
                content.map((x)=>{
                    return(
                      <tr>
                      <td>{x.id}</td>
                      <td>{x.name}</td>
                      <td>{x.from}</td>
                      <td>{x.to}</td>
                      <td>{x.bus_no}</td>
                      <td>{x.dop}</td>
                      <td>{x.seats}</td>
                        <td>
                      <Button variant="contained" color="success"  disableElevation focused onClick={()=>{bookBus(x.id)}}>BOOK TICKET</Button> 
                      </td>
                    </tr>
                    )
                })
            }
       </table> 
       </span>
<Footer/>
</div>
  )
}
export default TotalBuses