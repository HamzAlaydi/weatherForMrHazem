import React from "react";
import { Button, Card } from "react-bootstrap";

const WeatherDay = (props) => {
  const IMG_LINK = "https://developer.accuweather.com/sites/default/files/";

  return (
    <div style={{ textAlign: "center" }}>
      <Card style={{ width: "14rem" }}>
        <Card.Title>{props.date.toString().substring(0, 10)}</Card.Title>
        <Card.Img variant="top" src={`${IMG_LINK}${props.icon}-s.png`} />
        <Card.Body>
          <Card.Title>{props.status.substring(0, 12)}</Card.Title>
          <Card.Title>
            {props.max}/{props.min}F
          </Card.Title>

          <Card.Text> </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherDay;
