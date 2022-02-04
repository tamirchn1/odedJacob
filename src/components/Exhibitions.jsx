import React from "react";
import Footer from "./Footer";
function Exhibitions() {
  return (
    <div>
      <div className="pages-text">
        <p>
          <h1 className="mt-5">Exhibitions</h1>
          <div class="ex-content">
            <div>
              <ul>
                <li>
                  2021 Where did the children go? Tel Aviv Museum of Art, Tel
                  Aviv.
                </li>
                <li>2020 Blade Memory CCA:Tel Aviv-Yafo.</li>
                <li>2020 Continents and Oceans The left bank, Tel Aviv.</li>
                <li>
                  2018 Why do cockroaches die on their backs? Ventilator, Shoken
                  6, Tel Aviv.
                </li>
                <li>2017 Agoraphobia Gabirol Gallery, Tel Aviv.</li>
                <li>
                  2017 Beit Yad Labanim Indie Photography Group Gallery, Tel
                  Aviv.
                </li>
                <li>2016 Sport Day Bata Vegrega, Tel Aviv.</li>
                <li>
                  2015 Juklook’s Service, The Jerusalem Artist’s House,
                  Jerusalem.
                </li>
              </ul>
            </div>
            <img alt="oded's images" src={require("../images/ex1.jpg")} />
          </div>
          <ul className="heb-text">
            <h2>תערוכות</h2>
            <h5>2014</h5>
            <div class="ex-content">
              <div>
                <li> קבוצת אנטי מחיקון "אנטי מחיקון", גלריה הקיר, תל-אביב</li>
                <li>
                  קבוצת אנטי מחיקון "נוער, נוער, נוער", תיכון אנקורי, תל-אביב
                </li>
                <li>קבוצת אנטי מחיקון "חוק האמנות", גלריה גבירול, תל אביב</li>
                <li>“Club Surf Gaza “תערוכת יחיד, גלריה גבירול, תל אביב</li>
              </div>
              <img alt="oded's images" src={require("../images/ex2.jpg")} />
            </div>
          </ul>
        </p>
      </div>
      <div></div>
      2 <Footer />
    </div>
  );
}

export default Exhibitions;
