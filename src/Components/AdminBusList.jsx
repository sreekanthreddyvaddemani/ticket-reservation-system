import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import style from'../Styles/addbus.css'
import Button from '@mui/material/Button';
import '../Styles/registration.css'
import '../Styles/carrental.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Footer';

const AdminBusList = () => {
let [content,setContent]=useState([])
let admin=JSON.parse(localStorage.getItem('admin'))
let navigate=useNavigate()
useEffect(()=>{
  axios.get(`http://localhost:8080/admin/buses/${admin.id}`).then((response)=>{
    console.log(response.data.data);
    setContent(response.data.data)
  })
  .catch(()=>{
      console.log("did not get the data");
  })
      },[])


    let deleteData=(value)=>{
      axios.get(`http://localhost:8080/bus/delete/${value}`).then(()=>{
alert("Bus Deleted Successfully")
window.location.reload(false);
      }).catch(()=>{
        alert("Some Thing Is Wrong")
      })
  }

  let updateData=(value)=>{
    navigate(`/updatebus/${value}`)
}


let bookingTickets=(value)=>{
  axios.get(`http://localhost:8080/bus/${value}`).then((response)=>{
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
      <span className='spantab'>
           <table>
              <tr>
									<th>ID</th>
									<th>NAME</th>
									<th>FROM</th>
									<th>TO</th>
									<th>BUS NO</th>
									<th>DOP</th>
									<th>SEATS</th>
                  <th>IMAGE</th>
                  <th></th>

                  <th></th>
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
                      <td><img src={x.travel_img} alt="" /></td>

                      <td>
                        <Button variant="contained" color="primary"  disableElevation focused onClick={()=>{bookingTickets(x.id)}}>TICKETS</Button>                       
                      </td>
                      <td>
                      <Button variant="contained" color="success"  disableElevation focused onClick={()=>{updateData(x.id)}}>UPDATE</Button> 
                      
                      </td>
                      <td>
                        <Button variant="contained" color="error"  disableElevation focused onClick={()=>{deleteData(x.id)}}>DELETE</Button>                   
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

export default AdminBusList
