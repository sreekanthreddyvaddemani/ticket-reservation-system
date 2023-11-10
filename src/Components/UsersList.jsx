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
const UsersList = () => {
let [content,setContent]=useState([])
let navigate=useNavigate()
useEffect(()=>{
  axios.get("http://localhost:8080/users").then((response)=>{
    console.log(response.data.data);
    setContent(response.data.data)
  })
  .catch(()=>{
      console.log("did not get the data");
  })
      },[])

      let bookingTickets=(value)=>{
        axios.get(`http://localhost:8080/users/${value}`).then((response)=>{
          localStorage.setItem("tickets",JSON.stringify(response.data.data.tickets))
          navigate('/adminhomepage/reservations')
        }).catch(()=>{
          alert("someThing is wrong")
        })
      }

    let goBack=()=>{
navigate("/adminhomepage")
    }

  return (
    <div>
      <span className={style.spantab}>
           <table>
              <tr>
									<th>ID</th>
									<th>NAME</th>
									<th>EMAIL</th>
									<th>PASSWORD</th>
									<th>PHONE</th>
									<th>AADHAR NUMBER</th>
									<th>DATE OF BIRTH</th>
                  <th></th>
								</tr>
                {
                content.map((x)=>{
                    return(
                      <tr>
                      <td>{x.id}</td>
                      <td>{x.name}</td>
                      <td>{x.email}</td>
                      <td>{x.password}</td>
                      <td>{x.phone}</td>
                      <td>{x.adhaar}</td>
                      <td>{x.dob}</td>
                      <td>
                        <Button variant="contained" color="primary"  disableElevation focused onClick={()=>{bookingTickets(x.id)}}>TICKETS</Button> 
                      </td>
                    </tr>
                    )
                })
            }
       </table> 
       </span>
       <br /><br /><br />
<center>
<Button variant="contained" color="success"  disableElevation focused onClick={goBack}>BACK TO ADMIN HOME PAGE</Button> 
</center>
<Footer/>
    </div> 
  )
}
export default UsersList

