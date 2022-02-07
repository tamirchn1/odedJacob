import React from "react";
import FooterIndex from "./FooterIndex";
function Home() {
  return (
    <div>
      <div className="content-container">
        <div>
          <div class="index">
            <img
              class="index-img"
              alt="oded's images"
              src={require("../images/home-img.jpg")}
            />
          </div>
        </div>
      </div>
      <FooterIndex />
    </div>
  );
}
export default Home;
