import {
  ArrowUp,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import "./styles/Footer.css";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <section className="footer-section">
          <div className="footer-social-container">
            <div className="navlink-desktop">
            <NavLinks fontSize="6vw" />
            </div>
            <div className="right-container">
              <div className="social-contact">
                <div className="social-ions">
                  <div className="icon-circle">
                    <Instagram className="icon" />
                  </div>
                  <div className="icon-circle">
                    <Facebook className="icon" />
                  </div>
                  <div className="icon-circle">
                    <Twitter className="icon" />
                  </div>
                  <div className="icon-circle">
                    <Linkedin className="icon" />
                  </div>
                  <div className="icon-circle">
                    <Youtube className="icon" />
                  </div>
                </div>
                <div>
                  <div className="footer-contact">
                    <span className="">(Inquires)</span>
                    <p>john@jt-studiocom</p>
                  </div>
                  <div className="footer-contact">
                    <span className="">(Phone)</span>
                    <p>+4914255522</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <div className="navlink-mobile">
              <NavLinks fontSize="15vw"/>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom-links">
              <div className="footer-legal">
                <span className="footer-label">Imprint</span>
                <span className="footer-label">Privacy Policy</span>
              </div>
              <div className="footer-top">
                <ArrowUp className="top-icon" />
                <span className="footer-label">Back to Top</span>
              </div>
            </div>
          </div>

          <div className="footer-buy">
            <p>
              You can{" "}
              <span className="footer-buy-highlight">buy this website.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
