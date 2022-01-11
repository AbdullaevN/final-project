
import React from "react";
import { BsDoorOpen } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navibar.css";

const Registration = () => {
  return (
    <div className="registration">
      <Link to="/signup">
        <BsDoorOpen />
      </Link>
    </div>
  );
};

export default Registration;
