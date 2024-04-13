import React from "react";
function Navbarcmp(props) {
  var home, findhelp, tracker, articles;
  switch (props.active) {
    case "home":
      home = "active";
      break;
    case "findhelp":
      findhelp = "active";
      break;
    case "tracker":
      tracker = "active";
      break;
    case "articles":
      articles = "active";
      break;
    default:
      break;
  }
  return (
    <div class="topnav">
      <a className={home} href="/">
        Home
      </a>
      <a className={findhelp} href="Findhelp">
        Find Help
      </a>
      <a className={tracker} href="">
        Tracker
      </a>
      <a className={articles} href="Articles">
        Articles
      </a>
    </div>
  );
}
export default Navbarcmp;
