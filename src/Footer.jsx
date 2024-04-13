import React from "react";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div className="footer">
      <p>© {year} Hrishikesh (22BCE0579) Jesal (22BCE3357)</p>
    </div>
  );
}
export default Footer;
