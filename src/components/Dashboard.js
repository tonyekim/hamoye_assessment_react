
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import React, {useState} from "react";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
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
        </div>
      </div>
    </div>
  );
}
export default Dashboard;


