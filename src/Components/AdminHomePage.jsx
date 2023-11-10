import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AddBus from './AddBus'
import Reservations from './Reservations'
import UsersList from './UsersList'
import BusList from './AdminBusList'
import NavAdminList from './NavAdminList'
import AdminTrainList from './AdminTrainList'
import AddTrain from './AddTrain'
import TrainReservations from './TrainReservations'
import AddFlight from './AddFlight'
import AdminFlightList from './AdminFlightList'
import FlightReservations from './FlightReservations'
const AdminHomePage = () => {
  return (
    <div>
     <NavAdminList/>
<Routes>
<Route path='/addbus' element={<AddBus/>}/>
<Route path='/addflight' element={<AddFlight/>}/>
<Route path='/userslist' element={<UsersList/>}/>
<Route path='/reservations' element={<Reservations/>}/>
<Route path='/addtrain' element={<AddTrain/>}/>
<Route path='trainlist/:index' element={<TrainReservations/>}/>
<Route path='flighttickets/:index' element={<FlightReservations/>}/>
<Route path='/trainlist' element={<AdminTrainList/>}/>
<Route path='/buslist' element={<BusList/>}/>
<Route path='/flightlist' element={<AdminFlightList/>}/>

</Routes>
    </div>
  )
}
export default AdminHomePage
