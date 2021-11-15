import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "../icons/search-icon.svg";
//styles
//import "../index.css";
const Wrapper = styled.div``;

const Search = ({ setSearch }) => {
  const [state, setState] = useState("");

  setTimeout(() => {
    setSearch(state);
  }, 50);

  return (
    <Wrapper>
      <img src={searchIcon} alt="search-icon" />
      <input
        className="input"
        type="text"
        placeholder="Search City"
        onChange={(event) => setState(event.currentTarget.value)}
        value={state}
      />
    </Wrapper>
  );
};

export default Search;
