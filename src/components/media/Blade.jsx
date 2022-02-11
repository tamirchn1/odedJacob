import React from "react";

function Blade() {
  return (
    <div class="content-container">
      <div className="blade media-text text-center">
        <h2> Blade Memory (2015) </h2>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.cca.org.il/exhibition/blade-memory"
        >
          (Gallery archive)
        </a>
        <h5>Curators: Naama Arad, Eran Nave and Ishai Shapira Kalter</h5>
        <img
          class="mt-1 media-img media-text"
          alt="oded's images"
          src={require("../../images/blade.jpg")}
        />
      </div>
    </div>
  );
}

export default Blade;
