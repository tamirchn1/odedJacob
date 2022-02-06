import React from "react";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <div id="home-img" class="img-block">
        <img alt="oded's images" src={require("../images/home-img.jpg")} />
        <span class="px3 about-img">
          untitled, 2018 <br />
          acrylic on canvas,
          <br />
          135x135 cm
        </span>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
