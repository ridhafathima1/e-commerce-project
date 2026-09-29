import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
function UserLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
export default UserLayout;