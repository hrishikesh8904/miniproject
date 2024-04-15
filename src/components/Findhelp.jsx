import React from "react";
import Navbar from "../Navbarcmp";
import Footer from "../Footer";
import Tiles from "./Tiles";
import Psych from "./Psych";

function createCard(Psychterm) {
  return (
    <Tiles
      key={Psychterm.id}
      img={Psychterm.img}
      name={Psychterm.name}
      email={Psychterm.email}
      ph={Psychterm.ph}
      sp={Psychterm.sp}
    />
  );
}
function Findhelp() {
  return (
    <div>
      <Navbar active="findhelp" />
      <div className="findhelp-one">
        <img src="counseller2.jpg" alt="" />
        <h1>We are here to Help</h1>
        <br></br>
        <p>
          Mental health coaches provide tailored support for individuals seeking
          guidance in managing their emotional well-being. With diverse
          expertise, individuals can select the coach best suited to their
          needs, whether for coping strategies, stress management, or personal
          growth.
        </p>
      </div>
      <div className="findhelp-two">
        <h2>Choose the right mental health coach for you</h2>
      </div>
      <div className="findhelp-three">
        <div className="findhelp-three-1">{Psych.map(createCard)}</div>
      </div>
      <Footer />
    </div>
  );
}
export default Findhelp;
