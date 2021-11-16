import React from "react";
import styled from "styled-components";
import "../index.css";
const Wrapper = styled.div`
`;
function Button({ handleClick }) {
  return (
    <Wrapper>
      <div className="btn">
        <button
          id="button"
          name="Search"
          className="button"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </Wrapper>
  );
}

export default Button;
