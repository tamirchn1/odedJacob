import React from "react";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <div id="home-img" class="img-block">
        <img alt="oded's images" src={require("../images/home-img.jpg")} />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
