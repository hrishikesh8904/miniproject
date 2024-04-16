import React from "react";
import { Link } from "react-router-dom";
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
    <div className="topnav">
      <Link className={home} to="/Home">
        Home
      </Link>
      <Link className={findhelp} to="/Findhelp">
        Find Help
      </Link>
      <Link className={tracker} to="/Tracker">
        Tracker
      </Link>
      <Link className={articles} to="/Articles">
        Articles
      </Link>
      <Link to="/SignInPage">SignIn</Link>
    </div>
  );
}
export default Navbarcmp;
