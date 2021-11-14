import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import searchIcon from "../icons/search-icon.svg";
import API from "../API";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 80px;
  border: 3px solid darkgray;
  border-top: none;
  margin: 0 auto;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: lightblue;
  outline: none;
`;

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState("");

  const initial = useRef(true);

  //selectInput useEffect
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setOption(option);
    }, 500);
    return () => clearTimeout(timer);
  }, [setOption, option]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //SearchBar useEffect
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, searchTerm]);

  const handleSelect = (event) => {
    setOption(event.target.value);
  };

  const handleClick = (event) => {
    if (searchTerm !== "" && option === "imperial") {
      API.citySearchFahr(searchTerm, option);
      const res = API.citySearchFahr(searchTerm, option);
      res.then((response, reject) => {
        return console.log(response.main);
      });
    } else if (searchTerm !== "" && option === "metric") {
      API.citySearchCelc(searchTerm, option);
      const res = API.citySearchFahr(searchTerm, option);
      res.then((response, reject) => {
        return console.log(response.main);
      });
    } else if (searchTerm !== "" && option === "kelvin") {
      API.citySearchKelv(searchTerm, option);
      const res = API.citySearchFahr(searchTerm, option);
      res.then((response, reject) => {
        return console.log(response.main);
      });
    } else {
      alert("Please provide a city name!");
    }
  };

  return (
    <Wrapper>
      <img src={searchIcon} alt="search-icon" />
      <input
        className="input"
        type="text"
        placeholder="Search City"
        onChange={handleChange}
        value={searchTerm}
      />
      <select className="select" onChange={handleSelect} value={option}>
        <option value="">-Select Unit-</option>
        <option value="imperial">Fahrenheit</option>
        <option value="metric">Celcius</option>
        <option value="kelvin">Kelvin</option>
      </select>
      <button className="btn" onClick={handleClick}>
        Search
      </button>
    </Wrapper>
  );
};

export default SearchBar;
