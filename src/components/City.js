import React from "react";
import styled from "styled-components";

//styles
//import "../index.css";
const Wrapper = styled.div``;

const City = ({ data }) => {
  let cityName = data.name;
  let countryCode = data.sys.country;

  return (
    <Wrapper>
      <h3 className="city">{`${cityName},${countryCode}`}</h3>
    </Wrapper>
  );
};

export default City;
