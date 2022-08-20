import { useState, React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


import Card from "../Cards/Card.jsx";

import "./Home.css";

const Home = () => {
  const [database, setDatabase] = useState([]);
  const [input, setInput] = useState("");
  const [sortType, setSortType] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3007/pokemones`)
  
    .then((db) => db.json()) 
    .then((result) => {
      setDatabase(result);
      });
  }, [])
  


  const handleInput = (e) => {
    setInput(e.target.value);
  };

  function sortByName(e) {
    const NewDatabase = [...database].sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else return -1;
    });
    setDatabase(NewDatabase);
    setSortType(!sortType);
  }

  function sortById(e) {
    const NewDatabase = [...database].sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      } else return -1;
    });
    setDatabase(NewDatabase);
    setSortType(!sortType);
  }

  return (
    <main>
      <div className="navContainer">
        <div className="subContainer">
          <img
            className="pokeballIcon"
            src={"./images/Pokeball.png"}
            alt="icon"
          />
          <h1 className="title">Pokédex</h1>
        </div>
        <div className="sortButton">
        <button onClick={sortType ? sortByName : sortById}>
          {sortType ? '#':'A'}
        </button>
        <img src="/images/Arrow.svg"/>
        </div>
      </div>
      <input
        className="input"
        type="text"
        onChange={handleInput}
        placeholder="🔎 Buscar"
      ></input>

      <div className="list">
        {database.map((item, index) => {
          if (item.name.includes(`${input}`)) {
            return (

              <Link key={index} to={`/pokemon/${item.id}`}>
                <Card item={item} index={index} />
              </Link>

            );
          }
        })}
      </div>
    </main>
  );
};
export default Home;
