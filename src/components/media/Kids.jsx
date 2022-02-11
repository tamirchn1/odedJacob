import React from "react";
import Footer from "../Footer";

function Kids() {
  return (
    <div class="content-container">
      <div className="media-text text-center">
        <h2>Kids (2021) </h2>
        <a
          target="_blank"
          rel="noreferrer"
          className="display-5 d-block"
          Href="https://en.tama-outofthecube.com/oded-yaacov
"
        >
          (article Link)
        </a>
        <img
          class="mt-2 media-img media-text"
          alt="oded's images"
          src={require("../../images/media/kids.jpg")}
        />
        <img
          class="mt-2 media-img media-text"
          alt="oded's images"
          src={require("../../images/media/kids2.png")}
        />
      </div>
    </div>
  );
}

export default Kids;
