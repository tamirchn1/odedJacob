import React from "react";
import Juklooks from "./Juklooks";
import Ynet from "./Ynet";
import Footer from "../Footer";
import Blade from "./Blade";
import Kids from "./Kids";

function Media() {
  return (
    <div>
      <div className="mb-5 display-6">
        <Ynet />
        <div className="media-item">
          <Juklooks />
          <Blade />
        </div>
        <Kids />
      </div>
      <Footer />
    </div>
  );
}
export default Media;
