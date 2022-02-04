import React from "react";
import Footer from "./Footer";
function Drawings() {
  return (
    <div class="content-container">
      <h1 class="">Drawings</h1>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/drawings/1.jpg")} />
        <span class="px3 about-img">
          {" "}
          Students, 2021 <br />
          oil on canvas <br />
          90cm/120cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/drawings/2.jpg")} />
        <span class="px3 about-img">
          {" "}
          Students, 2021 <br />
          oil on canvas <br />
          90cm/120cm
        </span>
      </div>

      <Footer />
    </div>
  );
}

export default Drawings;
