import { useEffect, useState, setState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WeatherDay from "./components/WeatherDay";
import "./style.css";
const App = () => {
  const LOCATION_KEY = "217943_PC";
  const API_KEY = "ZBBuYWWMVSw1woARtnVDGR97oVWNoZBY";

  const fixNum = (num) => {
    let strNum = num + "";
    const numLength = strNum.length;
    if (numLength === 1) {
      return "0" + strNum;
    } else {
      return strNum;
    }
  };
  const [fiveDays, setfiveDays] = useState();
  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${LOCATION_KEY}?apikey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) =>
        setfiveDays(
          res.DailyForecasts.map((fi) => {
            return {
              date: fi.Date,
              icon: fixNum(fi.Day.Icon),
              status: fi.Day.IconPhrase,
              max: fi.Temperature.Maximum.Value,
              min: fi.Temperature.Minimum.Value,
            };
          })
        )
      );
  }, []);

  useEffect(() => {
    console.log(fiveDays);
  }, [fiveDays]);

  return (
    <Container>
      <Row className="main">
        {!!fiveDays &&
          fiveDays.map((f, index) => (
            <Col key={index}>
              <WeatherDay
                min={f.min}
                max={f.max}
                date={f.date}
                icon={f.icon}
                status={f.status}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default App;
