import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "../icons/search-icon.svg";

//styles
import "../index.css";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px;
  margin-top: 30px;
`;

const Search = ({ setSearch }) => {
  const [state, setState] = useState("");

  setTimeout(() => {
    setSearch(state);
  }, 50);

  return (
    <Wrapper>
      <img className="sIcon" src={searchIcon} alt="search-icon" />
      <input
        className="form-control"
        id="searchBar"
        type="text"
        placeholder="Search City"
        onChange={(event) => setState(event.currentTarget.value)}
        value={state}
      />
    </Wrapper>
  );
};

export default Search;
