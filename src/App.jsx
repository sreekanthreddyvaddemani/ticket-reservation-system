import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import LandingHomePage from './Components/LandingHomePage'
import UserLogin from './Components/UserLogin'
import Train from './Components/Train'
import HomePage from './Components/HomePage'
import ContactUs from './Components/FlightBook'
import AdminSignUp from './Components/AdminSignUp'
import AdminHomePage from './Components/AdminHomePage'
import Error from './Components/Error'
import AboutUs from './Components/AboutUs'
import AdminBusList from './Components/AdminBusList'

import UserSignUp from './Components/UserSignUp'
import AdminLogin from './Components/AdminLogin'
import AddBus from './Components/AddBus'
import { CarRental } from '@mui/icons-material'
import Security1 from './Components/Security1'
import Security2 from './Components/Security2'
import Footer from './Components/Footer'
import Buses from './Components/Buses'
import TicketBooking from './Components/TicketBooking'
import TotalBuses from './Components/TotalBuses'
import NavUser from './Components/NavUser'
import UserHomePage from './Components/UserHomePage'
import BookingList from './Components/BookingList'
import Home from './Components/Home'
import Offers from './Components/Offers'
import Help from './Components/Trainticketbook'
import TrackTicket from './Components/TrackTicket'
import FilterTrains from './Components/FilterTrains'
import UpdateBus from './Components/UpdateBus'
import FilterFlights from './Components/FilterFlights'
import FlightBook from './Components/FlightBook'



const App = () => {
  return (
    <div>
           <BrowserRouter>
           {/* <Home/> */}
           <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/userlogin" element={<UserLogin/>}/>
           <Route path="/about" element={<AboutUs/>}/>
<Route path='/flightbook/:index' element={<FlightBook/>}/>
           <Route path="/usersignup" element={<UserSignUp/>}/>
           <Route path="/adminlogin" element={<AdminLogin/>}/>
           <Route path="/adminsignup" element={<AdminSignUp/>}/>
           <Route path="/userhome/*" element={<Security2 Child={UserHomePage}/>}/>
           <Route path="/adminhomepage/*" element={<Security1 Child={AdminHomePage}/>}/>
           <Route path='/filterbuses' element={<Buses/>}/>
           <Route path='/filterflights' element={<FilterFlights/>}/>
           <Route path='/buses' element={<TotalBuses/>}/>
           <Route path='/filtertrains' element={<FilterTrains/>}/>
           <Route path='/usernav' element={<NavUser/>}/>
           <Route path='/nav' element={<Navbar/>}/>
           <Route path='/bookinglist' element={<BookingList/>}/>
           <Route path="/*" element={<Error/>}/>
           <Route path="/offers" element={<Offers/>}/>
           <Route path="/train" element={<Train/>}/>
           <Route path="/track" element={<TrackTicket/>}/>
           <Route path="/ticketbook/:index" element={<TicketBooking/>}/>
           <Route path="/updatebus/:index" element={<UpdateBus/>}/>

           </Routes>
            </BrowserRouter>
    </div>
  )
}
export default App
