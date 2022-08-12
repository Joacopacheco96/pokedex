import React from "react";
import { useState } from "react";

import DatabaseJson from "../../Database/Database.jsx";
import Cards from "../Cards/Cards.jsx";
import PokemonScreen from "../Cards/PokemonScreen.jsx";

import "./Home.css";

const Home = () => {
  const [Database, setDatabase] = useState(DatabaseJson);
  const [input, setInput] = useState("");
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
  }

  const sortById = () => {
    Database.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      } else return -1;
    });
  };

  return (
    <main>
      <div className="navContainer">
        {console.log(Database)}
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
          return (
            (<Cards item={item} index={index} />),
            (<PokemonScreen item={item} index={index} />)
          );
        })}
      </div>
    </main>
  );
};
export default Home;
