import React from "react";
import Juklooks from "./Juklooks";
import Ynet from "./Ynet";
import Footer from "../Footer";

function Media() {
  return (
    <div>
      <div className="content-container display-6">
        <Ynet />
        <Juklooks />
      </div>
      <Footer />
    </div>
  );
}
export default Media;
