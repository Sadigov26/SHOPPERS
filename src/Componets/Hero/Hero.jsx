import React from "react";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <section className={style.hero}>
        <div className={style.containerHero}>
          <div className={style.heroDesk}>
            <h2>Finding Your Perfect Shoes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
