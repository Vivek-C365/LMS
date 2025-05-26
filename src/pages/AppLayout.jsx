import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
