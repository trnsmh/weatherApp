import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  font-weight: 900;
  color: steelblue;
  font-size: 25px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const City = () => {
  return (
    <Wrapper>
      <p className="city">CityName</p>
    </Wrapper>
  );
};

export default City;
