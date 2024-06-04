import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import dataarticles from "./Dataarticles";
import { useNavigate } from "react-router-dom";

function BlogCard(props) {
  const navigate = useNavigate();
  function handleClick(event) {
    const filteredData = dataarticles.filter((name) => name.id === props.id);
    navigate({
      pathname: `/BlogPage/${props.id}`,
      state: { name: filteredData[0] },
    });
  }
  return (
    <div className="blgcrd">
      <Card className="card-one" style={{ width: "18rem" }}>
        <Card.Img
          className="articleimg"
          variant="top"
          src={`../${props.img}`}
        />
        <Card.Body className="crdbdy">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.script1}</Card.Text>
          <Button
            onClick={handleClick}
            value={props.id}
            id="button"
            variant="outline-success"
          >
            Read Blog
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogCard;
