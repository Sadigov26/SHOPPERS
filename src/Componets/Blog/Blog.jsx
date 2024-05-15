import React from "react";
import style from "./Blog.module.scss";
import Blogimg from "../About/blog_1.jpg";

const Blog = () => {
  return (
    <div>
      <section className={style.blog}>
        <div className={style.blogContainer}>
          <div className={style.blogContainerImage}>
            <img src={Blogimg} alt="" />
          </div>
          <div className={style.blogContainerDesk}>
            <h1>50% less in all items</h1>
            <p>
              By <span> Carl Smith</span> • September 3, 2018
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              iste dolor accusantium facere corporis ipsum animi deleniti
              fugiat. Ex, veniam?
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
