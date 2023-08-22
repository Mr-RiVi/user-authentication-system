import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminHome from '../pages/Home-Page-Admin/adminHome.js'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<AdminHome />} />
    </Routes>
  )
}

export default AdminRoutes
