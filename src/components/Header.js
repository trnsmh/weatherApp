import React from "react";
import styled from "styled-components";

//styles
import "../index.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px;
  margin: 0 auto;
  border-radius: 10px;
  h1 {
    font-family: "Merriweather", serif;
    color: rgb(46, 46, 46);
    font-size: 5rem;
  }
  @media screen and (max-width: 720px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <h1> Weather Forecast </h1>
    </Wrapper>
  );
};

export default Header;
