import React from "react";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header>
        <div className={style.containerHeader}>
          <div className={style.containerHeaderTop}>
            <div className={style.containerHeaderSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input type="text" placeholder="Search" />
            </div>
            <div className={style.containerHeaderLogo}>
              <h1>SHOPPERS</h1>
            </div>
            <div className={style.containerHeaderIcons}>
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faHeart} />
              <a href="">
                <FontAwesomeIcon icon={faCartShopping} className={style.cart} />
                <p className={style.two}>2</p>
              </a>
            </div>
          </div>
          <div className={style.containerHeaderBottom}>
            <nav>
              <ul>
                <li>
                  <a href=""  style={{ color: 'rgb(121, 113, 234)' }}>
                    HOME <FontAwesomeIcon icon={faChevronDown} />
                  </a>
                </li>
                <li>
                  <a href="">
                    ABOUT <FontAwesomeIcon icon={faChevronDown} />
                  </a>
                </li>
                <li>
                  <a href="" >SHOP</a>
                </li>
                <li>
                  <a href="">CATALOGUE</a>
                </li>
                <li>
                  <a href="">NEW</a>
                </li>
                <li>
                  <a href="">ARRIVALS</a>
                </li>
                <li>
                  <a href="">CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
