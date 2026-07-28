import { NavLink } from "react-router-dom";
import { LogoutButton } from "./Button";

export function SideBar() {
  return (
    <div>
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <h3>Admin Portal</h3>
        </div>
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <LogoutButton />
      </div>
    </div>
  );
}
