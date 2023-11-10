import * as React from 'react';
import '../Styles/registration.css'
import Button from '@mui/material/Button';
import img1 from '../Images/google-colored-20b8216731.svg'
import img2 from '../Images/facebook-colored-af4249157d.svg'
import img3 from '../Images/download.png'
import img4 from '../Images/linkedin-colored-1db195795c.svg'
import img5 from '../Images/github-colored-1db995054b.svg'
import '../Styles/carrental.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
// import sun from  '../Images/sun-symbol.svg'
import sun from  '../Images/sun-3-xxl.png'

import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';
const HomePage = () => {

  let [hour,setHour]=useState()
let [minutes,setMinutes]=useState()
let [seconds,setSeconds]=useState()
let [ampm,setAmPm]=useState()

 
setInterval(()=>{
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  var am=h>=12?'PM' :'AM';
if(h>12){
    h=h-12;
}
h=(h<10)?"0"+h:h;
m=(m<10)?"0"+m:m;
s=(s<10)?"0"+s:s;
setHour(h)
setMinutes(m)
setSeconds(s)
setAmPm(am)
  })
  return (
    <div>
      <Navbar/>
       <div className="box">
        <div className="cont12">
        <div className="timedisplay">
<div className="hour">
<div className="timeh"><h1>{hour}</h1></div>
<p>HOURS</p>
</div>
<div className="hour">
<div className="timem"><h1>{minutes}</h1></div>
<p>MINUTES</p>
</div>
<div className="hour">
<div className="times"><h1>{seconds}</h1></div>
<p>SECONDS</p>
</div>
        </div>

<div className="cont1">
<h1><a href="/adminlogin">ADMIN</a></h1>
</div>
{/* <h1>
{ampm}
</h1> */}
<div className="cont2">
<h1><a href="/userlogin">USER</a></h1>
</div>

</div>
<div 
    className="rotating">
<div className="rone">
<div className="rtwo">
<div className="rthree">
<img src={sun} alt=""/>

</div>
</div>
</div>
  </div>
       </div>
<Footer/>
    </div>

  )
}
export default HomePage
