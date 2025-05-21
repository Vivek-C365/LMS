import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


export default function AppLayout() {
  return (
    <div className="w-full">
      <Navbar/>
      <div className="w-full p-[4rem]">
        <div className="container p-[2rem]">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
