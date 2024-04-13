import React from "react";
import Navbarcmp from "../Navbarcmp";
import BlogCard from "./BlogCard";
function Articles() {
  return (
    <div>
      <Navbarcmp active="articles" />
      <div className="articles-one">
        <img src="happypeople.jpg" alt="" />
        <h1>Blog</h1>
      </div>
      <div className="articles-two">
        <div className="articles-two-1">
          <h1>Articles with blogs</h1>
        </div>
        <div className="articles-two-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
export default Articles;
