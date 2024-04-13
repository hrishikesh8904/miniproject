import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function BlogCard(props) {
  return (
    <div className="blgcrd">
      <Card className="card-one" style={{ width: "18rem" }}>
        <Card.Img className="articleimg" variant="top" src={props.img} />
        <Card.Body className="crdbdy">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.script1}</Card.Text>
          <Button variant="outline-success">
            <a className="blog-card-button" href="">
              Read Blog
            </a>
          </Button>
        </Card.Body>
      </Card>
      {/* </Card> */}
    </div>
  );
}

export default BlogCard;
