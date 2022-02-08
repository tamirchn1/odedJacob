import React from "react";
import Footer from "./Footer";
function Exhibitions() {
  return (
    <div>
      <div className="pages-text">
        <div className="content-container">
          <h1>Exhibitions</h1>
          <div className="ex-content">
            <ul>
              <li>
                2021 <b> Where did the children go?</b>, Tel Aviv Museum of Art,
                Tel Aviv.
              </li>
              <li>
                2020 <b>Blade Memory </b>, CCA:Tel Aviv-Yafo.
              </li>
              <li>
                2020 <b> Continents and Oceans</b>, The left bank, Tel Aviv.
              </li>
              <li>
                2018 <b>Why do cockroaches die on their backs?</b>, Ventilator,
                Shoken 6, Tel Aviv.
              </li>
              <li>
                2017 <b> Agoraphobia</b>, Gabirol Gallery, Tel Aviv.
              </li>
              <li>
                2017 <b>Beit Yad Labanim</b>, Indie Photography Group Gallery,
                Tel Aviv.
              </li>
              <li>
                2016 <b> Sport Day</b>, Bata Vegrega, Tel Aviv.
              </li>
              <li>
                2015 <b>Juklook’s Service</b> , The Jerusalem Artist’s House,
                Jerusalem.
              </li>
              <li>
                2014 <b>Gaza Surf Club</b> , Gabirol Gallery, Tel Aviv.{" "}
                <br></br> Anti Mehikon, Anti Mehikon group, The Wall Gallery,
                Tel Aviv <br /> Youth, Youth, Youth, Anti Mehikon group, Ankori
                HIgh School, Tel Aviv <br /> The Law of Art, Anti Mehikon group,
                Gabirol Gallery, Tel Aviv
              </li>
            </ul>
            <hr className="mb-3 mt-3" />
          </div>
          <div className="ex-imgs">
            <img alt="oded's images" src={require("../images/ex1.jpg")} />
            <img alt="oded's images" src={require("../images/ex2.jpg")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Exhibitions;
