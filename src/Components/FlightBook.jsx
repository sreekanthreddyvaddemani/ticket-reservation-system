import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/carrental.css'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import NavUser from './NavUser';
import { useEffect } from 'react';
import { useState } from 'react';

const FlightBook = () => {

     
let [flight,setFlight]=useState([])

let {index}=useParams()
let user=JSON.parse(localStorage.getItem('user'))
let [number_of_seats,setNumber]=useState(0)
let [cost,setCost]=useState()
let [seat_no,setSeatNum]=useState("")

let nav=useNavigate()

let handleSubmit=(e)=>{
    e.preventDefault()
let nowflight=JSON.parse(localStorage.getItem('flight'))
let from=nowflight.from;
let to=nowflight.to;
    let status="Booked"
      let time_of_booking=  new Date().toLocaleString();
     let ticketnumber=''+flight.flightcode+ Math.floor(Math.random() * (99 - 10));
    let data={time_of_booking,cost,number_of_seats,seat_no,ticketnumber,status,from,to}
    if(number_of_seats!=0){
axios.post(`http://localhost:8080/flightticket/${user.id}/${index}`,data)
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
    setCost(flight.cost_per_seat*number_of_seats)
  })


  if(flight!=""){
    console.log(flight.flighttickets.length);
    for (let index = 0; index <flight.flighttickets.length; index++) {
      const element = flight.flighttickets[index];
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
    axios.get(`http://localhost:8080/flight/${index}`)
    .then((res)=>{
    setFlight(res.data.data)
    console.log(res.data.data)
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
<div className="plainseats">


<div className="selecteddata">
<div class="container-data">
<h1>FLIGHT DETAILS</h1>

<div className="boarding-point">
<div className="ddata">
<p className='pdata'>STARTING POINT </p>
<h3>{flight.from}</h3>
<p className='pdata'>{flight.dop},{flight.deptime}</p>
</div>

</div>
<div className="boarding-point">
<div className="ddata">
<p className='pdata'>DROPPING POINT</p>
<h3>{flight.to}</h3>
<p className='pdata'>{flight.dop},{flight.arrivaltime}</p>
</div>

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

  


  


<div className="traveldata">



</div>

</div>

<div className="plain">
<div className="plainin">

<div className="driverseat">
  <center>
    <div className="line">
      
    </div>
  </center>
  <div className="front">
<h2>FRONT</h2>

  </div>
  </div>

<div class="allplainplainseats">
  
  <div class="plainside1">
   <input class="plaini" type="checkbox" name=""  id="s1" onClick={onclick} value="1"/>
  <label  class="plainl" for="s1" id="ss1">1</label>

   <input class="plaini"  type="checkbox" name="" id="s2" onClick={onclick} value="2"/>
  <label  class="plainl" for="s2" id="ss2">2</label>

   <input  class="plaini" type="checkbox" name="" id="s3" onClick={onclick} value="3"/>
  <label  class="plainl" for="s3" id="ss3">3</label>

   <input  class="plaini" type="checkbox" name="" id="s4" onClick={onclick} value="4"/>
  <label  class="plainl" for="s4" id="ss4">4</label>

   <input  class="plaini" type="checkbox" name="" id="s5" onClick={onclick} value="5"/>
  <label  class="plainl" for="s5" id="ss5">5</label>

   <input  class="plaini" type="checkbox" name="" id="s6" onClick={onclick} value="6"/>
  <label  class="plainl" for="s6" id="ss6">6</label>

  <input  class="plaini" type="checkbox" name="" id="s7" onClick={onclick} value="7"/>
  <label  class="plainl" for="s7" id="ss7">7</label>

   <input  class="plaini" type="checkbox" name="" id="s8" onClick={onclick} value="8"/>
  <label  class="plainl" for="s8" id="ss8">8</label> 

  <input  class="plaini" type="checkbox" name="" id="s9" onClick={onclick} value="9"/>
  <label  class="plainl" for="s9" id="ss9">9</label>

   <input  class="plaini" type="checkbox" name="" id="s10" onClick={onclick} value="10"/>
  <label  class="plainl" for="s10" id="ss10">10</label> 

  <input class="plaini"  type="checkbox" name="" id="s11" onClick={onclick} value="11"/>
  <label  class="plainl" for="s11" id="ss11">11</label>

   <input class="plaini"  type="checkbox" name="" id="s12" onClick={onclick} value="12"/>
  <label  class="plainl" for="s12" id="ss12">12</label>

   <input class="plaini"  type="checkbox" name="" id="s13" onClick={onclick} value="13"/>
  <label  class="plainl" for="s13" id="ss13">13</label>

   <input class="plaini"  type="checkbox" name="" id="s14" onClick={onclick} value="14"/>
  <label  class="plainl" for="s14" id="ss14">14</label> 

  <input class="plaini"  type="checkbox" name="" id="s15" onClick={onclick} value="15"/>
  <label  class="plainl" for="s15" id="ss15">15</label> 

  <input class="plaini"  type="checkbox" name="" id="s16" onClick={onclick} value="16"/>
  <label  class="plainl" for="s16" id="ss16">16</label> 
   <input class="plaini" type="checkbox" name="" id="s17" onClick={onclick} value="17"/>
  <label  class="plainl"  for="s17" id="ss17">17</label>

   <input class="plaini"  type="checkbox" name="" id="s18" onClick={onclick} value="18"/>
  <label  class="plainl" for="s18" id="ss18">18</label>

   <input  class="plaini" type="checkbox" name="" id="s19" onClick={onclick} value="19"/>
  <label  class="plainl" for="s19" id="ss19">19</label>

   <input  class="plaini" type="checkbox" name="" id="s20" onClick={onclick} value="20"/>
  <label  class="plainl" for="s20" id="ss20">20</label>

   <input  class="plaini" type="checkbox" name="" id="s21" onClick={onclick} value="21"/>
  <label  class="plainl" for="s21" id="ss21">21</label>

   <input  class="plaini" type="checkbox" name="" id="s22" onClick={onclick} value="22"/>
  <label  class="plainl" for="s22" id="ss22">22</label>

   <input  class="plaini" type="checkbox" name="" id="s23" onClick={onclick} value="23"/>
  <label  class="plainl" for="s23" id="ss23">23</label>

  <input  class="plaini" type="checkbox" name="" id="s24" onClick={onclick} value="24"/>
  <label  class="plainl" for="s24" id="ss24">24</label>

   <input  class="plaini" type="checkbox" name="" id="s25" onClick={onclick} value="25"/>
  <label  class="plainl" for="s25" id="ss25">25</label> 

  <input  class="plaini" type="checkbox" name="" id="s26" onClick={onclick} value="26"/>
  <label  class="plainl" for="s26" id="ss26">26</label>

   <input class="plaini"  type="checkbox" name="" id="s27" onClick={onclick} value="27"/>
  <label  class="plainl" for="s27" id="ss27">27</label>

   <input class="plaini"  type="checkbox" name="" id="s28" onClick={onclick} value="28"/>
  <label  class="plainl" for="s28" id="ss28">27</label>

   <input class="plaini"  type="checkbox" name="" id="s29" onClick={onclick} value="29"/>
  <label  class="plainl" for="s29" id="ss29">29</label> 

  <input class="plaini"  type="checkbox" name="" id="s30" onClick={onclick} value="30"/>
  <label  class="plainl" for="s30" id="ss30">30</label>

   <input class="plaini"  type="checkbox" name="" id="s31" onClick={onclick} value="31"/>
  <label  class="plainl" for="s31" id="ss31">31</label>

   <input class="plaini"  type="checkbox" name="" id="s32" onClick={onclick} value="32"/>
  <label  class="plainl" for="s32" id="ss32">32</label> 



  <input class="plaini" type="checkbox" name=""  id="s33" onClick={onclick} value="33"/>
  <label  class="plainl" for="s33" id="ss33">33</label>

   <input class="plaini"  type="checkbox" name="" id="s34" onClick={onclick} value="34"/>
  <label  class="plainl" for="s34" id="ss34">34</label>

   <input  class="plaini" type="checkbox" name="" id="s35" onClick={onclick} value="35"/>
  <label  class="plainl" for="s35" id="ss35">35</label>

   <input  class="plaini" type="checkbox" name="" id="s36" onClick={onclick} value="36"/>
  <label  class="plainl" for="s36" id="ss36">36</label>

   <input  class="plaini" type="checkbox" name="" id="s37" onClick={onclick} value="37"/>
  <label  class="plainl" for="s37" id="ss37">37</label>

   <input  class="plaini" type="checkbox" name="" id="s38" onClick={onclick} value="38"/>
  <label  class="plainl" for="s38" id="ss38">38</label> 

  <input  class="plaini" type="checkbox" name="" id="s39" onClick={onclick} value="39"/>
  <label  class="plainl" for="s39" id="ss39">39</label>

   <input  class="plaini" type="checkbox" name="" id="s40" onClick={onclick} value="40"/>
  <label  class="plainl" for="s40" id="ss40">40</label> 

  <input  class="plaini" type="checkbox" name="" id="s41" onClick={onclick} value="41"/>
  <label  class="plainl" for="s41" id="ss41">41</label>

   <input  class="plaini" type="checkbox" name="" id="s42" onClick={onclick} value="42"/>
  <label  class="plainl" for="s42" id="ss42">42</label> 

  <input class="plaini"  type="checkbox" name="" id="s43" onClick={onclick} value="43"/>
  <label  class="plainl" for="s43" id="ss43">43</label>

   <input class="plaini"  type="checkbox" name="" id="s44" onClick={onclick} value="44"/>
  <label  class="plainl" for="s44" id="ss44">44</label>

   <input class="plaini"  type="checkbox" name="" id="s45" onClick={onclick} value="45"/>
  <label  class="plainl" for="s45" id="ss45">45</label>

   <input class="plaini"  type="checkbox" name="" id="s46" onClick={onclick} value="46"/>
  <label  class="plainl" for="s46" id="ss46">46</label> 

  <input class="plaini"  type="checkbox" name="" id="s47" onClick={onclick} value="47"/>
  <label  class="plainl" for="s47" id="ss47">47</label> 

  <input class="plaini"  type="checkbox" name="" id="s48" onClick={onclick} value="48"/>
  <label  class="plainl" for="s48" id="ss48">48</label> 
   <input class="plaini" type="checkbox" name="" id="s49" onClick={onclick} value="49"/>
  <label  class="plainl"  for="s49" id="ss49">49</label>

   <input class="plaini"  type="checkbox" name="" id="s50" onClick={onclick} value="50"/>
  <label  class="plainl" for="s50" id="ss50">50</label>

   <input  class="plaini" type="checkbox" name="" id="s51" onClick={onclick} value="51"/>
  <label  class="plainl" for="s51" id="ss51">51</label>

   <input  class="plaini" type="checkbox" name="" id="s52" onClick={onclick} value="52"/>
  <label  class="plainl" for="s52" id="ss52">52</label>

   <input  class="plaini" type="checkbox" name="" id="s53" onClick={onclick} value="53"/>
  <label  class="plainl" for="s53" id="ss53">53</label>

   <input  class="plaini" type="checkbox" name="" id="s54" onClick={onclick} value="54"/>
  <label  class="plainl" for="s54" id="ss54">54</label>

   <input  class="plaini" type="checkbox" name="" id="s55" onClick={onclick} value="55"/>
  <label  class="plainl" for="s55" id="ss55">55</label>

  <input  class="plaini" type="checkbox" name="" id="s56" onClick={onclick} value="56"/>
  <label  class="plainl" for="s56" id="ss56">56</label>

   <input  class="plaini" type="checkbox" name="" id="s57" onClick={onclick} value="57"/>
  <label  class="plainl" for="s57" id="ss57">57</label> 

  <input  class="plaini" type="checkbox" name="" id="s58" onClick={onclick} value="58"/>
  <label  class="plainl" for="s58" id="ss58">58</label>

   <input class="plaini"  type="checkbox" name="" id="s59" onClick={onclick} value="59"/>
  <label  class="plainl" for="s59" id="ss59">59</label>

   <input class="plaini"  type="checkbox" name="" id="s60" onClick={onclick} value="60"/>
  <label  class="plainl" for="s60" id="ss60">60</label>

   <input class="plaini"  type="checkbox" name="" id="s61" onClick={onclick} value="61"/>
  <label  class="plainl" for="s61" id="ss61">61</label> 

  <input class="plaini"  type="checkbox" name="" id="s62" onClick={onclick} value="62"/>
  <label  class="plainl" for="s62" id="ss62">62</label>

   <input class="plaini"  type="checkbox" name="" id="s63" onClick={onclick} value="63"/>
  <label  class="plainl" for="s63" id="ss63">63</label>

   <input class="plaini"  type="checkbox" name="" id="s64" onClick={onclick} value="64"/>
  <label  class="plainl" for="s64" id="ss64">64</label> 








   <input  class="plaini" type="checkbox" name="" id="s65" onClick={onclick} value="65"/>
  <label  class="plainl" for="s65" id="ss65">65</label>

   <input  class="plaini" type="checkbox" name="" id="s66" onClick={onclick} value="66"/>
  <label  class="plainl" for="s66" id="ss66">66</label> 

  <input  class="plaini" type="checkbox" name="" id="s67" onClick={onclick} value="67"/>
  <label  class="plainl" for="s67" id="ss67">67</label>

   <input  class="plaini" type="checkbox" name="" id="s68" onClick={onclick} value="68"/>
  <label  class="plainl" for="s68" id="ss68">68</label> 

  <input  class="plaini" type="checkbox" name="" id="s69" onClick={onclick} value="69"/>
  <label  class="plainl" for="s69" id="ss69">69</label>

  <input class="plaini" type="checkbox" name=""  id="s70" onClick={onclick} value="70"/>
  <label  class="plainl" for="s70" id="ss70">70</label>

  <input class="plaini" type="checkbox" name=""  id="s71" onClick={onclick} value="71"/>
  <label  class="plainl" for="s71" id="ss71">71</label>

   <input class="plaini"  type="checkbox" name="" id="s72" onClick={onclick} value="72"/>
  <label  class="plainl" for="s72" id="ss72">72</label>

   <input  class="plaini" type="checkbox" name="" id="s73" onClick={onclick} value="73"/>
  <label  class="plainl" for="s73" id="ss73">73</label>

   <input  class="plaini" type="checkbox" name="" id="s74" onClick={onclick} value="74"/>
  <label  class="plainl" for="s74" id="ss74">74</label>



  <input  class="plaini" type="checkbox" name="" id="s75" onClick={onclick} value="75"/>
  <label  class="plainl" for="s75" id="ss75">75</label>

   <input  class="plaini" type="checkbox" name="" id="s76" onClick={onclick} value="76"/>
  <label  class="plainl" for="s76" id="ss76">76</label> 

  <input  class="plaini" type="checkbox" name="" id="s77" onClick={onclick} value="77"/>
  <label  class="plainl" for="s77" id="ss77">77</label>

   <input  class="plaini" type="checkbox" name="" id="s78" onClick={onclick} value="78"/>
  <label  class="plainl" for="s78" id="ss78">78</label> 

  <input  class="plaini" type="checkbox" name="" id="s79" onClick={onclick} value="79"/>
  <label  class="plainl" for="s79" id="ss79">79</label>

   <input  class="plaini" type="checkbox" name="" id="s80" onClick={onclick} value="80"/>
  <label  class="plainl" for="s80" id="ss80">80</label> 


  <input class="plaini" type="checkbox" name=""  id="s81" onClick={onclick} value="80"/>
  <label  class="plainl" for="s81" id="ss81">81</label>

   <input class="plaini"  type="checkbox" name="" id="s82" onClick={onclick} value="82"/>
  <label  class="plainl" for="s82" id="ss82">82</label>

   <input  class="plaini" type="checkbox" name="" id="s83" onClick={onclick} value="83"/>
  <label  class="plainl" for="s83" id="ss83">83</label>

   <input  class="plaini" type="checkbox" name="" id="s84" onClick={onclick} value="84"/>
  <label  class="plainl" for="s84" id="ss84">84</label>

   <input  class="plaini" type="checkbox" name="" id="s85" onClick={onclick} value="85"/>
  <label  class="plainl" for="s85" id="ss85">85</label>

   <input  class="plaini" type="checkbox" name="" id="s86" onClick={onclick} value="86"/>
  <label  class="plainl" for="s86" id="ss86">86</label> 

  <input  class="plaini" type="checkbox" name="" id="s87" onClick={onclick} value="87"/>
  <label  class="plainl" for="s87" id="ss87">87</label>

   <input  class="plaini" type="checkbox" name="" id="s88" onClick={onclick} value="88"/>
  <label  class="plainl" for="s88" id="ss88">88</label> 

  <input  class="plaini" type="checkbox" name="" id="s89" onClick={onclick} value="89"/>
  <label  class="plainl" for="s89" id="ss89">89</label>

   <input  class="plaini" type="checkbox" name="" id="s90" onClick={onclick} value="90"/>
  <label  class="plainl" for="s90" id="ss90">90</label> 

  <input class="plaini" type="checkbox" name=""  id="s91" onClick={onclick} value="91"/>
  <label  class="plainl" for="s91" id="ss91">91</label>

   <input class="plaini"  type="checkbox" name="" id="s92" onClick={onclick} value="92"/>
  <label  class="plainl" for="s92" id="ss92">92</label>

   <input  class="plaini" type="checkbox" name="" id="s93" onClick={onclick} value="93"/>
  <label  class="plainl" for="s93" id="ss93">93</label>

   <input  class="plaini" type="checkbox" name="" id="s94" onClick={onclick} value="94"/>
  <label  class="plainl" for="s94" id="ss94">94</label>

   <input  class="plaini" type="checkbox" name="" id="s95" onClick={onclick} value="95"/>
  <label  class="plainl" for="s95" id="ss95">95</label>

   <input  class="plaini" type="checkbox" name="" id="s96" onClick={onclick} value="96"/>
  <label  class="plainl" for="s96" id="ss96">96</label> 

 

 
  </div>


  <div class="plainside2">

    
  <input  class="plaini" type="checkbox" name="" id="s97" onClick={onclick} value="97"/>
  <label  class="plainl" for="s97" id="ss97">97</label>

   <input  class="plaini" type="checkbox" name="" id="s98" onClick={onclick} value="98"/>
  <label  class="plainl" for="s98" id="ss98">98</label> 

  <input  class="plaini" type="checkbox" name="" id="s99" onClick={onclick} value="99"/>
  <label  class="plainl" for="s99" id="ss99">99</label>

   <input  class="plaini" type="checkbox" name="" id="s100" onClick={onclick} value="100"/>
  <label  class="plainl" for="s100" id="ss100">100</label> 
    
   <input class="plaini" type="checkbox" name=""  id="s101" onClick={onclick} value="101"/>
  <label  class="plainl" for="s101" id="ss101">101</label>

   <input class="plaini"  type="checkbox" name="" id="s102" onClick={onclick} value="102"/>
  <label  class="plainl" for="s102" id="ss102">102</label>

   <input  class="plaini" type="checkbox" name="" id="s103" onClick={onclick} value="103"/>
  <label  class="plainl" for="s103" id="ss103">103</label>

   <input  class="plaini" type="checkbox" name="" id="s104" onClick={onclick} value="104"/>
  <label  class="plainl" for="s104" id="ss104">104</label>

   <input  class="plaini" type="checkbox" name="" id="s105" onClick={onclick} value="105"/>
  <label  class="plainl" for="s105" id="ss105">105</label>

   <input  class="plaini" type="checkbox" name="" id="s106" onClick={onclick} value="106"/>
  <label  class="plainl" for="s106" id="ss106">106</label> 

  <input  class="plaini" type="checkbox" name="" id="s107" onClick={onclick} value="107"/>
  <label  class="plainl" for="s107" id="ss107">107</label>

   <input  class="plaini" type="checkbox" name="" id="s108" onClick={onclick} value="108"/>
  <label  class="plainl" for="s108" id="ss108">108</label> 

  <input  class="plaini" type="checkbox" name="" id="s109" onClick={onclick} value="109"/>
  <label  class="plainl" for="s109" id="ss109">109</label>

   <input  class="plaini" type="checkbox" name="" id="s110" onClick={onclick} value="110"/>
  <label  class="plainl" for="s110" id="ss110">110</label> 

  <input class="plaini"  type="checkbox" name="" id="s111" onClick={onclick} value="111"/>
  <label  class="plainl" for="s111" id="ss11">111</label>

   <input class="plaini"  type="checkbox" name="" id="s112" onClick={onclick} value="112"/>
  <label  class="plainl" for="s112" id="ss112">112</label>

   <input class="plaini"  type="checkbox" name="" id="s113" onClick={onclick} value="113"/>
  <label  class="plainl" for="s113" id="ss113">113</label>

   <input class="plaini"  type="checkbox" name="" id="s114" onClick={onclick} value="114"/>
  <label  class="plainl" for="s114" id="ss114">114</label> 

  <input class="plaini"  type="checkbox" name="" id="s115" onClick={onclick} value="115"/>
  <label  class="plainl" for="s115" id="ss115">115</label> 

  <input class="plaini"  type="checkbox" name="" id="s116" onClick={onclick} value="116"/>
  <label  class="plainl" for="s116" id="ss116">116</label> 
   <input class="plaini" type="checkbox" name="" id="s117" onClick={onclick} value="117"/>
  <label  class="plainl"  for="s117" id="ss117">117</label>

   <input class="plaini"  type="checkbox" name="" id="s118" onClick={onclick} value="118"/>
  <label  class="plainl" for="s118" id="ss118">118</label>

   <input  class="plaini" type="checkbox" name="" id="s119" onClick={onclick} value="119"/>
  <label  class="plainl" for="s119" id="ss119">119</label>

   <input  class="plaini" type="checkbox" name="" id="s120" onClick={onclick} value="120"/>
  <label  class="plainl" for="s120" id="ss120">120</label>

   <input  class="plaini" type="checkbox" name="" id="s121" onClick={onclick} value="121"/>
  <label  class="plainl" for="s121" id="ss121">121</label>

   <input  class="plaini" type="checkbox" name="" id="s122" onClick={onclick} value="122"/>
  <label  class="plainl" for="s122" id="ss122">122</label>

   <input  class="plaini" type="checkbox" name="" id="s123" onClick={onclick} value="123"/>
  <label  class="plainl" for="s123" id="ss123">123</label>

  <input  class="plaini" type="checkbox" name="" id="s124" onClick={onclick} value="124"/>
  <label  class="plainl" for="s124" id="ss124">124</label>

   <input  class="plaini" type="checkbox" name="" id="s25" onClick={onclick} value="125"/>
  <label  class="plainl" for="s25" id="ss25">25</label> 

  <input  class="plaini" type="checkbox" name="" id="s126" onClick={onclick} value="126"/>
  <label  class="plainl" for="s126" id="ss126">126</label>

   <input class="plaini"  type="checkbox" name="" id="s127" onClick={onclick} value="127"/>
  <label  class="plainl" for="s127" id="ss127">27</label>

   <input class="plaini"  type="checkbox" name="" id="s128" onClick={onclick} value="128"/>
  <label  class="plainl" for="s128" id="ss128">128</label>

   <input class="plaini"  type="checkbox" name="" id="s129" onClick={onclick} value="129"/>
  <label  class="plainl" for="s129" id="ss129">129</label> 

  <input class="plaini"  type="checkbox" name="" id="s130" onClick={onclick} value="130"/>
  <label  class="plainl" for="s130" id="ss130">130</label>

   <input class="plaini"  type="checkbox" name="" id="s131" onClick={onclick} value="131"/>
  <label  class="plainl" for="s131" id="ss131">131</label>

   <input class="plaini"  type="checkbox" name="" id="s132" onClick={onclick} value="132"/>
  <label  class="plainl" for="s132" id="ss132">132</label> 

  <input class="plaini" type="checkbox" name=""  id="s133" onClick={onclick} value="133"/>
  <label  class="plainl" for="s133" id="ss133">133</label>

   <input class="plaini"  type="checkbox" name="" id="s134" onClick={onclick} value="134"/>
  <label  class="plainl" for="s134" id="ss134">134</label>

   <input  class="plaini" type="checkbox" name="" id="s135" onClick={onclick} value="135"/>
  <label  class="plainl" for="s135" id="ss135">35</label>

   <input  class="plaini" type="checkbox" name="" id="s136" onClick={onclick} value="136"/>
  <label  class="plainl" for="s136" id="ss136">136</label>

   <input  class="plaini" type="checkbox" name="" id="s137" onClick={onclick} value="137"/>
  <label  class="plainl" for="s137" id="ss137">137</label>

   <input  class="plaini" type="checkbox" name="" id="s138" onClick={onclick} value="138"/>
  <label  class="plainl" for="s138" id="ss138">138</label> 

  <input  class="plaini" type="checkbox" name="" id="s139" onClick={onclick} value="139"/>
  <label  class="plainl" for="s139" id="ss139">139</label>

   <input  class="plaini" type="checkbox" name="" id="s140" onClick={onclick} value="140"/>
  <label  class="plainl" for="s140" id="ss140">140</label> 

  <input  class="plaini" type="checkbox" name="" id="s141" onClick={onclick} value="141"/>
  <label  class="plainl" for="s141" id="ss141">141</label>

   <input  class="plaini" type="checkbox" name="" id="s142" onClick={onclick} value="142"/>
  <label  class="plainl" for="s142" id="ss142">142</label> 

  <input class="plaini"  type="checkbox" name="" id="s143" onClick={onclick} value="143"/>
  <label  class="plainl" for="s143" id="ss143">143</label>

   <input class="plaini"  type="checkbox" name="" id="s144" onClick={onclick} value="144"/>
  <label  class="plainl" for="s144" id="ss144">144</label>

   <input class="plaini"  type="checkbox" name="" id="s145" onClick={onclick} value="145"/>
  <label  class="plainl" for="s145" id="ss145">145</label>

   <input class="plaini"  type="checkbox" name="" id="s146" onClick={onclick} value="146"/>
  <label  class="plainl" for="s146" id="ss146">146</label> 

  <input class="plaini"  type="checkbox" name="" id="s147" onClick={onclick} value="147"/>
  <label  class="plainl" for="s147" id="ss147">147</label> 

  <input class="plaini"  type="checkbox" name="" id="s148" onClick={onclick} value="148"/>
  <label  class="plainl" for="s148" id="ss148">148</label> 
   <input class="plaini" type="checkbox" name="" id="s149" onClick={onclick} value="149"/>
  <label  class="plainl"  for="s149" id="ss149">149</label>

   <input class="plaini"  type="checkbox" name="" id="s150" onClick={onclick} value="150"/>
  <label  class="plainl" for="s150" id="ss150">150</label>

   <input  class="plaini" type="checkbox" name="" id="s151" onClick={onclick} value="151"/>
  <label  class="plainl" for="s151" id="ss151">151</label>

   <input  class="plaini" type="checkbox" name="" id="s152" onClick={onclick} value="152"/>
  <label  class="plainl" for="s152" id="ss152">152</label>

   <input  class="plaini" type="checkbox" name="" id="s153" onClick={onclick} value="153"/>
  <label  class="plainl" for="s153" id="ss153">153</label>

   <input  class="plaini" type="checkbox" name="" id="s154" onClick={onclick} value="154"/>
  <label  class="plainl" for="s154" id="ss154">154</label>

   <input  class="plaini" type="checkbox" name="" id="s155" onClick={onclick} value="155"/>
  <label  class="plainl" for="s155" id="ss155">155</label>

  <input  class="plaini" type="checkbox" name="" id="s156" onClick={onclick} value="156"/>
  <label  class="plainl" for="s156" id="ss156">156</label>

   <input  class="plaini" type="checkbox" name="" id="s157" onClick={onclick} value="157"/>
  <label  class="plainl" for="s157" id="ss157">157</label> 

  <input  class="plaini" type="checkbox" name="" id="s158" onClick={onclick} value="158"/>
  <label  class="plainl" for="s158" id="ss158">158</label>

   <input class="plaini"  type="checkbox" name="" id="s159" onClick={onclick} value="159"/>
  <label  class="plainl" for="s159" id="ss159">159</label>

   <input class="plaini"  type="checkbox" name="" id="s160" onClick={onclick} value="160"/>
  <label  class="plainl" for="s160" id="ss160">160</label>

   <input class="plaini"  type="checkbox" name="" id="s161" onClick={onclick} value="161"/>
  <label  class="plainl" for="s161" id="ss161">161</label> 

  <input class="plaini"  type="checkbox" name="" id="s162" onClick={onclick} value="162"/>
  <label  class="plainl" for="s162" id="ss162">162</label>

   <input class="plaini"  type="checkbox" name="" id="s163" onClick={onclick} value="163"/>
  <label  class="plainl" for="s163" id="ss163">163</label>

   <input class="plaini"  type="checkbox" name="" id="s164" onClick={onclick} value="164"/>
  <label  class="plainl" for="s164" id="ss164">164</label> 


   <input  class="plaini" type="checkbox" name="" id="s165" onClick={onclick} value="165"/>
  <label  class="plainl" for="s165" id="ss165">165</label>

   <input  class="plaini" type="checkbox" name="" id="s166" onClick={onclick} value="166"/>
  <label  class="plainl" for="s166" id="ss166">166</label> 

  <input  class="plaini" type="checkbox" name="" id="s167" onClick={onclick} value="167"/>
  <label  class="plainl" for="s167" id="ss167">167</label>

   <input  class="plaini" type="checkbox" name="" id="s168" onClick={onclick} value="168"/>
  <label  class="plainl" for="s168" id="ss168">168</label> 

  <input  class="plaini" type="checkbox" name="" id="s169" onClick={onclick} value="169"/>
  <label  class="plainl" for="s169" id="ss169">169</label>

  <input class="plaini" type="checkbox" name=""  id="s170" onClick={onclick} value="170"/>
  <label  class="plainl" for="s170" id="ss170">170</label>

  <input class="plaini" type="checkbox" name=""  id="s171" onClick={onclick} value="171"/>
  <label  class="plainl" for="s171" id="ss171">171</label>

   <input class="plaini"  type="checkbox" name="" id="s172" onClick={onclick} value="172"/>
  <label  class="plainl" for="s172" id="ss172">172</label>

   <input  class="plaini" type="checkbox" name="" id="s173" onClick={onclick} value="173"/>
  <label  class="plainl" for="s173" id="ss173">173</label>

   <input  class="plaini" type="checkbox" name="" id="s174" onClick={onclick} value="174"/>
  <label  class="plainl" for="s174" id="ss174">174</label>



  <input  class="plaini" type="checkbox" name="" id="s175" onClick={onclick} value="175"/>
  <label  class="plainl" for="s175" id="ss175">175</label>

   <input  class="plaini" type="checkbox" name="" id="s176" onClick={onclick} value="176"/>
  <label  class="plainl" for="s176" id="ss176">176</label> 

  <input  class="plaini" type="checkbox" name="" id="s177" onClick={onclick} value="177"/>
  <label  class="plainl" for="s177" id="ss177">177</label>

   <input  class="plaini" type="checkbox" name="" id="s178" onClick={onclick} value="178"/>
  <label  class="plainl" for="s178" id="ss178">178</label> 

  <input  class="plaini" type="checkbox" name="" id="s179" onClick={onclick} value="179"/>
  <label  class="plainl" for="s179" id="ss179">179</label>

   <input  class="plaini" type="checkbox" name="" id="s180" onClick={onclick} value="180"/>
  <label  class="plainl" for="s180" id="ss180">180</label> 


  <input class="plaini" type="checkbox" name=""  id="s181" onClick={onclick} value="180"/>
  <label  class="plainl" for="s181" id="ss181">181</label>

   <input class="plaini"  type="checkbox" name="" id="s182" onClick={onclick} value="182"/>
  <label  class="plainl" for="s182" id="ss182">182</label>

   <input  class="plaini" type="checkbox" name="" id="s183" onClick={onclick} value="183"/>
  <label  class="plainl" for="s183" id="ss183">183</label>

   <input  class="plaini" type="checkbox" name="" id="s184" onClick={onclick} value="184"/>
  <label  class="plainl" for="s184" id="ss184">184</label>

   <input  class="plaini" type="checkbox" name="" id="s185" onClick={onclick} value="185"/>
  <label  class="plainl" for="s185" id="ss185">185</label>

   <input  class="plaini" type="checkbox" name="" id="s186" onClick={onclick} value="186"/>
  <label  class="plainl" for="s186" id="ss186">186</label> 

  <input  class="plaini" type="checkbox" name="" id="s187" onClick={onclick} value="187"/>
  <label  class="plainl" for="s187" id="ss187">187</label>

   <input  class="plaini" type="checkbox" name="" id="s188" onClick={onclick} value="188"/>
  <label  class="plainl" for="s188" id="ss188">188</label> 

  <input  class="plaini" type="checkbox" name="" id="s189" onClick={onclick} value="189"/>
  <label  class="plainl" for="s189" id="ss89">189</label>

   <input  class="plaini" type="checkbox" name="" id="s190" onClick={onclick} value="190"/>
  <label  class="plainl" for="s190" id="ss190">190</label> 

  <input class="plaini" type="checkbox" name=""  id="s191" onClick={onclick} value="191"/>
  <label  class="plainl" for="s191" id="ss191">191</label>

   <input class="plaini"  type="checkbox" name="" id="s192" onClick={onclick} value="192"/>
  <label  class="plainl" for="s192" id="ss192">192</label>

  </div>
</div>
</div>

</div>
<div className="pseattypes">
    <h2>FIND SEATS BY COLORS</h2>
          <div className="seatmenu">

  
        <div className="item"><div className="sp1"></div> <h3>Available</h3></div>
            <div className="item" ><div className="sp2"></div><h3>Selected</h3></div>
            <div className="item"> <div className="sp3"></div><h3>Booked</h3></div>
          </div>

  

         
</div>

</div>

<Footer/>
  </div>
  )
}
export default FlightBook
