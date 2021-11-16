import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 5px solid lightgray;
  border-top: 5px solid darkgray;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  :hover {
    opacity: 0.8;
  }

  @keyframes spin {
    0% {
      transform: roate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Spinner() {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
}

export default Spinner;
