import React from "react";
import Footer from "./Footer";
function Paintings() {
  return (
    <div class="content-container">
      <h1 class="">Paintings</h1>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/1.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/2.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/3.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/4.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/5.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/6.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/7.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/8.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/9.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/10.jpg")} />
        <span class="px3 about-img">Text about the image</span>
      </div>
      <Footer />
    </div>
  );
}

export default Paintings;
