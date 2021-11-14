import React from "react";
//Components
import Header from "./components/Header";
import City from "./components/City";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

//stylesheet
import "../src/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <City />
      <div className="cards">
        <Card />
      </div>
    </div>
  );
}

export default App;
