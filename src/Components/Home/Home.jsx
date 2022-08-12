import React from "react";
import { useState } from "react";

import DatabaseJson from "../../Database/Database.jsx";
import Card from '../Cards/Card.jsx'

import "./Home.css";

const Home = () => {

  const [Database, setDatabase] = useState(DatabaseJson);
  const [input, setInput] = useState("");
  const [sortType, setSortType] = useState(true)
  
  const handleInput = (e) => {
    setInput(e.target.value);
  };


  function sortByName(e) {
    const NewDatabase = [...Database].sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else return -1;
    });
    setDatabase(NewDatabase);
    setSortType(!sortType)
  }

  function sortById  (e) {
  const NewDatabase = [...Database].sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      } else return -1;
    });
    setDatabase(NewDatabase);
    setSortType(!sortType)
  };

  return (
    <main>
      <div className="navContainer">
        <div className="subContainer">
          <img
            className="pokeballIcon"
            src={"./images/Pokeball.png"}
            alt="icon"
          />
          <span className="title">Pokédex</span>
        </div>
        <button onClick={sortByName} className="sortButton">
          Sort
        </button>
      </div>
      <input
        className="input"
        type="text"
        onChange={handleInput}
        placeholder="🔎 Buscar"
      ></input>

      <div className="list">
        {Database.map((item, index) => {
        if (item.name.includes(`${input}`)){
          return(

      <Card item={item} index={index} />
      
      )
    }})}  
      </div>
    </main>
  );
};
export default Home;
