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
    
    <Link to='/'>
      Back to Home
    </Link>


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
          <div className={`${item.type}`}>{item.type}</div>
          <div className={`${item.secondaryType}`}>{item.secondaryType}</div>
        </div>

        <div className="about">
          <h3 style={{ color: `${item.color}` }}>About</h3>
        </div>

        <div className="specifications">
          <div className="weight">
            <div className="sub-div">
              <img
                className="weightImage"
                src={`/images/Weight.svg`}
                alt="Weight"
              />
              {item.weight}
            </div>
            <label>Weigth</label>
          </div>

          <div className="height">
            <div className="sub-div">
              <img
                class="heigthImage"
                src={`/images/Height.svg`}
                alt="Height"
              />
              {item.height}
            </div>
            <label>Heigth</label>
          </div>

          <div className="moves">
            <div className="sub-div">
              <div>{item.primaryMove}</div>
              <div>{item.secondaryMove}</div>
            </div>
            <label>Moves</label>
          </div>
        </div>

        <div className="description">{item.description}</div>
        <div>
          <h3 style={{ color: `${item.color}` }}>Base Stats</h3>
        </div>

        <div className="item">
          <p style={{ color: `${item.color}` }}>HP</p>
          <label for="file">{item.hp}</label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.hp}
          ></progress>
        </div>

        <div className="item">
          <p style={{ color: `${item.color}` }}>ATK</p>
          <label for="file">{item.atk}</label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.atk}
          ></progress>
        </div>

        <div className="item">
          <p style={{ color: `${item.color}` }}>DEF</p>
          <label for="file">{item.def}</label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.def}
          ></progress>
        </div>

        <div className="item">
          <p style={{ color: `${item.color}` }}>SATK</p>
          <label for="file">{item.satk}</label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.satk}
          ></progress>
        </div>

        <div className="item">
          <p style={{ color: `${item.color}` }}>SDEF</p>
          <label for="file">{item.sdef}</label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.sdef}
          ></progress>
        </div>

        <div className="item">
          <p style={{ color: `${item.color}` }}>SPD</p>
          <label for="file">{item.spd}</label>
          <progress
            style={{ color: `${item.color}` }}
            id="file"
            max="100"
            value={item.spd}
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default PokemonScreen;
