import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
function Button({ handleClick }) {
  return (
    <Wrapper>
      <button id="btn" name="Search" className="btn" onClick={handleClick}>
        Search
      </button>
    </Wrapper>
  );
}

export default Button;
