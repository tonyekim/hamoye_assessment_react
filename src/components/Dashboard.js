import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import DashboardContent from "./DashboardContent";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Dashboard() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="container-fluid bg-secondary">
      <div className="row ">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}

        <div className="col overflow-y-scroll">
          <DashboardContent Toggle={Toggle} />

          {/* {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button onClick={logout}> Logout </button>
      )} */}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
