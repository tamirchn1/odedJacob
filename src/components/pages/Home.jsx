import React from "react";
import FooterIndex from "../FooterIndex";

function Home() {
  return (
    <body className="body">
      <div class="homepage">
        <div>
          <div>
            <div class="index">
              <img
                class="index-img"
                alt="oded's images"
                src={require("../../images/home-img.jpg")}
              />
            </div>{" "}
            <h1 id="index-header">Oded Jacob </h1>
          </div>
        </div>
        <FooterIndex />
      </div>
    </body>
  );
}
export default Home;
