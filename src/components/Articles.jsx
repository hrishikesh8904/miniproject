import React from "react";
import Navbarcmp from "../Navbarcmp";
import Footer from "../Footer";
import BlogCard from "./BlogCard";
import Dataarticles from "./Dataarticles";

function createCard(Dataarticlesterm) {
  return (
    <BlogCard
      key={Dataarticlesterm.id}
      img={Dataarticlesterm.img}
      name={Dataarticlesterm.name}
      script1={Dataarticlesterm.script1}
    />
  );
}

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
          <h1>Hrishikesh</h1>
          <h1>Articles with blogs</h1>
        </div>
        <div className="articles-two-2">{Dataarticles.map(createCard)}</div>
      </div>
      <Footer />
    </div>
  );
}
export default Articles;
