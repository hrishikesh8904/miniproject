import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function BlogCard(props) {
  return (
    <div className="blgcrd">
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="crdbdy">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.script}</Card.Text>
        <Button variant="outline-success">Read Blog</Button>
      </Card.Body>
      {/* </Card> */}
    </div>
  );
}

export default BlogCard;
