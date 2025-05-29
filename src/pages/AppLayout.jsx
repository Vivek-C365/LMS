import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import ModalRoot from "../components/common/ModalRoot";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Outlet />
        </div>
      </div>
      <ModalRoot/>
    </div>
  );
}
