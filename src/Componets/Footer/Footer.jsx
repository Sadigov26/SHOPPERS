import React from "react";
import style from "./Footer.module.scss";
import imgfooter from "../About/hero_1 (2).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <section className={style.footer}>
        <div className={style.footerContainer}>
          <div className={style.footerNavigations}>
            <h1>Navigations</h1>
            <div className={style.footerNavigationsTitle}>
              <nav>
                <ul>
                  <li>
                    <a href="">Sell online</a>
                  </li>
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Shopping cart</a>
                  </li>
                  <li>
                    <a href="">Store builder</a>
                  </li>
                </ul>
              </nav>
              <nav>
                <ul>
                  <li>
                    <a href="">Mobile commerce</a>
                  </li>
                  <li>
                    <a href="">Dropshipping</a>
                  </li>
                  <li>
                    <a href="">Website development</a>
                  </li>
                  <li></li>
                </ul>
              </nav>
              <nav>
                <ul>
                  <a href="">Point of sale</a>
                  <li>
                    <a href="">Hardware Software</a>
                  </li>
                </ul>
              </nav>{" "}
            </div>
          </div>
          <div className={style.footerPromo}>
            <h1>Promo</h1>
            <div className={style.footerPromoDesk}>
              <img src={imgfooter} alt="" />
              <p>Finding Your Perfect Shoes</p>
              <span>Promo from nuary 15 — 25, 2019</span>
            </div>
          </div>
          <div className={style.footerContact}>
            <h1>Contact Info</h1>
            <div className={style.footeradress}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className={style.footeradress}>
            <FontAwesomeIcon icon={faPhone} />
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className={style.footeradress}>
            <FontAwesomeIcon icon={faEnvelope} />
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className={style.footerSubscribe}>
                <h1>Subscribe</h1>
                <div className={style.footerEmail}>
                    <input type="text" placeholder="Email"/>
                    <button>Send</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
