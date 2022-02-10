import React from "react";
import FooterIndex from ".././FooterIndex";

function Contact() {
  return (
    <div>
      <div class="content-container">
        <h1 class="mt-5">Contact Me</h1>
        <div className="contact-text">
          {" "}
          <p className="mt-5 ">
            {" "}
            Email <br />
            Jacobodedster@gmail.com{" "}
          </p>
          <p className="mt-5 mb-5">
            {" "}
            Phone <br /> +972546399478
          </p>
        </div>
      </div>
      <FooterIndex />
    </div>
  );
}

export default Contact;
