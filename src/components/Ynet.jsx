import React from "react";
import Footer from "./Footer";

function Ynet() {
  return (
    <div class="content-container">
      <div className=" text-center">
        <h2>Oded Jacob: Oceans and Continent </h2>
        <a
          className="display-5"
          Href="https://www.ynet.co.il/articles/0,7340,L-5663066,00.html"
        >
          (Article Link)
        </a>
      </div>
      <div className="media-content">
        <p className="media-text">
          A new solo exhibition opened in the Left Bank gallery in Tel Aviv
          presenting the works of artist Oded Jacob. <br /> <br /> Jacob was
          born in 1987 in Even Yehuda, lives and works in Tel Aviv, graduate of
          the Department of Multidisciplinary Art, Shenkar College of
          Engineering, Design and Art, Ramat Gan, 2013.
          <br /> <br /> In the exhibition he presents a body of work made in the
          past two years, in which he showcases a representation of conflict
          between the person and the collective, and conflicts within the media
          of painting itself: abstract versus figurative, emptiness versus
          abundance, illusion of depth versus the texture of a painting's
          surface.
          <br /> <br /> The influences of the local cultural and political
          discourse are evident in his works alongside images relating to
          personal memory and experience.
          <br /> <br /> The exhibition takes place until February 15th, in 70
          Ahad Ha'am st. Tel Aviv, <br />
          Opening hours: Sunday 15:00-18:00, Fridays and Saturdays 11:00-14:00.
        </p>
        <img
          class="mt-4 media-img media-text"
          alt="oded's images"
          src={require("../images/ocean.jpg")}
        />
      </div>
    </div>
  );
}

export default Ynet;
