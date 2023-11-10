import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/addbus.css'
import Button from '@mui/material/Button';
import Footer from './Footer';
const AddTrain = () => {
let [name,setName]=useState("")
let [from,setFrom]=useState("")
let [to,setTo]=useState("")
let [trainNumber,setTrainNo]=useState("")
let [dop,setDop]=useState("")
let [depatureTime,setDepTime]=useState("")
let [arrivalTime,setArrivalTime]=useState("")
let [travel_img,setTravel_img]=useState("")
let [seatOneCost,setCostOne]=useState()
let [seatTwoCost,setCostTwo]=useState()
let [seatThreeCost,setCostThree]=useState()
let [seatFourCost,setCostFour]=useState()

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
   let trainNoData=(e)=>{
    setTrainNo(e.target.value)
}
let dopData=(e)=>{
    setDop(e.target.value)
}
  let seatOneCostData=(e)=>{
    setCostOne(e.target.value)
  }
  let seatTwoCostData=(e)=>{
    setCostTwo(e.target.value)
  }
  let seatThreeCostData=(e)=>{
    setCostThree(e.target.value)
  }
  let seatFourCostData=(e)=>{
    setCostFour(e.target.value)
  }
   
let depTimeData=(e)=>{
    setDepTime(e.target.value)
}
let arriavalData=(e)=>{
    setArrivalTime(e.target.value)
}

let travel_imgData=(e)=>{
    setTravel_img(e.target.value)
}
let handleSubmit=(e)=>{
    e.preventDefault()
    let seatOne="G"
    let seatTwo="1A"
    let seatThree="2A"
    let seatFour="3A"
// let buscode = Math.floor((Math.random()*1000000) );
let traincode =Math.floor(Math.random() * (999999 - 100000)) + 100000
    let data={seatOne,seatTwo,seatThree,seatFour,name,from,to,trainNumber,dop,depatureTime,arrivalTime,travel_img,traincode,seatOneCost,seatTwoCost,seatThreeCost,seatFourCost}
axios.post(`http://localhost:8080/train/${admin.id}`,data)
.then(()=>{
toast.success("Train Added Successfully",{
    position:toast.POSITION.TOP_CENTER
})
}).catch(()=>{
toast.error("Train Not Added",{ 
    position:toast.POSITION.TOP_CENTER
})

})
}
return (
<div id="main12">
<div id="scroll12">
                <div className="container12">
                    <center><div className="title12">BUS REGISTRATION</div></center>
                    <div className="content12">
                        <form action="">
                            <div className="user-details12">
                                <div className="input-box12">
                                    <span className="details12">Train Name</span> <input type="text" id="" value={name} onChange={nameData} 
                                        placeholder="Enter Travels Name" name="name"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12">Train Number</span> <input type="text" value={trainNumber}  onChange={trainNoData}
                                        placeholder="Enter Bus Number " name="text"/>
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
                                    <span className="details12">Departure Time</span> <input type="time" value={depatureTime} onChange={depTimeData}
                                        placeholder="Enter Departure Time" name="dob"/>
                                </div>  
                                <div className="input-box12">
                                    <span className="details12">Arriaval Time</span> <input type="time" value={arrivalTime} onChange={arriavalData}
                                        placeholder="Enter Arriaval Time" name="dob"/>
                                </div>
                               
                                <div className="input-box12">
                                    <span className="details12" >TravelImage URL</span> <input type="url" value={travel_img} onChange={travel_imgData}
                                        placeholder="Enter Travel Image URL" name="travel_img"/>
                                </div>
                                <div className="input-box12">
                                    <span className="details12" >SL COST PER SEAT</span> <input type="number" value={seatOneCost} onChange={seatOneCostData}
                                        placeholder="Enter Cost" name="seatOneCost"/>
                                </div>   
                                <div className="input-box12">
                                    <span className="details12" >1A COST PER SEAT</span> <input type="number" value={seatTwoCost} onChange={seatTwoCostData}
                                        placeholder="Enter Cost" name="seatOneCost"/>
                                </div>   <div className="input-box12">
                                    <span className="details12" >2A COST PER SEAT</span> <input type="number" value={seatThreeCost} onChange={seatThreeCostData}
                                        placeholder="Enter Cost" name="seatOneCost"/>
                                </div>   <div className="input-box12">
                                    <span className="details12" >3A COST PER SEAT</span> <input type="number" value={seatFourCost} onChange={seatFourCostData}
                                        placeholder="Enter Cost" name="seatOneCost"/>
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
export default AddTrain
