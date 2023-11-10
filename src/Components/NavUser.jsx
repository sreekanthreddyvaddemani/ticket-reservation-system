import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LuggageIcon from '@mui/icons-material/Luggage';

import TrainIcon from '@mui/icons-material/Train';

import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const NavUser = () => {
  let [n,setN]=useState()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let user=JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
  setN(user.name.slice(0,1));
  })
let navigate=useNavigate()
  let logOut=(()=>{
    localStorage.clear()
    navigate("/")
    toast.error("Account LogOut Successfully",{
      position:toast.POSITION.TOP_CENTER
  })
  })
  let submit=()=>{
    navigate("/")
  }
  return (
    <div>
      <div id="navuser">
      <div id="logouser">
        <div id='logo1user' onClick={submit}>
          <div id='logo2user'>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"black" } }/>
            <h2>LONG</h2></div>
            <div id='logo3user'>
            <h2>TRIP</h2>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"white" } }/>
            </div>
        </div>
      </div>
      <div id="contents1user">
             <div className="conuser">
                <li id=""><Link to="/userhome">BUS</Link></li></div>
             <div className="conuser" >
                <li><Link to="/userhome/train">TRAIN</Link></li></div>
                <div className="conuser" >
               
                <li><Link to="/userhome/flights">FLIGHT</Link></li></div>
             <div className="conuser">
             {/* <FormatListBulletedIcon style={{ color: "white", height:"18px", width:"18px" }}/> */}
                <li id=""><Link to="/userhome/bookinglist">BUSBOOKINGS</Link></li></div>
                <div className="conuser">
             {/* <FormatListBulletedIcon style={{ color: "white", height:"18px", width:"18px" }}/> */}
                <li id=""><Link to="/userhome/trainbookinglist">TRAINBOOKINGS</Link></li></div> 
                <div className="conuser">
                <li id=""><Link to="/userhome/flightbookinglist">FLIGHTBOOKINGS</Link></li></div>
                </div>
                    <div className="profile">
   <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <h1>{n}</h1>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
    </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
export default NavUser
