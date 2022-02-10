import React from "react";
import Footer from ".././Footer";
function Drawings() {
  return (
    <div>
      <div class="content-container">
        <h1 class="">Drawings</h1>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../../images/drawings/1.jpg")}
          />
          <span class="px3 about-img">
            {" "}
            Untitled (political prisoners),2020 <br />
            Charcoal, ink and watercolors on paper <br />
            77x57cm
          </span>
        </div>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../../images/drawings/2.jpg")}
          />
          <span class="px3 about-img">
            {" "}
            Workers, 2021
            <br />
            Colored pencil and acrylic on canvas, <br /> mounted on cardboard
            <br />
            25/30cm
          </span>
        </div>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../../images/drawings/3.jpg")}
          />
          <span class="px3 about-img">
            {" "}
            The Banality of evil, 2021
            <br />
            Charcoal on paper
            <br />
            110/160cm (Detail)
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Drawings;
