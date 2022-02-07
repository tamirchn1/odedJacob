import { FaInstagram, FaEnvelope } from "react-icons/fa";

function Year() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <footer className="">
      <div className="footer-info">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/vddyqb/"
          role="button"
        >
          <FaInstagram className="logo" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:jacobodedster@gmail.com"
          role="button"
        >
          <FaEnvelope className="logo" />
        </a>
        <p className="copyright ">
          Copyright &copy; - This website was built by -
          <a className="tamir" href="mailto:Tamirchn1@gmail.com">
            {" "}
            Tamir Chen
          </a>
          <br /> {Year()} All rights reserved to Oded Jacob
        </p>
      </div>
    </footer>
  );
}
export default Footer;
