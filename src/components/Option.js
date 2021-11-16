import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Option({ setSelect }) {
  const [state, setState] = useState("");

  setTimeout(() => {
    setSelect(state);
  }, 50);

  return (
    <Wrapper>
      <div>
        <select
          id="selector"
          className="form-select"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        >
          <option value="">-Select Unit-</option>
          <option value="imperial">Fahrenheit</option>
          <option value="metric">Celcius</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>
    </Wrapper>
  );
}

export default Option;
