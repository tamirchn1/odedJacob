import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div class="content-container">
        <h1>Oded Jacob</h1>
        <p class="pages-text">
          1987 - Born in Even Yehuda,Israel <br /> Lives and works in Tel Aviv
          <br />
          <br />
          2009-2013 B.F.A, Department of Multidisciplinary Art, Shenkar College
          of Engineering, Design and Art, Ramat Gan <br />
          <br />
          2014 - Screenprint Teaching, <br />
          Visual Communication Department,
          <br /> Shenkar College of Engineering, <br />
          Design and Art, Ramat Gan
          <br />
          <br /> Awards and Scholarships <br />
          <br />
          Jacob's paintings often directly represent the political and moral
          issues arising from the unique reality in Israel / Palestine. He
          receives a lot of inspiration from his past service in the Israeli
          Defense Forces and from current events, specifically the everyday life
          of underprivileged parts of the israeli society. Jacob’s works consist
          of paintings, drawings, prints, installations and mixed media. <br />
          <br />
          Jacob studied art in Shenkar Multidisciplinary Art School (B.F.A) in
          Ramat Gan, Israel.
          <img
            class="avatar"
            alt="oded's images"
            src={require("../images/avatar.jpg")}
          />
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
