import React from "react";
import FooterIndex from "./FooterIndex";

function Home() {
  return (
    <fragmant>
      <div class="homepage">
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
        </div>
        <FooterIndex />
      </div>
    </fragmant>
  );
}
export default Home;
