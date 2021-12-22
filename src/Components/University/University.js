import React from "react";
import { NavLink } from "react-router-dom";
import "./University.css";

const University = (props) => {
  const { country, name, domains } = props.university || {};
  return (
    <div className="container">
      <div className="card bg-info" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{country}</h5>
          <p class="card-text">{name}</p>
          <button className="btn btn-warning ">
          <NavLink className="text-dark nav" to={`/details/${domains}`}>Details</NavLink>
          </button>
          {/* <a href="#details" class="btn btn-primary">
            Details
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default University;
