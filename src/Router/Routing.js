import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from ".././Pages/Login"
import Register from ".././Pages/Register"
import Dashboard from '../Pages/Dashboard'
import Onboarding from '../Pages/Onboarding'


function Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
        {/* <Route component={NotFound} /> */}
        </Routes>
  </BrowserRouter>
  )
}

export default Routing