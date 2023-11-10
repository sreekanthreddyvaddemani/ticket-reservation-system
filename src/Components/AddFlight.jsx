import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/addbus.css'
import Button from '@mui/material/Button';
import Footer from './Footer';
const AddFlight = () => {
let [name,setName]=useState("")
let [from,setFrom]=useState("")
let [to,setTo]=useState("")
let [cost_per_seat,setCost]=useState("")
let [flight_no,setflight_no]=useState("")
let [dop,setDop]=useState("")
let [seats,setSeats]=useState("")
let [deptime,setDepTime]=useState("")
let [arrivaltime,setArrivalTime]=useState("")
let [travel_img,setTravel_img]=useState("")
let admin=JSON.parse(localStorage.getItem('admin'))
let nameData=(e)=>{
    setName(e.target.value)
}
   let fromData=(e)=>{
    setFrom(e.target.value)
}
let toData=(e)=>{
    setTo(e.target.value)
}
   let flight_noData=(e)=>{
    setflight_no(e.target.value)
}
let dopData=(e)=>{
    setDop(e.target.value)
}
   let seatsData=(e)=>{
    setSeats(e.target.value)
}
   
let depTimeData=(e)=>{
    setDepTime(e.target.value)
}
let arriavalData=(e)=>{
    setArrivalTime(e.target.value)
}
let costData=(e)=>{
    setCost(e.target.value)
}
let travel_imgData=(e)=>{
    setTravel_img(e.target.value)
}
let handleSubmit=(e)=>{
    e.preventDefault()
let flightcode =Math.floor(Math.random() * (999999 - 100000)) + 100000

    let data={name,from,to,cost_per_seat,flight_no,dop,seats,deptime,arrivaltime,travel_img,flightcode}
axios.post(`http://localhost:8080/flight/${admin.id}`,data)
.then(()=>{
toast.success("Flight Added Successfully",{
    position:toast.POSITION.TOP_CENTER
})
}).catch(()=>{
toast.error("Flight Not Added",{ 
    position:toast.POSITION.TOP_CENTER
})

})
}
return (
<div id="main12">
<div id="scroll12">
                <div className="container12">
                    <center><div className="title12">FLIGHT REGISTRATION</div></center>
                    <div className="content12">
                        <form action="">
                            <div className="user-details12">
                                <div className="input-box12">
                                    <span className="details12">Travel Name</span> <input type="text" id="" value={name} onChange={nameData} 
                                        placeholder="Enter Travels Name" name="name"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">Flight Number</span> <input type="text" value={flight_no}  onChange={flight_noData}
                                        placeholder="Enter Flight Number " name="flight_no"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">From</span> <input type="text" id="" value={from}  onChange={fromData}
                                        placeholder="Enter From Adress" name="from"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">To</span> <input type="text" value={to}  onChange={toData}
                                        placeholder="Enter To Adress" name="to"/>
                                </div>
                                 <div className="input-box12">
                                    <span className="details12">Date Of Departure</span> <input type="date" value={dop} onChange={dopData}
                                        placeholder="Enter Date of Departure" name="dob"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">Seats</span> <input type="number" value={seats}  onChange={seatsData}
                                        placeholder="Enter Seats" name="seats"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">Departure Time</span> <input type="time" value={deptime} onChange={depTimeData}
                                        placeholder="Enter Departure Time" name="dob"/>
                                </div>  
                                <div className="input-box12">
                                    <span className="details12">Arriaval Time</span> <input type="time" value={arrivaltime} onChange={arriavalData}
                                        placeholder="Enter Arriaval Time" name="dob"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12" >Cost Per Seat</span> <input type="number" value={cost_per_seat} onChange={costData}
                                        placeholder="Enter Number of seats" name="cost_per_seat"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12" >TravelImage URL</span> <input type="url" value={travel_img} onChange={travel_imgData}
                                        placeholder="Enter Travel Image URL" name="travel_img"/>
                                </div>         
                </div>
           <center>
    <div id="div412">
          <Button variant="contained" color="error"  disableElevation focused onClick={handleSubmit}>REGISTER</Button> 
    </div>
                </center>
<br/>      </form>
                    </div>
                </div>
            </div>
<ToastContainer/>
            <Footer/>

            </div>
  )
}
export default AddFlight
