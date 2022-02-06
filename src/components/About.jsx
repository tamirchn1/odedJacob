import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div class="content-container">
      <h1>Oded Jacob</h1>
      <p class="pages-text">
        Oded Jacob, born in 1987 in Israel, lives and works in Tel Aviv. <br />
        Jacob's paintings often directly represent the political and moral
        issues arising from the unique reality in Israel / Palestine. <br />{" "}
        <br /> He receives a lot of inspiration from his past service in the
        Israeli Defense Forces and from current events, specifically the
        everyday life of underprivileged parts of the israeli society. <br />{" "}
        <br />
        Jacob studied art in Shenkar Multidisciplinary Art School (B.F.A).
        <img
          class="avatar"
          alt="oded's images"
          src={require("../images/avatar.jpg")}
        />
      </p>

      <Footer />
    </div>
  );
}

export default About;
