import {React, useState} from "react";

import "./PokemonScreen.css";
import "../../Stylessheets/styles.css";

import { useParams, Link } from "react-router-dom";
import Database from "../../Database/Database";

const PokemonScreen = () => {
  const params = useParams();
  const [compareMode, setcompareMode] = useState(false);
  const pokemonToRender = params.id;
  const newItem = Database.findIndex((pokemon) => {
    return pokemonToRender == pokemon.id;
  });
  const item = Database[newItem];
  return (
    <div className="PokemonScreen" style={{ backgroundColor: `${item.color}` }}>
    
    <button onClick={() => setcompareMode(!compareMode)}>compare</button>

      <div className='container'>
      <div className="imageContainer">
      
      <div className="navContainer">
        <div className='subDiv'>
        <Link to='/'>
          <img src="/images/arrow-left.svg" alt="Back to Home" />
        </Link>
          <h2 className="pokemonName">
            {item.name}
          </h2>
        </div>
          <p className="pokemonId" style={{ color: "white" }}>
            #{item.id}
          </p>
        </div>
 

      <div className="carrousel">  
      
        {Database[newItem - 1] ? (
          <Link className="btnToChange" to={`/pokemon/${Database[newItem - 1].id}`}>
            <button className="btnToChange">
              {"<"}
            </button>
          </Link>
        ) : (
          <Link className="btnToChange" to={`/pokemon/${Database[Database.length - 1].id}`}>
            <button className="btnToChange">
              {"<"}
            </button>
          </Link>
        )}
        <img
          className="pokemonImage"
          src={`/images/${item.name}.png`}
          alt="imgPokemon"
        />
        {Database[newItem + 1] ? (
          <Link className="btnToChange" to={`/pokemon/${Database[newItem + 1].id}`}>
            <button className="btnToChange">
              {">"}
            </button>
          </Link>
        ) : (
          <Link className="btnToChange" to={`/pokemon/${Database[0].id}`}>
            <button className="btnToChange">{">"}</button>
          </Link>
        )}
        </div>

        

      </div>
        <img
          className="pokeballImage"
          src={`/images/Pokeball.png`}
          alt={item.name}
        />
        
      <div className="pokemonInformation">
        <div className="containerType">
          <div className={`txtType ${item.type}`}>{item.type}</div>
          {item.secondaryType && <div className={`txtType ${item.secondaryType}`}>{item.secondaryType}</div>}
        </div>

        <div className="about">
          <h3 style={{ color: `${item.color}` }}>About</h3>
        </div>

        <div className="containerSpecifications">
          <div className="specification">
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

          <div className="specification center">
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

          <div className="specification">
            <div className="sub-div">
              <div>{item.primaryMove}</div>
              <div>{item.secondaryMove}</div>
            </div>
            <label>Moves</label>
          </div>
        </div>

        <div className="description"><p>{item.description}</p></div>
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
          
          {/* {compareMode && copiar div } */}
      
    </div>
  );
};

export default PokemonScreen;
