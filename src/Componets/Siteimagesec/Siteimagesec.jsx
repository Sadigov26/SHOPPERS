import React from "react";
import style from "./Siteimagesec.module.scss";
import imageOne from "../About/women.jpg";
import imageTwo from "../About/children.jpg";
import imageThree from "../About/men.jpg";

const Siteimagesec = () => {
  return (
    <div>
      <section className={style.Siteimagesec}>
        <div className={style.SiteimagesecContainer}>
          <div className={style.SiteimagesecContainerImg}>
            <img src={imageOne} alt="" />
            <div className={style.imageDesk}>
              <p>COLLECTION</p>
              <h1>Women</h1>
            </div>
          </div>
          <div className={style.SiteimagesecContainerImg}>
            <img src={imageTwo} alt="" />
            <div className={style.imageDesk}>
              <p>COLLECTION</p>
              <h1>Children</h1>
            </div>
          </div>
          <div className={style.SiteimagesecContainerImg}>
            <img src={imageThree} alt="" />
            <div className={style.imageDesk}>
              <p>COLLECTION</p>
              <h1>Men</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Siteimagesec;
