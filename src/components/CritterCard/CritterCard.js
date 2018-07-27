import React from "react";
import "./CritterCard.css";

const CritterCard = props => (
  <div className="col-md-4 col-sm-12 mx-auto">
    <div className="card">
      <div className="card-body">
        <img className="img-fluid" alt={props.name} src={props.image} onClick={props.handleClick}/>
      </div>
    </div>
  </div>
);

export default CritterCard;
