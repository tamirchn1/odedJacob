import React from "react";
import Juklooks from ".././media/Juklooks";
import Ynet from "../media/Ynet";
import Footer from "../Footer";
import Blade from "../media/Blade";
import Kids from "../media/Kids";

function Media() {
  return (
    <div>
      <div className="mb-5 display-6">
        <Kids />
        <Blade />
        <Ynet />
        <Juklooks />
      </div>
      <Footer />
    </div>
  );
}
export default Media;
