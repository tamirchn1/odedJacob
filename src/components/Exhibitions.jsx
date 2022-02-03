import React from "react";
import Footer from "./Footer";
function Exhibitions() {
  return (
    <div>
      <div className="pages-text">
        <p>
          <h1 className="mt-5">Exhibitions</h1>
          <ul>
            <li>
              2021 Where did the children go? Tel Aviv Museum of Art, Tel Aviv.
            </li>
            <li>2020 Blade Memory CCA:Tel Aviv-Yafo.</li>
            <li>2020 Continents and Oceans The left bank, Tel Aviv.</li>
            <li>
              2018 Why do cockroaches die on their backs? Ventilator, Shoken 6,
              Tel Aviv.
            </li>
            <li>2017 Agoraphobia Gabirol Gallery, Tel Aviv.</li>
            <li>
              2017 Beit Yad Labanim Indie Photography Group Gallery, Tel Aviv.
            </li>
            <li>2016 Sport Day Bata Vegrega, Tel Aviv.</li>
            <li>
              2015 Juklook’s Service, The Jerusalem Artist’s House, Jerusalem.
            </li>
          </ul>

          <ul className="heb-text">
            <li> קבוצת אנטי מחיקון "אנטי מחיקון", גלריה הקיר, תל-אביב</li>
            <li>קבוצת אנטי מחיקון "נוער, נוער, נוער", תיכון אנקורי, תל-אביב</li>
            <li>קבוצת אנטי מחיקון "חוק האמנות", גלריה גבירול, תל אביב</li>
            <li>2017 Agoraphobia Gabirol Gallery, Tel Aviv.</li>
            <li>“Club Surf Gaza “תערוכת יחיד, גלריה גבירול, תל אביב</li>
          </ul>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Exhibitions;
