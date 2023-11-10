import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import style from'../Styles/addbus.css'
import Button from '@mui/material/Button';
// import '../Styles/registration.css'
// import '../Styles/carrental.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Footer';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import StarIcon from '@mui/icons-material/Star';
import Person2Icon from '@mui/icons-material/Person2';

const AdminTrainList = () => {
let [content,setContent]=useState([])
let admin=JSON.parse(localStorage.getItem('admin'))
let navigate=useNavigate()
useEffect(()=>{
  axios.get(`http://localhost:8080/admin/trains/${admin.id}`).then((response)=>{
    console.log(response.data.data);
    setContent(response.data.data)
  })
  .catch(()=>{
      console.log("did not get the data");
  })
      },[])

      let onclick=(index)=>{
navigate(`${index}`)

      }

    let deleteData=(value)=>{
    //   axios.delete(`http://localhost:8080/buses/delete/${value}`)
    //   window.location.reload(false);
  }
  let updateData=(value)=>{
    // console.log(value);
    // axios.get(`http://localhost:8080/buses/${value}`).then((res)=>{
    //   console.log(res);
    // }
    // )
    // window.location.reload(false);
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
      <div className="spantab">
                {
                content.map((x)=>{
                    return(
                    <div className="trainlist">
                  
                  <div className="train-com">
                  <div className="trainimg">
                    <img src={x.travel_img} alt="" />
                    </div>
                    <div className="trainview">
                      <center>

                      <div className="rate">
              <div className="rate1">
            <StarIcon style={{ color: "#3d3c3c",height:"20px",width:"20px" }}/><p>4.7</p>
              </div>
              <div className="rate2">
                <Person2Icon style={{ color: "#3d3c3c",height:"20px",width:"20px" }}/><p>1.0M</p>
              </div>
            </div>

                      {/* <Button id="viewbutton" variant="contained" color='inherit' placeholder='MM/DD/YYYY'  disableElevation focused >VIEWSCHEDULE</Button >  */}

                      </center>
                    </div>
                  </div>

            <div className="traind">
                       <div className="traindata">
                        <div className="travelname">
                        <center>
                        <h2>{x.name.toUpperCase()}</h2>
                        <h3>Train No : 11403/11404</h3>
                        </center>
                          </div>
                   <div className="timedata">
                   <div className="time1">
                   <h3>{x.from.toUpperCase()}</h3>
              <p>{x.dop}</p>
              <p>{x.arrivalTime}</p>
       
            </div>
                    <div className="timebet">
            <p>-&nbsp;&nbsp;-<b>6:30 Hours</b>-&nbsp;&nbsp;-</p>
            </div>
            <div className="time2">
            <h3>{x.to.toUpperCase()}</h3>
              <p>{x.dop}</p>
              <p>{x.depatureTime}</p>
            </div>
            
            </div>
            
            
            </div>
            
            <div className="trainseats">
           <div className="train-seat">

<div className="cost-type">
<h3>{x.seatOne}</h3>
<h3>&#8377;{x.seatOneCost}</h3>
</div>

<div className="availability">
<h3>21 Available</h3></div>
           </div>
           <div className="train-seat">
           <div className="cost-type">
           <h3>{x.seatTwo}</h3>
<h3>&#8377;{x.seatTwoCost}</h3>
           </div>
           <div className="availability">
           <h3>21 Available</h3>
           </div>


           </div>
           <div className="train-seat">
           <div className="cost-type">
           <h3>{x.seatThree}</h3>
<h3>&#8377;{x.seatThreeCost}</h3>
           </div>
           <div className="availability">
           <h3>21 Available</h3>
           </div>
           </div>
           <div className="train-seat" >
           <div className="cost-type">
           <h3>{x.seatFour}</h3>
<h3>&#8377;{x.seatFourCost}</h3>

           </div>
           <div className="availability">
           <h3>21 Available</h3>

           </div>
           </div>


            </div>
            
            
            <div className="dropdownt">
            <li><a href="">Boarding & Droping Point </a></li>
            <li><a href="">Cancellation Policy</a></li>
            <li><a href="">Travel Policy</a></li>
            <li><a href="">Amenities </a></li>
            <li><a href="">Offers </a></li>

            
            
            </div>
            
            
            
            </div>
            
            
            
            
            <div className="ticketcost">
            <div className="day">
            <h2>S</h2>
<h2>M</h2>
<h2>T</h2>
<h2>W</h2>
<h2>T</h2>
<h2>F</h2>
<h2>S</h2>
            </div>
            <center>



            


            {/* <div className="location"> */}
            {/* <MyLocationIcon style={{ color: "#3d3c3c",height:"20px",width:"20px" }}/><p>LocationTracker</p> */}
            {/* </div> */}
            <Button className="costbutton"  variant="contained" color='success' placeholder='MM/DD/YYYY'  disableElevation focused >Shedule</Button > 
            <Button className="costbutton" variant="contained" color='primary' placeholder='MM/DD/YYYY'  disableElevation focused onClick={()=>{onclick(x.id)}}>Tickets</Button > 
            <Button className="costbutton" variant="contained" color='secondary' placeholder='MM/DD/YYYY'  disableElevation focused >Update</Button > 
            <Button className="costbutton" variant="contained" color='error' placeholder='MM/DD/YYYY'  disableElevation focused >Delete</Button > 
           
            </center>
            </div>
                  </div>
                    )
                })
            }
       </div>

<br /><br /><br />
<center>
<Button variant="contained" color="success"  disableElevation focused onClick={goBack}>BACK TO ADMIN HOME PAGE</Button> 

</center>
<Footer/>
    </div> 
  )
}

export default AdminTrainList
