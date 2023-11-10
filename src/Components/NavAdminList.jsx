import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FlightIcon from '@mui/icons-material/Flight';
import LuggageIcon from '@mui/icons-material/Luggage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrainIcon from '@mui/icons-material/Train';
const NavAdminList = () => {
let navigate=useNavigate()
  let logOut=(()=>{
    localStorage.clear()
    toast.error("Account LogOut Successfully",{
      position:toast.POSITION.TOP_CENTER
  })
    navigate("/")
  })
  let logoclick=()=>{
    navigate("/adminhomepage")
  }
  return (
    <div>
      <div id="navadmin">
      <div id="logoadmin">
        <div id='logo1admin' onClick={logoclick}>
          <div id='logo2admin'>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"white" } }/>
            <h2>LONG</h2></div>
            <div id='logo3admin'>
            <h2>TRIP</h2>
            <LuggageIcon style={{height:"30px" ,width:"auto",color:"black" } }/>
            </div>
        </div>
      </div>
      <div id="contents1admin">
             <div className="conadmin"><AccountCircleIcon style={{ color: "rgb(224, 101, 19)" }}/><li id=""><Link to="/adminhomepage/userslist">USERS</Link></li></div>
             <h2 id="line">|</h2>
             <div className="conadmin" ><DirectionsBusIcon style={{ color: "rgb(224, 101, 19)" }}/><li><Link to="/adminhomepage/addbus">ADDBUS</Link></li></div>
             <h2 id="line">|</h2>
             
             <div className="conadmin" ><TrainIcon style={{ color: "rgb(224, 101, 19)" }}/><li><Link to="/adminhomepage/addtrain">ADDTRAIN</Link></li></div>
             <h2 id="line">|</h2>
             <div className="conadmin" ><FlightIcon style={{ color: "rgb(224, 101, 19)" }}/><li><Link to="/adminhomepage/addflight">ADDFLIGHT</Link></li></div>
             <h2 id="line">|</h2>

             <div className="conadmin"><li id=""><Link to="/adminhomepage/buslist">BUSES</Link></li></div>
             <h2 id="line">|</h2>
             
             <div className="conadmin"><li id=""><Link to="/adminhomepage/trainlist">TRAINS</Link></li></div>
             <h2 id="line">|</h2>
              
             <div className="conadmin"><li id=""><Link to="/adminhomepage/flightlist">FLIGHTS</Link></li></div>
             <h2 id="line">|</h2>

             <div className="conadmin" onClick={logOut}><li><Link>LogOut</Link></li></div>
      </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
export default NavAdminList
