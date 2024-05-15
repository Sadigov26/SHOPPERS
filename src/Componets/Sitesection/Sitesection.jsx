import React from "react";
import style from "./Sitesection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Sitesection = () => {
  return (
    <div>
      <section className={style.sitesection}>
        <div className={style.sitesectionContainer}>
          <div className={style.sitesectionContainerCol}>
            <FontAwesomeIcon icon={faTruck} className={style.siteIcons} />
            <div className={style.sitesectionContainerColDesk}>
              <h3>FREE SHIPPING</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className={style.sitesectionContainerCol}>
            <FontAwesomeIcon icon={faRotateRight} className={style.siteIcons} />
            <div className={style.sitesectionContainerColDesk}>
              <h3>FREE RETURNS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className={style.sitesectionContainerCol}>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className={style.siteIcons}
            />
            <div className={style.sitesectionContainerColDesk}>
              <h3>CUSTOMER SUPPORT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitesection;
