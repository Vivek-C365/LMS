import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../pages/AppLayout'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import Dashboard from '../pages/Dashboard'

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
            <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
