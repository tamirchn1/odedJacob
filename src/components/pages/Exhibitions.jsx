import React from "react";
import Footer from "../Footer";
function Exhibitions() {
  return (
    <div>
      <div className="pages-text">
        <div className="content-container">
          <h1>Exhibitions</h1>
          <div className="ex-content">
            <table>
              <tr>
                <td> 2021 </td>
                <td>
                  <b>Where Did The Kids go?</b> Tel Aviv Museum of Art, Tel
                  Aviv.
                </td>
              </tr>
              <br />
              <tr>
                <td>2020</td>
                <td>
                  <b>Blade Memory</b> Tel Aviv Museum of Art, Tel Aviv.
                </td>
              </tr>
              <br />
              <tr>
                <td>2020 </td>
                <td>
                  <b>Oceans and Continents</b> The left bank, Tel Aviv.
                </td>
                <br />
              </tr>

              <br />
              <tr>
                <td>2018 </td>
                <td>
                  <b>Why Do Cockroaches Die On Their Backs?</b> Ventilator,
                  Shoken 6, Tel Aviv.
                </td>
              </tr>
              <br />

              <tr>
                <td>2017 </td>
                <td>
                  <b>Agoraphobia Gabirol Gallery</b> Tel Aviv.
                </td>
              </tr>
              <br />
              <tr>
                <td>2017 </td>
                <td>
                  <b>Beit Yad Labanim</b> Indie Photography Group Gallery, Tel
                  Aviv.
                </td>
                <br /> <br />
              </tr>
              <tr>
                <td>2016 </td>
                <td>
                  <b>Sport Day</b> Beta Vegrega , Tel Aviv.
                </td>
                <br /> <br />
              </tr>
              <tr>
                <td>2015 </td>
                <td>
                  <b>Juklook’s Service</b> The Jerusalem Artist’s House,
                  Jerusalem.
                </td>
                <br /> <br />
              </tr>
              <span className="mt-4">Groups Exhibition</span>
              <br />
              <tr>
                <td>2014 </td>
                <td>
                  <b>Gaza Surf Club</b> Gabirol Gallery, Tel Aviv. Anti Mehikon,{" "}
                  <br />
                  <br />
                  <b>Anti Mehikon group</b> The Wall Gallery, Tel Aviv <br />
                  <br />
                  <b>Youth,Youth, Youth </b> Anti Mehikon group, Ankori HIgh
                  School, Tel Aviv <br />
                  <br /> <b>The Law of Art</b> Anti Mehikon group, Gabirol
                  Gallery, Tel Aviv
                </td>
                <br />
              </tr>
            </table>

            <ul></ul>
            <hr className="mb-3 mt-3" />
          </div>
          <div className="ex-imgs">
            <img alt="oded's images" src={require("../../images/ex1.jpg")} />
            <img alt="oded's images" src={require("../../images/ex2.jpg")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Exhibitions;
