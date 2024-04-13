import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// const element = document.getElementById("button");
// if (element) {
//   element.addEventListener("click", function (event) {
//     console.log(event);
//   });
// }
function BlogCard(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className="blgcrd">
      <Card className="card-one" style={{ width: "18rem" }}>
        <Card.Img className="articleimg" variant="top" src={props.img} />
        <Card.Body className="crdbdy">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.script1}</Card.Text>
          <Button onClick={handleClick} id="button" variant="outline-success">
            Read Blog
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogCard;
// {
//   /* <a id="button" className="blog-card-button" href="#">
//               Read Blog
//             </a> */
// }
