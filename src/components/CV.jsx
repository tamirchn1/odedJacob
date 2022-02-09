import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div class="content-container">
        <h1>Oded Jacob</h1>
        <p class="pages-text">
          <br />
          Jacob's paintings often directly represent the political and moral
          issues arising from the unique reality in Israel / Palestine. <br />
          He receives a lot of inspiration from his past service in the Israeli
          Defense Forces and from current events, specifically the everyday life
          of underprivileged parts of the israeli society. <br />
          Jacob’s works consist of paintings, drawings, prints, installations
          and mixed media. <br />
          <br />
          <table>
            <tr>
              <td> 1987 </td>
              <td>Born in Even Yehuda, Israel Lives and works in Tel Aviv</td>
            </tr>
            <br />
            <tr>
              <td>2009-2013</td>
              <td>
                B.F.A, Department of Multidisciplinary Art, Shenkar College of
                Engineering, Design and Art, Ramat Gan
              </td>
            </tr>
            <br />
            <tr>
              <td>2014 </td>
              <td>
                Screenprint Teaching, Visual Communication Department, Shenkar
                College of Engineering, Design and Art, Ramat Gan
              </td>
              <br />
            </tr>
            <br />
            <tr>
              <td>2014-2022 </td>
              <td>
                Art Teaching, Various Schools in Tel Aviv, Herzelia and Ramat
                Gan.
              </td>
            </tr>
            <br />
            <span class="awards">Awards and Scholarships</span> <br /> <br />
            <tr>
              <td>2012 </td>
              <td>
                Excellence Award in Printmaking, in memory of Aba Fromchenko
              </td>
            </tr>
            <br />
            <tr>
              <td>2013</td>
              <td>
                Scholarship for residency and Co-Creation, University of
                Massachusetts Lowell, USA, in Collaboration with Shenkar College
                of Engineering, Design and Art, Ramat Gan
              </td>
              <br />
            </tr>
          </table>
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
