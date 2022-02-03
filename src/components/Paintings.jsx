import React from "react";
function Paintings() {
  return (
    <div class="content-container">
      <h1 class="">Paintings</h1>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/3.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/3.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/3.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
    </div>
  );
}

export default Paintings;
