import React from "react";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <div>
        <div class="index">
          <img
            class="index-img"
            alt="oded's images"
            src={require("../images/home-img.jpg")}
          />
        </div>
      </div>
      <Footer class="footer-index" />
    </div>
  );
}
export default Home;
