import "../Dashboard.css";
import { SideBar } from "../components/Sidebar";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { username } = useContext(UserContext);

  if (!username) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="dash-wrapper">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="dashboard">
          <h3>Welcome {username}</h3>
          <p>Quick Statistics</p>
          <p>Students : 32</p>
          <p>Male : 18</p>
          <p>Female : 14</p>
          <p>Todays Date</p>
          <p>Recent Students</p>
        </div>
      </div>
    </div>
  );
}
