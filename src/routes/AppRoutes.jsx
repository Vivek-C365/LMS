import { Route, Routes } from 'react-router-dom'
import AppLayout from '../pages/AppLayout'
import PageNotFound from '../pages/PageNotFound'
import Home from '../pages/Home'


export default function AppRoutes() {
  return (
    <>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
    </>
  )
}
