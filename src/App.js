import React, { useState } from "react";
import API from "./API";
//Components
import Header from "./components/Header";
import Search from "./components/Search";
import Option from "./components/Option";
import Button from "./components/Button";
import City from "./components/City";
import Time from "react-time";
import Icon from "./components/Icon";
import Temp from "./components/Temp";
import { dateOfToday, dayOfWeek } from "./helpers";
//Stylesheet
//import "../src/index.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const handleClick = (event) => {
    if (search !== "" && select === "imperial") {
      API.citySearchFahr(search, select);
      const res = API.citySearchFahr(search, select);
      res.then((response, reject) => {
        return console.log(response.main);
      });
    } else if (search !== "" && select === "metric") {
      API.citySearchCelc(search, select);
      const res = API.citySearchFahr(search, select);
      res.then((response, reject) => {
        return console.log(response.main);
      });
    } else if (search !== "" && select === "kelvin") {
      API.citySearchKelv(search, select);
      const res = API.citySearchFahr(search, select);
      res.then((response, reject) => {
        return console.log(response.main);
      });
    } else {
      alert("Please provide a city name!");
    }
  };

  //Date-Time
  let date = dateOfToday();
  let today = dayOfWeek();

  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} />
      <Option setSelect={setSelect} />
      <Button handleClick={handleClick} />
      <City />
      <p>{today.toUpperCase()}</p>
      <Time value={date} format="MM/DD/YY" />

      <Icon />
      <Temp />
    </div>
  );
}
