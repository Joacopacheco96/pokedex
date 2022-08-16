import React from "react";

import "./PokemonScreen.css";
import "../../Stylessheets/styles.css";

import { useParams, Link } from "react-router-dom";
import Database from "../../Database/Database";

const PokemonScreen = () => {
  const params = useParams();
  const pokemonToRender = params.id;
  const newItem = Database.findIndex((pokemon) => {
    return pokemonToRender == pokemon.id;
  });
  const item = Database[newItem];
  console.log(Database.length);
  return (
    <div className="PokemonScreen" style={{ backgroundColor: `${item.color}` }}>
      <div className="imageContainer">
        {Database[newItem - 1] ? (
          <Link to={`/pokemon/${Database[newItem - 1].id}`}>
            <button
              className="slideButton"
              style={{ backgroundColor: `${item.color}`, color: "white" }}
            >
              {"<"}
            </button>
          </Link>
        ) : (
          <Link to={`/pokemon/${Database[Database.length - 1].id}`}>
            <button
              className="slideButton"
              style={{ backgroundColor: `${item.color}`, color: "white" }}
            >
              {"<"}
            </button>
          </Link>
        )}

        <div className="navContainer">
          <h2 src={`/images/arrow-left.svg`} className="pokemonName">
            {item.name}
          </h2>
          <p className="pokemonId" style={{ color: "white" }}>
            #{item.id}
          </p>
        </div>

        <img
          className="pokemonImage"
          src={`/images/${item.name}.png`}
          alt="imgPokemon"
        />

        <img
          className="pokeballImage"
          src={`/images/Pokeball.png`}
          alt={item.name}
        />
        {Database[newItem + 1] ? (
          <Link to={`/pokemon/${Database[newItem + 1].id}`}>
            <button
              className="slideButton"
              style={{ backgroundColor: `${item.color}`, color: "white" }}
            >
              {">"}
            </button>
          </Link>
        ) : (
          <Link to={`/pokemon/${Database[0].id}`}>
            <button className="slideButton">{">"}</button>
          </Link>
        )}
      </div>
      <div className="pokemonInformation">
        <div className="type">
          <div style={{ backgroundColor: `${item.type}` }}>{item.type}</div>
          <div style={{ backgroundColor: `${item.secondaryType}` }}>
            {item.secondaryType}
          </div>
        </div>

        <div className="about">
          <h3 style={{ color: `${item.color}` }}>About</h3>
        </div>

        <div className="weight">
          <img class="weigthImage" src={`/images/Weight.svg`} alt="Weight" />
          {item.weight}
          <label>Weigth</label>
        </div>

        <div className="height">
          <img class="heigthImage" src={`/images/Height.svg`} alt="Height" />
          {item.height}
          <label>Heigth</label>
        </div>

        <div className="moves">
          <label>Moves</label>
          {item.primaryMove} {item.secondaryMove}
        </div>

        <div className="description">{item.description}</div>
        <div>
          <h3 style={{ color: `${item.color}` }}>Base Stats</h3>
        </div>

        <span className="Hp">
          <p>HP</p>
          <label style={{ color: `${item.color}` }} for="file">
            {item.hp}
          </label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.hp}
          ></progress>
        </span>

        <span>
          <p>ATK</p>
          <label style={{ color: `${item.color}` }} for="file">
            {item.atk}
          </label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.atk}
          ></progress>
        </span>

        <span>
          <p>DEF</p>
          <label style={{ color: `${item.color}` }} for="file">
            {item.def}
          </label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.def}
          ></progress>
        </span>

        <span>
          <p>SATK</p>
          <label style={{ color: `${item.color}` }} for="file">
            {item.satk}
          </label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.satk}
          ></progress>
        </span>

        <span>
          <p>SDEF</p>
          <label style={{ color: `${item.color}` }} for="file">
            {item.sdef}
          </label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.sdef}
          ></progress>
        </span>

        <span>
          <p>SPD</p>
          <label style={{ color: `${item.color}` }} for="file">
            {item.spd}
          </label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.spd}
          ></progress>
        </span>
      </div>
    </div>
  );
};

export default PokemonScreen;
