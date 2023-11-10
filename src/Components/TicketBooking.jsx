import React, { useState,useEffect } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import NavUser from './NavUser'
import '../Styles/usersighup.css'
const TicketBooking = () => {
   
let [bus,setBus]=useState([])

let {index}=useParams()
let user=JSON.parse(localStorage.getItem('user'))
let [number_of_seats,setNumber]=useState(0)
let [cost,setCost]=useState()
let [seat_no,setSeatNum]=useState("")

let nav=useNavigate()

let handleSubmit=(e)=>{
    e.preventDefault()
let nowbus=JSON.parse(localStorage.getItem('bus'))
let from=nowbus.from;
let to=nowbus.to;
      let time_of_booking=  new Date().toLocaleString();
     let ticketnumber=''+bus.buscode+ Math.floor(Math.random() * (99 - 10));
     console.log(ticketnumber);
    let data={time_of_booking,cost,number_of_seats,seat_no,ticketnumber,from,to}
    if(number_of_seats!=0){
axios.post(`http://localhost:8080/ticket/${user.id}/${index}`,data)
.then(()=>{
toast.success("Ticket Booked Successfully",{
  position:toast.POSITION.TOP_CENTER
})
window.location.reload(true);
}).catch(()=>{
toast.error("Ticket Not Booked",{
  position:toast.POSITION.TOP_CENTER
})
})
  }
  else{
toast.error("Please Select Seats",
{
  position:toast.POSITION.TOP_CENTER
})
  }
}

 let onclick=(e)=>{
    let c= e.target.checked;
    let x=e.target.value;
    if(c){
      setNumber(Number(number_of_seats+1));
      setSeatNum(seat_no+x+" ")
    }
    else{
      setNumber(Number(number_of_seats-1));
      let s=seat_no.replace(x+' ','');
      setSeatNum(s) 
    }
  }

  useEffect(()=>{
    setCost(bus.cost_per_seat*number_of_seats)
  })


  if(bus!=""){
    console.log(bus.tickets.length);
    for (let index = 0; index <bus.tickets.length; index++) {
      const element = bus.tickets[index];
      let x=element.seat_no;
      const m = x.split(" ");
      for (let i = 0; i< m.length;i++) {
       let y=m[i]
       if(m[i]=='' || m[i]==' '){
        continue;
       } 
      else{
          document.getElementById(`s${y}`).disabled=true;
          document.getElementById(`ss${y}`).style.background="red";
       }
     }
    }
  }


useEffect(()=>{
    axios.get(`http://localhost:8080/bus/${index}`)
    .then((res)=>{
    setBus(res.data.data)
    }).catch(()=>{
    toast.error("Sorry No data Found")
    })
},[])



let back=()=>{
  nav('/userhome')
}

  return (
<div>
<NavUser/>
    <div id="mainBus">


    <div className="bus-ticket">

<div className="boarding-point">
<div className="ddata">
<p className='pdata'>STARTING POINT </p>
<h3>{bus.from}</h3>
<p className='pdata'>{bus.dop},{bus.deptime}</p>
</div>
<Button variant="contained" color="success"  disableElevation focused onClick={back} className='dbut'>CHANGE</Button> 

</div>
<div className="boarding-point">
<div className="ddata">
<p className='pdata'>DROPPING POINT</p>
<h3>{bus.to}</h3>
<p className='pdata'>{bus.dop},{bus.arrivaltime}</p>
</div>
<Button variant="contained" color="success"  disableElevation focused onClick={back} className='dbut'>CHANGE</Button> 

</div>
<div className="boarding-point-seat">
<div className="noseat">
<p className='pdata'>NUMBER OF SEATS</p>
<h2>{number_of_seats}</h2>
</div>

<div className="noseat">
<p className='pdata'>SEAT NUMBERS</p>
<h2>{seat_no}</h2>
</div>
</div>
<div className="boarding-cost">
<div className="cost">
<p className='pdata'>
<h3 className='cdata'>Total Amount</h3>
Including All Taxes
</p>
<h2 className='cost'>{cost}</h2>
</div>
</div>
    <center>
    <Button variant="contained" color="error"  disableElevation focused className='bcost' onClick={handleSubmit}>BOOK TICKET</Button> 
    </center>
    </div>



    
<div className="bus-data">
  <div class="bus">
<div class="driver">
<img src="https://pic.onlinewebfonts.com/thumbnails/icons_301890.svg" id="steering"  alt="" />
</div>


<div class="allseats">
  <div class="book1">
   <input class="seati" type="checkbox" name=""  id="s1" onClick={onclick} value="1"/>
  <label  class="seatl" for="s1" id="ss1">1</label>
  

   <input class="seati"  type="checkbox" name="" id="s2" onClick={onclick} value="2"/>
  <label  class="seatl" for="s2" id="ss2">2</label>

   <input  class="seati" type="checkbox" name="" id="s3" onClick={onclick} value="3"/>
  <label  class="seatl" for="s3" id="ss3">3</label>

   <input  class="seati" type="checkbox" name="" id="s4" onClick={onclick} value="4"/>
  <label  class="seatl" for="s4" id="ss4">4</label>

   <input  class="seati" type="checkbox" name="" id="s5" onClick={onclick} value="5"/>
  <label  class="seatl" for="s5" id="ss5">5</label>

   <input  class="seati" type="checkbox" name="" id="s6" onClick={onclick} value="6"/>
  <label  class="seatl" for="s6" id="ss6">6</label> 

  <input  class="seati" type="checkbox" name="" id="s7" onClick={onclick} value="7"/>
  <label  class="seatl" for="s7" id="ss7">7</label>

   <input  class="seati" type="checkbox" name="" id="s8" onClick={onclick} value="8"/>
  <label  class="seatl" for="s8" id="ss8">8</label> 

  <input  class="seati" type="checkbox" name="" id="s9" onClick={onclick} value="9"/>
  <label  class="seatl" for="s9" id="ss9">9</label>

   <input  class="seati" type="checkbox" name="" id="s10" onClick={onclick} value="10"/>
  <label  class="seatl" for="s10" id="ss10">10</label> 

  <input class="seati"  type="checkbox" name="" id="s11" onClick={onclick} value="11"/>
  <label  class="seatl" for="s11" id="ss11">11</label>

   <input class="seati"  type="checkbox" name="" id="s12" onClick={onclick} value="12"/>
  <label  class="seatl" for="s12" id="ss12">12</label>

   <input class="seati"  type="checkbox" name="" id="s13" onClick={onclick} value="13"/>
  <label  class="seatl" for="s13" id="ss13">13</label>



   <input class="seati"  type="checkbox" name="" id="s14" onClick={onclick} value="14"/>
  <label  class="seatl" for="s14" id="ss14">14</label> 

  <input class="seati"  type="checkbox" name="" id="s15" onClick={onclick} value="15"/>
  <label  class="seatl" for="s15" id="ss15">15</label> 

  <input class="seati"  type="checkbox" name="" id="s16" onClick={onclick} value="16"/>
  <label  class="seatl" for="s16" id="ss16">16</label> 
  </div>
  <div class="book1">
   <input class="seati" type="checkbox" name="" id="s17" onClick={onclick} value="17"/>
  <label  class="seatl"  for="s17" id="ss17">17</label>

   <input class="seati"  type="checkbox" name="" id="s18" onClick={onclick} value="18"/>
  <label  class="seatl" for="s18" id="ss18">18</label>

   <input  class="seati" type="checkbox" name="" id="s19" onClick={onclick} value="19"/>
  <label  class="seatl" for="s19" id="ss19">19</label>

   <input  class="seati" type="checkbox" name="" id="s20" onClick={onclick} value="20"/>
  <label  class="seatl" for="s20" id="ss20">20</label>

   <input  class="seati" type="checkbox" name="" id="s21" onClick={onclick} value="21"/>
  <label  class="seatl" for="s21" id="ss21">21</label>

   <input  class="seati" type="checkbox" name="" id="s22" onClick={onclick} value="22"/>
  <label  class="seatl" for="s22" id="ss22">22</label>

   <input  class="seati" type="checkbox" name="" id="s23" onClick={onclick} value="23"/>
  <label  class="seatl" for="s23" id="ss23">23</label>

  <input  class="seati" type="checkbox" name="" id="s24" onClick={onclick} value="24"/>
  <label  class="seatl" for="s24" id="ss24">24</label>

   <input  class="seati" type="checkbox" name="" id="s25" onClick={onclick} value="25"/>
  <label  class="seatl" for="s25" id="ss25">25</label> 

  <input  class="seati" type="checkbox" name="" id="s26" onClick={onclick} value="26"/>
  <label  class="seatl" for="s26" id="ss26">26</label>

   <input class="seati"  type="checkbox" name="" id="s27" onClick={onclick} value="27"/>
  <label  class="seatl" for="s27" id="ss27">27</label>

   <input class="seati"  type="checkbox" name="" id="s28" onClick={onclick} value="28"/>
  <label  class="seatl" for="s28" id="ss28">28</label>

   <input class="seati"  type="checkbox" name="" id="s29" onClick={onclick} value="29"/>
  <label  class="seatl" for="s29" id="ss29">29</label> 

  <input class="seati"  type="checkbox" name="" id="s30" onClick={onclick} value="30"/>
  <label  class="seatl" for="s30" id="ss30">30</label>

   <input class="seati"  type="checkbox" name="" id="s31" onClick={onclick} value="31"/>
  <label  class="seatl" for="s31" id="ss31">31</label>

   <input class="seati"  type="checkbox" name="" id="s32" onClick={onclick} value="32"/>
  <label  class="seatl" for="s32" id="ss32">32</label> 
  </div>
</div>



<div class="book3">
  <input class="seati" type="checkbox" name="" id="s33" onClick={onclick} value="33"/>
  <label class="seatl" for="s33" id="ss33">33</label> 

  <input class="seati" type="checkbox" name="" id="s34" onClick={onclick} value="34"/>
  <label class="seatl" for="s34" id="ss34">34</label>

  <input class="seati" type="checkbox" name="" id="s35" onClick={onclick} value="35"/>
  <label class="seatl" for="s35" id="ss35">35</label>

  <input class="seati" type="checkbox" name="" id="s36" onClick={onclick} value="36"/>
  <label class="seatl" for="s36" id="ss36">36</label> 

  <input class="seati" type="checkbox" name="" id="s37" onClick={onclick} value="37"/>
  <label class="seatl" for="s37" id="ss37">37</label> 
</div>
</div>
<div className="seat-data">
            <div className="item"><div className="sp1"></div> <h3>Available</h3></div>
            <div className="item" ><div className="sp2"></div><h3>Selected</h3></div>
            <div className="item"> <div className="sp3"></div><h3>Booked</h3></div>
</div>
  </div>
</div>
<Footer/>
<ToastContainer/>
</div>
  )
}
export default TicketBooking
