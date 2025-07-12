import React, { useState } from "react";
import "./styles/Navbar.css";
import {
  Menu,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  function handlenMenu() {
    setMenu(!menu);
  }
  return (
    <div className="navBar">
      <div className="header">
        <Menu />
        <Menu onClick={handlenMenu} />
      </div>
      <div class={menu ? "sidebar" : "sidebar sidebar-NX"}>
        <aside>
          <section>
            <div class="sidebar-content">
              <NavLinks fontSize="7vw"/>
              <div class="sidebar-contact">
                <div className="social-icons">
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
                  <div class="contact-info">
                    <span class="label">Inquiries</span>
                    <p>john@jt-studiocom</p>
                  </div>
                  <div class="contact-info">
                    <span class="label">Phone</span>
                    <p>+4914255522</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
