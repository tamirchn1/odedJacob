import React from "react";
import Footer from "./Footer";

function Works() {
  return (
    <div>
      <div class="content-container">
        <h1 class="">Paintings</h1>
        <div class="img-block">
          <img alt="oded's images" src={require("../images/paintings/1.jpg")} />
          <span class="px3 about-img">
            Students, 2021 <br />
            Oil on Canvas <br />
            90cm/120cm
          </span>
        </div>

        <div class="img-block">
          <img alt="oded's images" src={require("../images/paintings/2.jpg")} />
          <span class="px3 about-img">
            {" "}
            Sara, 2018 <br />
            Oil on Canvas <br />
            160x200 cm
          </span>
        </div>
        <div class="img-block long-pic ">
          <img alt="oded's images" src={require("../images/paintings/3.jpg")} />
          <span class="px3 about-img">
            {" "}
            Grandfather, 2019 <br />
            Oil on Canvas <br />
            180x100cm
          </span>
        </div>
        <div class="img-block">
          <img alt="oded's images" src={require("../images/paintings/4.jpg")} />
          <span class="px3 about-img">
            {" "}
            Border Patrol Soldier <br /> in the Gym, 2019 <br />
            Oil on Canvas <br />
            80/100cm
          </span>
        </div>
        <div class="img-block">
          <img alt="oded's images" src={require("../images/paintings/5.jpg")} />
          <span class="px3 about-img">
            Container, 2020 <br />
            Oil on Canvas, <br />
            30x40cm
          </span>
        </div>

        <div class="img-block">
          <img alt="oded's images" src={require("../images/paintings/7.jpg")} />
          <span class="px3 about-img">
            Truck, 2020 <br />
            Oil on Canvas <br />
            120x140 cm
          </span>
        </div>
        <div class="img-block">
          <img alt="oded's images" src={require("../images/paintings/8.jpg")} />
          <span class="px3 about-img">
            Keys, 2021
            <br />
            Mixed Media on Canvas
            <br />
            79x91 cm
          </span>
        </div>
        <div class="img-block">
          <img alt="oded's images" src={require("../images/paintings/9.jpg")} />
          <span class="px3 about-img">
            The banality of evil, 2021 <br />
            Oil on Canvas <br />
            110x170 cm
          </span>
        </div>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../images/paintings/10.jpg")}
          />
          <span class="px3 about-img">
            Studio corner, 2018 <br />
            Oil on Canvas <br />
            140x160 cm
          </span>
        </div>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../images/paintings/11.jpg")}
          />
          <span class="px3 about-img">
            Siren, 2018 <br />
            Acrylic on Canvas <br />
            120x140 cm
          </span>
        </div>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../images/paintings/12.png")}
          />
          <span class="px3 about-img">
            Qalandiya Checkpoint, 2019 <br />
            Oil on Canvas
            <br />
            30x40cm
          </span>
        </div>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../images/paintings/13.jpg")}
          />
          <span class="px3 about-img">
            Political Prisoner, 2021
            <br />
            Mixed Media on Canvas <br />
            97x130 cm
          </span>
        </div>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../images/paintings/14.jpg")}
          />
          <span class="px3 about-img">
            Dementia Phone, 2019
            <br />
            Mixed Media on Canvas
            <br />
            150x150 cm
          </span>
        </div>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../images/paintings/15.jpg")}
          />
          <span class="px3 about-img">
            Student, 2021 <br />
            Oil on Canvas <br />
            80x100 cm
          </span>
        </div>
        <div class="img-block">
          <img
            alt="oded's images"
            src={require("../images/paintings/16.jpg")}
          />
          <span class="px3 about-img">
            Seabed, 2019 <br />
            Oil on Canvas <br />
            190x210 cm
          </span>
        </div>
      </div>
      <Footer id="footerindex" />
    </div>
  );
}

export default Works;
