import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div className="bg-white w-[200px] h-full p-2">
      <div className="m-3">
        <span className="brand-name fs-4 me-3 hover:text-blue-800">
          FLIGHT
        </span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <span className="list-group-item hover:bg-blue-700 hover:text-white">
          <span className="fs-5">Dashboard</span>
        </span>
        <span className="list-group-item  hover:bg-blue-700 hover:text-white">
          <span className="fs-5">Home</span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
