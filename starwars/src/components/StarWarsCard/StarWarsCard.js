import React from "react";
import Card from "react-bootstrap/Card"

const StarWarsCard = (props) => {

  console.log(props)
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.char.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Born {props.char.birth_year}</Card.Subtitle>
      <Card.Text>
        Character Stats 
        sd
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  );
};

export default StarWarsCard;