import React from "react";
import styled from "styled-components";

//styles
//import "../index.css";
const Wrapper = styled.div``;

const Icon = ({ data }) => {
  const ICON_API_URL = "https://openweathermap.org/img/wn/";
  const ICON_SIZE = "@2x.png";
  let iconCode = data.weather[0].icon;

  return (
    <Wrapper>
      <img
        className="icon"
        src={`${ICON_API_URL}${iconCode}${ICON_SIZE}`}
        alt="weather-icon"
      />
    </Wrapper>
  );
};

export default Icon;
