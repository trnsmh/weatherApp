import React from "react";
import styled from "styled-components";
import Time from "react-time";
//module
import { dateOfToday, dayOfWeek } from "../helpers";
//styles
import "../index.css";

const Wrapper = styled.div`
  position: absolute;
  height: 280px;
  width: 200px;
  border: 3px solid darkgray;
  border-radius: 5px;
  color: steelblue;
  background-color: lightblue;
`;

const Card = () => {
  let date = dateOfToday();
  let today = dayOfWeek();
  return (
    <Wrapper>
      <p className="day">{today.toUpperCase()}</p>
      <p className="date">
        <Time value={date} format="MM/DD/YY" />
      </p>
      <img className="icon" src=" " alt="weather-icon" />
      <p className="temp">Temperature</p>
    </Wrapper>
  );
};

export default Card;
