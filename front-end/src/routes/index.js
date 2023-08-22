import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RequireAuth from '../components/common/RequireAuth/requireAuth.js'

import Layout from '../components/layout/layout.js'
import Login from '../pages/Login/login'
import Signup from '../pages/Signup/signup'
import AdminRoutes from '../routes/admin.js'
import CustomerRoutes from '../routes/customer.js'

const ROLES = {
  Customer: 2001,
  Moderator: 1984,
  Admin: 5150,
}

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<CustomerRoutes />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default IndexRoutes
