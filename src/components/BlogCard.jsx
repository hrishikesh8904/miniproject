import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function BlogCard() {
  return (
    <div className="blgcrd">
      {/* <Card style={({ width: "200px" }, { border: 0 })}> */}
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="crdbdy">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-success">Go somewhere</Button>
      </Card.Body>
      {/* </Card> */}
    </div>
  );
}

export default BlogCard;
