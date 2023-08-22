import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CustomerHome from '../pages/Home-Page-Customer/customerHome.js'
import AdminHome from '../pages/Home-Page-Admin/adminHome.js'

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomerHome />} />
      <Route path="/home" element={<AdminHome />} />
    </Routes>
  )
}

export default CustomerRoutes
