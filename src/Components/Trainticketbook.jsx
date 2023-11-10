// import React from 'react'
import '../Styles/help.css'
import React, { useState,useEffect } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import NavUser from './NavUser'
import TextField from '@mui/material/TextField';

const Trainticketbook = () => {

       let [bus,setBus]=useState([])
       let [train,setTrain]=useState([])
let {index}=useParams()
let user=JSON.parse(localStorage.getItem('user'))
let [number_of_seats,setNumber]=useState(0)
let [cost,setCost]=useState()
let [seat_no,setSeatNum]=useState("")
let [previous,setPrevious]=useState("")


let nav=useNavigate()

let handleSubmit=(e)=>{
    e.preventDefault()
let seattype="3A";
let nowtrain=JSON.parse(localStorage.getItem('train'))
let from=nowtrain.from;
let to=nowtrain.to;
      let time_of_booking=  new Date().toLocaleString();
     let ticketnumber=''+train.traincode+ Math.floor(Math.random() * (99 - 10));
    var status="";
     if(number_of_seats>0){
       status="Booked";
     }
     else{
      status="Waitimg";
     }
    let data={time_of_booking,cost,number_of_seats,seat_no,ticketnumber,status,seattype,from,to}
    // if(number_of_seats!=0){
axios.post(`http://localhost:8080/train/trainticket/${user.id}/${index}`,data)
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

 let onclick=(e)=>{
    let c= e.target.checked;
    let x=e.target.value;
    if(c){
      setNumber(Number(number_of_seats+1));
      setSeatNum(seat_no+x+" ")
    console.log(seat_no);

    }
    else{
      setNumber(Number(number_of_seats-1));
      let s=seat_no.replace(x+' ','');
      setSeatNum(s) 
  

    }
  }

  useEffect(()=>{
    setCost(train.seatTwoCost*number_of_seats)
  })

  if(previous!=""){
    console.log("EXECUTED");
    const m = previous.split(" ");
      for (let i = 0; i< m.length;i++) {
       let y=m[i]
       if(m[i]=='' || m[i]==' '){
        continue;
       } 
      else{
          document.getElementById(`side${y}`).disabled=true;
          document.getElementById(`sides${y}`).style.background="red";
       }
     }
  }

  
  let go=(e)=>{
    var y="";
    e.preventDefault()
    let c= e.target.checked;
    let seat=e.target.value
   for (let index = 0; index <train.traintickets.length; index++) {
  const element = train.traintickets[index];
  if(seat==element.seattype){
  let x=element.seat_no;
y=y+" "+x
}
}
localStorage.setItem("seats",y)
setPrevious(localStorage.getItem("seats"))
  }




useEffect(()=>{
    axios.get(`http://localhost:8080/train/${index}`)
    .then((res)=>{
    setTrain(res.data.data)
    }).catch(()=>{
    toast.error("Sorry No data Found")
    })
},[])


  return (
    <div>
    <div id='trainseat'>
<div className="trainseatdata">
<div className="seattypes">





 <Button variant="contained" type='checkbox' color="success"  value="SL" onClick={go} className='seattrain'>SL</Button> 
<Button variant="contained" color="success" value="1A"  onClick={go} className='seattrain'>1A</Button> 
<Button variant="contained" color="success"  value="2A" onClick={go} className='seattrain'>2A</Button> 
<Button variant="contained" color="success" value="3A" onClick={go} className='seattrain'>3A</Button> 
  

</div>
<div className="dataseat">


<div className="bus-ticket">
  <center><h1>TICKET DETAILS</h1>
</center>
<div className="boarding-point">
<div className="ddata">
<p className='pdata'>STARTING POINT </p>
<h3>{train.from}</h3>
<p className='pdata'>{train.dop},{bus.deptime}</p>
</div>
<Button variant="contained" color="success"  disableElevation focused  className='dbut'>CHANGE</Button> 

</div>
<div className="boarding-point">
<div className="ddata">
<p className='pdata'>DROPPING POINT</p>
<h3>{train.to}</h3>
<p className='pdata'>{train.dop},{bus.arrivaltime}</p>
</div>
<Button variant="contained" color="success"  disableElevation focused  className='dbut'>CHANGE</Button> 

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
</div>
</div>


      <div className="train-threea">   
       <div className="com-one">
<div className="oneside">
<div className="oneside-seats">
<input type="checkbox" name="" className="sidei"  id="side1" onClick={onclick} value="1"/>
<label for="side1" className='side' id="sides1"><p className='seat-place'>L 1</p></label>
<input type="checkbox" name="" className="sidei"  id="side2" onClick={onclick} value="2"/>
<label for="side2" className="side" id="sides2"><p className='seat-place'>U 2</p></label>
</div>
</div>
<div className="com-name">
<center>
<p>C</p>
<p>O</p>
<p>M</p>
<p>1</p>
</center>
</div>
<div className="twosides">
<div className="upper">
<input type="checkbox" name="" className="sidei"  id="side3" onClick={onclick} value="3"/>
<label for="side3" className="side" id="sides3">UL 3</label>
<input type="checkbox" name="" className="sidei"  id="side4" onClick={onclick} value="4"/>
<label for="side4" className="side" id="sides4">UR 4</label>
</div>
<div className="middle">
<input type="checkbox" name="" id="side5" className="sidei" onClick={onclick} value="5"/>
<label for="side5" className="side" id="sides5">ML 5</label>
<input type="checkbox" name="" id="side6" className="sidei" onClick={onclick} value="6"/>
<label for="side6" className="side" id="sides6">MR 6</label>
</div>
<div className="lower">
<input type="checkbox" name="" id="side7" className="sidei" onClick={onclick} value="7"/>
<label for="side7" className="side" id="sides7">LL 7</label>
<input type="checkbox" name="" id="side8" className="sidei" onClick={onclick} value="8"/>
<label for="side8" className="side" id="sides8">LR 8</label>
</div>
</div>
       </div>
{/* /2 */}
<div className="com-one">
<div className="oneside">
<div className="oneside-seats">
<input type="checkbox" name="" id="side9"  className="sidei" onClick={onclick} value="9"/>
<label for="side9" className='side' id="sides9"><p className='seat-place'>L 9</p></label>
<input type="checkbox" name="" id="side10" className="sidei" onClick={onclick} value="10" />
<label for="side10" className="side" id="sides10"><p className='seat-place'>U 10</p></label>


</div>

</div>
<div className="com-name">
<center>
<p>C</p>
<p>O</p>
<p>M</p>
<p>2</p>



</center>


</div>
<div className="twosides">
<div className="upper">
<input type="checkbox" name="" id="side11" className='sidei' onClick={onclick} value="11"/>
<label for="side11" className='side' id="sides11">UL 11</label>
<input type="checkbox" name="" id="side12" className='sidei' onClick={onclick} value="12"/>
<label for="side12" className="side" id="sides12">UR 12</label>

</div>
<div className="middle">
<input type="checkbox" name="" id="side13" className='sidei' onClick={onclick} value="13"/>
<label for="side13" className='side' id="sides13">ML 13</label>
<input type="checkbox" name="" id="side14" className='sidei' onClick={onclick} value="14"/>
<label for="side14" className="side" id="sides14">MR 14</label>
</div>
<div className="lower">
<input type="checkbox" name="" id="side15" className='sidei' onClick={onclick} value="15"/>
<label for="side15" className='side' id="sides15">LL 15</label>
<input type="checkbox" name="" id="side16" className='sidei' onClick={onclick} value="16"/>
<label for="side16" className="side" id="sides16">LR 16</label>
</div>
</div>
       </div>



{/* 3 */}
<div className="com-one">
<div className="oneside">
<div className="oneside-seats">

<input type="checkbox" className="sidei" name="" id="side17" onClick={onclick} value="17"/>
<label htmlFor="side17" className='side' id="sides17"><p className='seat-place'>L 17</p></label>
<input type="checkbox" name="" className="sidei"  id="side18" onClick={onclick} value="18"/>
<label htmlFor="side18" className="side" id="sides18"><p className='seat-place'>U 18</p></label>
</div>

</div>
<div className="com-name">
<center>
<p>C</p>
<p>O</p>
<p>M</p>
<p>3</p>



</center>


</div>
<div className="twosides">
<div className="upper">
<input type="checkbox" name="" className="sidei"  id="side19" onClick={onclick} value="19"/>
<label htmlFor="side19" className='side' id="sides19">UL 19</label>
<input type="checkbox" name="" className="sidei"  id="side20" onClick={onclick} value="20"/>
<label htmlFor="side20" className="side" id="sides20">UR 20</label>

</div>
<div className="middle">

<input type="checkbox" name="" id="side21" className='sidei' onClick={onclick} value="21"/>
<label htmlFor="side21" className='side' id="sides21">ML 21</label>
<input type="checkbox" name="" id="side22" className='sidei' onClick={onclick} value="22"/>
<label htmlFor="side22" className="side" id="sides22">MR 22</label>
</div>
<div className="lower">
<input type="checkbox" name="" id="side23" className='sidei' onClick={onclick} value="23"/>
<label htmlFor="side23" className='side' id="sides23">LL 23</label>
<input type="checkbox" name="" id="side24" className='sidei' onClick={onclick} value="24"/>
<label htmlFor="side24" className="side" id="sides24">LR 24</label>
</div>
</div>

       </div>

{/* 4 */}
<div className="com-one">
<div className="oneside">
<div className="oneside-seats">

<input type="checkbox" name="" id="side25" className="sidei" value="25" onClick={onclick}/>
<label htmlFor="side25" className='side' id="sides25"><p className='seat-place' >L 25</p></label>
<input type="checkbox" name="" id="side26" className="sidei"  value="26" onClick={onclick}/>
<label htmlFor="side26" className="side" id="sides26"><p className='seat-place'>U 26</p></label>
</div>

</div>

<div className="com-name">
<center>
<p>C</p>
<p>O</p>
<p>M</p>
<p>4</p>



</center>


</div>
<div className="twosides">
<div className="upper">
<input type="checkbox" name="" id="side27" className='sidei' onClick={onclick}  value="27"/>
<label htmlFor="side27" className='side' id="sides27">UL 27</label>
<input type="checkbox" name="" id="side28" className='sidei' onClick={onclick}  value="28"/>
<label htmlFor="side28" className="side" id="sides28">UR 28</label>

</div>
<div className="middle">

<input type="checkbox" name="" id="side29" className='sidei' onClick={onclick} value="29"/>
<label htmlFor="side29" className='side' id="sides29">ML 29</label>
<input type="checkbox" name="" id="side30" className='sidei' onClick={onclick} value="30"/>
<label htmlFor="side30" className="side" id="sides30">MR 30</label>
</div>
<div className="lower">
<input type="checkbox" name="" id="side31" className='sidei' onClick={onclick} value="31"/>
<label htmlFor="side31" className='side' id="sides31">LL 31</label>
<input type="checkbox" name="" id="side32" className='sidei' value="32" onClick={onclick}/>
<label htmlFor="side32" className="side" id="sides32">LR 32</label>
</div>
</div>

       </div>


       {/* 5 */}
<div className="com-one">
<div className="oneside">
<div className="oneside-seats">

<input type="checkbox" name="" id="side33" className="sidei" value="33" onClick={onclick}/>
<label htmlFor="side33" className='side' id="sides33"><p className='seat-place'>L 33</p></label>
<input type="checkbox" name="" id="side34" className="sidei" value="34" onClick={onclick}/>
<label htmlFor="side34" className="side" id="sides34"><p className='seat-place'>U 34</p></label>
</div>

</div>
<div className="com-name">
<center>
<p>C</p>
<p>O</p>
<p>M</p>
<p>5</p>



</center>


</div>

<div className="twosides">
<div className="upper">
<input type="checkbox" name="" id="side35" className='sidei' value="35" onClick={onclick}/>
<label htmlFor="side35" className='side' id="sides35">UL 35</label>
<input type="checkbox" name="" id="side36" className='sidei' value="36" onClick={onclick}/>
<label htmlFor="side36" className="side" id="sides36">UR 36</label>

</div>
<div className="middle">

<input type="checkbox" name="" id="side37" className='sidei' value="37" onClick={onclick}/>
<label htmlFor="side37" className='side' id="sides37">ML 37</label>
<input type="checkbox" name="" id="side38" className='sidei' value="38" onClick={onclick}/>
<label htmlFor="side38" className="side" id="sides38">MR 38</label>
</div>
<div className="lower">
<input type="checkbox" name="" id="side39" className='sidei' value="39" onClick={onclick}/>
<label htmlFor="side39" className='side' id="sides39">LL 39</label>
<input type="checkbox" name="" id="side40" className='sidei' value="40" onClick={onclick}/>
<label htmlFor="side40" className="side" id="sides40">LR 40</label>
</div>
</div>

       </div>


       {/* 6 */}
<div className="com-one">
<div className="oneside">
<div className="oneside-seats">

<input type="checkbox" name="" id="side41" className="sidei" value="41" onClick={onclick}/>
<label htmlFor="side41" className='side' id="sides41"><p className='seat-place'>L 41</p></label>
<input type="checkbox" name="" id="side42" className="sidei" value="42" onClick={onclick}/>
<label htmlFor="side42" className="side" id="sides42"><p className='seat-place'>U 42</p></label>
</div>

</div>
<div className="com-name">
<center>
<p>C</p>
<p>O</p>
<p>M</p>
<p>6</p>



</center>


</div>

<div className="twosides">
<div className="upper">
<input type="checkbox" name="" id="side43" className='sidei' value="43" onClick={onclick}/>
<label htmlFor="side43" className='side' id="sides43">UL 43</label>
<input type="checkbox" name="" id="side44" className='sidei' value="44" onClick={onclick}/>
<label htmlFor="side44" className="side" id="sides44">UR 44</label>

</div>
<div className="middle">

<input type="checkbox" name="" id="side45" className='sidei' value="45" onClick={onclick} />
<label htmlFor="side45" className='side' id="sides45">ML 45</label>
<input type="checkbox" name="" id="side46" className='sidei' value="46" onClick={onclick}/>
<label htmlFor="side46" className="side" id="sides46">MR 46</label>
</div>
<div className="lower">
<input type="checkbox" name="" id="side47" className='sidei' value="47" onClick={onclick}/>
<label htmlFor="side47" className='side' id="sides47">LL 46</label>
<input type="checkbox" name="" id="side48" className='sidei' value="48" onClick={onclick} />
<label htmlFor="side48" className="side" id="sides48">LR 48</label>
</div>
</div>

       </div>


       {/* 7 */}
<div className="com-one">
<div className="oneside">
<div className="oneside-seats">

<input type="checkbox" name="" id="side49" className="sidei" value="49" onClick={onclick} />
<label htmlFor="side49" className='side' id="sides49"><p className='seat-place'>L 49</p></label>
<input type="checkbox" name="" id="side50" className="sidei" value="50" onClick={onclick}/>
<label htmlFor="side50" className="side" id="sides50"><p className='seat-place'>U 50</p></label>
</div>

</div>
<div className="com-name">
<center>
<p>C</p>
<p>O</p>
<p>M</p>
<p>7</p>



</center>


</div>

<div className="twosides">
<div className="upper">
<input type="checkbox" name="" id="side51" className='sidei' onClick={onclick} value="51"/>
<label htmlFor="side51" className='side' id="sides51">UL 51</label>
<input type="checkbox" name="" id="side52" className='sidei' onClick={onclick} value="52"/>
<label htmlFor="side52" className="side" id="sides52">UR 52</label>
</div>
<div className="middle">
<input type="checkbox" name="" id="side53" className='sidei' onClick={onclick} value="53"/>
<label htmlFor="side53" className='side' id="sides53">ML 53</label>
<input type="checkbox" name="" id="side54" className='sidei' onClick={onclick}  value="54"/>
<label htmlFor="side54" className="side" id="sides54">MR 54</label>
</div>
<div className="lower">
<input type="checkbox" name="" id="side55" className='sidei' onClick={onclick} value="55"/>
<label htmlFor="side55" className='side' id="sides55">LL 55</label>
<input type="checkbox" name="" id="side56" className='sidei' onClick={onclick} value="56"/>
<label htmlFor="side56" className="side" id="sides56">LR 56</label>
</div>
</div>
       </div>
       {/* 8 */}
<div className="com-one">
<div className="oneside">
<div className="oneside-seats">
<input type="checkbox" name="" id="side57" className="sidei" onClick={onclick} value="57"/>
<label htmlFor="side57" className='side' id="sides57"><p className='seat-place'>L 57</p></label>
<input type="checkbox" name="" id="side58" className="sidei" value="58" onClick={onclick}/>
<label htmlFor="side58" className="side" id="sides58"><p className='seat-place'>U 58</p></label>
</div>
</div>
<div className="com-name">
<center>
<p>C</p>
<p>O</p>
<p>M</p>
<p>8</p>
</center>
</div>
<div className="twosides">
<div className="upper">
<input type="checkbox" name="" id="side59" className="sidei" value="59" onClick={onclick}/>
<label htmlFor="side59" className='side' id="sides59">UL 59</label>
<input type="checkbox" name="" id="side60" className="sidei" value="60" onClick={onclick}/>
<label htmlFor="side60" className="side" id="sides60">UR 60</label>
</div>
<div className="middle">
<input type="checkbox" name="" id="side61" className='sidei' value="61" onClick={onclick}/>
<label htmlFor="side61" className='side' id="sides61">ML 61</label>
<input type="checkbox" name="" id="side62" className='sidei' value="62" onClick={onclick}/>
<label htmlFor="side62" className="side" id="sides62">MR 62</label>
</div>
<div className="lower">
<input type="checkbox" name="" id="side63" className='sidei' value="63" onClick={onclick}/>
<label htmlFor="side63" className='side' id="sides63">LL 63</label>
<input type="checkbox" name="" id="side64" className='sidei' value="64" onClick={onclick}/>
<label htmlFor="side64" className="side" id="sides64">LR 64</label>
</div>
</div>
       </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
export default Trainticketbook

