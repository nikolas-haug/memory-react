import React from "react";
import "./CritterCard.css";

const CritterCard = props => (
  <div className="col-md-3 col-sm-12 mx-auto">
    <div className="card">
      <div className="card-body" value={props.id} onClick={() => props.handleClick(props.id)}>
        <img className="img-fluid" alt={props.name} src={props.image}/>
      </div>
    </div>
  </div>
);

export default CritterCard;
