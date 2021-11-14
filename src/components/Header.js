import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  width: 600px;
  height: 100px;
  border: 3px solid darkgray;
  margin: 0 auto;
  border-radius: 5px;
  color: steelblue;
  background-color: lightblue;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1> Weather Forecast </h1>
    </Wrapper>
  );
};

export default Header;
