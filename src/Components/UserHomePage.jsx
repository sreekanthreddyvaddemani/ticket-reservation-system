import React from 'react'
import NavUser from './NavUser'
import { Route, Routes } from 'react-router-dom'
import LandingHomePage from './LandingHomePage'
import Train from './Train'
import Profile from './Profile'
import BookingList from './BookingList'
import Trainticketbook from './Trainticketbook'
import TrainTicketList from './TrainTicketList'
import Flight from './Flight'
import FlightBookings from './FlightBookings'
const UserHomePage = () => {
  return (
    <div>
         <NavUser/>
<Routes>
<Route path='/' element={<LandingHomePage/>}/> 
<Route path='/train' element={<Train/>}/>
<Route path='/flights' element={<Flight/>}/>

<Route path="/trainticket/:index" element={<Trainticketbook/>}/>
<Route path='/bookinglist' element={<BookingList/>}/>
<Route path='trainbookinglist' element={<TrainTicketList/>}/>
<Route path='/flightbookinglist' element={<FlightBookings/>}/>
<Route path='/profile' element={<Profile/>}/>
</Routes>
    </div>
  )
}
export default UserHomePage
