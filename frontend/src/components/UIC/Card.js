import React from "react";

export default function Card(props) {
  return (
    <div >
      <div class="card" style={{marginBottom: "2%", marginTop: "2%"}}>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.tripType}</h6>
          <p class="card-text">
          {props.description}
          </p>
          <button href="/experiencedetails" class="btn btn-primary">
            More Details
          </button>
          
        </div>
      </div>
    </div>
  );
}
