import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Help from './Trainticketbook'
import AboutUs from './AboutUs'
import AdminLogin from './AdminLogin'
import AdminSignUp from './AdminSignUp'
import UserLogin from './UserLogin'
import UserSignUp from './UserSignUp'
import Offers from './Offers'
const Home = () => {
  return (
    <div>
            <Navbar/>
      <BrowserRouter>
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/help' element={<Help/>}/>
<Route path='/about' element={<AboutUs/>}/>
<Route path='/adminlogin' element={<AdminLogin/>}/>
<Route path='/adminsignup' element={<AdminSignUp/>}/>
<Route path='/userlogin' element={<UserLogin/>}/>
<Route path='/usersignup' element={<UserSignUp/>}/>\
<Route path='/offers' element={<Offers/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}
export default Home
