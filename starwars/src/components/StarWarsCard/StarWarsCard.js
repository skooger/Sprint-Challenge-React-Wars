import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';



const StarWarsCard = (props) => {

  return (
    <Card style={{ width: '18rem', margin:'2%'}}>
    <Card.Body>
      <Card.Title>{props.char.name}</Card.Title>
      <Card.Header>Character Stats</Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>Born: {props.char.birth_year}</ListGroup.Item>
        <ListGroup.Item>Gender: {props.char.gender}</ListGroup.Item>
        <ListGroup.Item>Height: {props.char.height}</ListGroup.Item>
        <ListGroup.Item>Mass: {props.char.mass}</ListGroup.Item>
        <ListGroup.Item>Hair Color: {props.char.hair_color}</ListGroup.Item>
      </ListGroup>
      <Card.Link href={props.char.homeworld} target = '_blank'>Home World</Card.Link>
    </Card.Body>
  </Card>
  );
};

export default StarWarsCard;