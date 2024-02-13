import React from "react";

export default function ExperienceDetails() {
  return (
    <div style={{ margin: "2%" }}>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8" style={{ textAlign: "center" }}>
          <h1>Trip Name</h1>
        </div>
        <div class="col-2"></div>
      </div>

      <div class="row">
        <div class="col-2"></div>
        <div class="col-8" style={{ textAlign: "center" }}>
          <img
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/de/fc/40.jpg"
            alt="Image Tag"
          ></img>
        </div>
        <div class="col-2"></div>
      </div>
      <br></br>

      <div class="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6 border bg-light">
            <div class="row">
              <div class="col-12">Name of Hotel: Hotel XYZ</div>
            </div>
            <div class="row">
              <div class="col-6">Start Date: 1/1/2001</div>
              <div class="col-6">End Date: 6/6/2001</div>
            </div>
            <div class="row">
              <div class="col-12">Places Visited: Delhi , Paris, etc.</div>
            </div>
            <div class="row">
              <div class="col-12">Total Cost: 999999</div>
            </div>
            <div class="row">
              <div class="col-12">Trip Type: Backpacking</div>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10" style={{ textAlign: "justify" }}>
          The Taj Mahal is an iconic monument located in Agra, India. It is
          widely considered one of the most beautiful buildings in the world and
          is a UNESCO World Heritage Site. Commissioned in 1632 by the Mughal
          emperor Shah Jahan in memory of his wife Mumtaz Mahal, the Taj Mahal
          is renowned for its stunning white marble architecture, intricate
          carvings, and symmetrical design. It is a symbol of eternal love and
          is visited by millions of tourists from around the globe every year.
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  );
}
