import React from "react";
import styled from "styled-components";
//styles
//import "../index.css";
const Wrapper = styled.div``;

const Temp = ({ data }) => {
  let temp = data.main.temp;
  return (
    <Wrapper>
      <h2>{temp}</h2>
    </Wrapper>
  );
};

export default Temp;
