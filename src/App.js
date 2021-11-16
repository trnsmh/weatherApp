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
import Spinner from "./components/Spinner";
import { dateOfToday, dayOfWeek } from "./helpers";
//Stylesheet
import "../src/index.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [state, setState] = useState([]);
  const [checker, setChecker] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    setLoading(true);
    if (search !== "" && select === "imperial") {
      API.citySearchFahr(search, select);
      const res = API.citySearchFahr(search, select);
      res.then((response, reject) => {
        try {
          setState(response);
          setTimeout(() => {
            setLoading(false);
            setChecker(true);
          }, 5000);
          return console.log(response);
        } catch (e) {
          console.log(e);
        }
      });
    } else if (search !== "" && select === "metric") {
      setLoading(true);
      API.citySearchCelc(search, select);
      const res = API.citySearchFahr(search, select);
      res.then((response, reject) => {
        try {
          setState(response);
          setTimeout(() => {
            setLoading(false);
            setChecker(true);
          }, 5000);
          return console.log(response);
        } catch (e) {
          console.log(e);
        }
      });
    } else if (search !== "" && select === "kelvin") {
      setLoading(true);
      API.citySearchKelv(search, select);
      const res = API.citySearchFahr(search, select);
      res.then((response, reject) => {
        try {
          setState(response);
          setTimeout(() => {
            setLoading(false);
            setChecker(true);
          }, 5000);
          return console.log(response);
        } catch (e) {
          console.log(e);
        }
      });
    } else {
      return alert("Please provide a city name!");
    }
  };
  //Date-Time
  let date = dateOfToday();
  let today = dayOfWeek();

  return (
    <div className="">
      <Header />
      <Search setSearch={setSearch} />
      <Option setSelect={setSelect} />
      <Button handleClick={handleClick} />
      {checker === true && (
        <div className="card">
          <p>{today.toUpperCase()}</p>
          <Time value={date} format="MM/DD/YY" />
          <City data={state} />
          <Icon data={state} />
          <Temp data={state} />
        </div>
      )}{" "}
      {loading === true && <Spinner />}
    </div>
  );
}
