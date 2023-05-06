import React, { useState, useEffect } from "react";
import FlightData from "./FlightData";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardContent = () => {
  return (
    <div className="px-3">
    
      <div className="d-flex  bg-primary justify-content-center align-items-center">
        <div className="">
          

          <div className="">
            <FlightData />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardContent;
