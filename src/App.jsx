// import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Detail from './components/Details'
import Reservation from './components/Reservations'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import ResetPassword from './components/auth/ResetPassword'

const App = () => (
  <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/details/:id" element={<Detail/>}></Route>
    <Route path="/reservations" element={<Reservation/>}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path='/signup' element={<Signup />} />
    <Route path="/reset-password" element={<ResetPassword />}></Route>
  </Routes>
)

export default App