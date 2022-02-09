import React from "react";
import Footer from "../Footer";

function Blade() {
  return (
    <div class="content-container">
      <div className="blade media-text text-center">
        <h2>Blade Memory </h2>
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
