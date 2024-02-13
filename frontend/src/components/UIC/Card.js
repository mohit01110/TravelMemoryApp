import React from "react";

export default function Card() {
  return (
    <div style={{marginBottom: "2%", marginTop: "2%"}}>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Trip Title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Trip Type</h6>
          <p class="card-text">
            Short Description. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button href="/experiencedetails" class="btn btn-primary">
            More Details
          </button>
          
        </div>
      </div>
    </div>
  );
}
