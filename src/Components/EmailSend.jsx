import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PauseIcon from '@mui/icons-material/Pause';
import RepeatIcon from '@mui/icons-material/Repeat';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Button from '@mui/material/Button';

import '../Styles/homepage.css'
const EmailSend = () => {
  const current = new Date();
  let day = current.getDate();
  let month =current.getMonth();
  let year = current.getFullYear();
const time = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});
  return (
    <div>
      <div id="mainone">

    <div id="one">
            <div id="onea">
<div className="oneaa"></div>
<div className="oneab">
  <center>
  <h2>{time}</h2>
    <h3>{day}-{month}-{year}</h3>
    </center>
    </div>
<div id="oneac">
  <ShuffleIcon style={{ color: "white" }}/>
<SkipPreviousIcon style={{ color: "white" }}/>
  <PauseIcon style={{ color: "white" }}/>
  <SkipNextIcon style={{ color: "white" }}/>
  <RepeatIcon style={{ color: "white" }}/>
</div>
            </div>
           <div id="oneb">
  
           <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DateCalendar className="calender"/>
    </LocalizationProvider>
           <div id="oneba"></div>
          </div>
    </div>
    <div id="two">
      <div class="wrapper">
         <div class="title">
            LOGIN FORM
         </div>
         <form action="#">
            <div class="field">
               <input type="text" required/>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required/>
               <label>Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
               </div>
               <div class="pass-link">
                  <a href="#">Forgot password?</a>
               </div>
            </div>
            <div class="field">
            <Button id="button" variant="contained">LOGIN</Button>

            </div>
            <div class="signup-link">
               Not a member? <a href="#">Signup now</a>
            </div>
         </form>
      </div>
    </div>
      </div>
    </div>
  )
}
export default EmailSend
