import React from "react";
import Footer from "./Footer";
function Paintings() {
  return (
    <div class="content-container">
      <h1 class="">Paintings</h1>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/1.jpg")} />
        <span class="px3 about-img">
          Students, 2021 <br />
          oil on canvas <br />
          90cm/120cm
        </span>
      </div>

      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/2.jpg")} />
        <span class="px3 about-img">
          {" "}
          Sara, 2018 <br />
          Oil on canvas <br />
          160x200 cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/3.jpg")} />
        <span class="px3 about-img">
          {" "}
          grandfather, 2019 <br />
          Oil on canvas <br />
          180x100cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/4.jpg")} />
        <span class="px3 about-img">
          {" "}
          border Patrol soldier in the gym, 2019 <br />
          oil on canvas <br />
          80/100cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/5.jpg")} />
        <span class="px3 about-img">
          container, 2020 <br />
          oil on canvas, <br />
          30x40cm
        </span>
      </div>

      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/7.jpg")} />
        <span class="px3 about-img">
          truck, 2020 <br />
          oil on canvas <br />
          120x140 cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/8.jpg")} />
        <span class="px3 about-img">
          keys, 2021
          <br />
          mixed media on canvas
          <br />
          79x91 cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/9.jpg")} />
        <span class="px3 about-img">
          the banality of evil, 2021 <br />
          oil on canvas <br />
          110x170 cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/10.jpg")} />
        <span class="px3 about-img">
          studio corner, 2018 <br />
          oil on canvas <br />
          140x160 cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/11.jpg")} />
        <span class="px3 about-img">
          siren, 2018 <br />
          acrylic on canvas <br />
          120x140 cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/12.png")} />
        <span class="px3 about-img">
          Qalandiya checkpoint, 2019 <br />
          oil on canvas,
          <br />
          30x40cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/13.jpg")} />
        <span class="px3 about-img">
          political prisoner, 2021
          <br />
          mixed media on canvas <br />
          97x130 cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/14.jpg")} />
        <span class="px3 about-img">
          Dementia phone, 2019
          <br />
          mixed media on canvas
          <br />
          150x150 cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/15.jpg")} />
        <span class="px3 about-img">
          student, 2021 <br />
          oil on canvas <br />
          80x100 cm
        </span>
      </div>
      <div class="img-block">
        <img alt="oded's images" src={require("../images/paintings/16.jpg")} />
        <span class="px3 about-img">
          seabed, 2019 <br />
          oil on canvas <br />
          190x210 cm
        </span>
      </div>

      <Footer />
    </div>
  );
}

export default Paintings;
