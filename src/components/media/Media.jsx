import React from "react";
import Juklooks from "./Juklooks";
import Ynet from "./Ynet";
import Footer from "../Footer";
import Blade from "./Blade";

function Media() {
  return (
    <div>
      <div className=" display-6">
        <Ynet />
        <div className="media-item">
          <Juklooks />
          <Blade />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Media;
