import React from "react";
import { useState, useEffect } from "react";
import '../Cards/Card.css'

const Card = ({item}) => {
const [pokemon, setPokemon] = useState()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
  
    .then((db) => db.json()) 
    .then((result) => {
      setPokemon(result);
      });
  }, [])


  return (
    pokemon===undefined?null:
      <li className={`cardContainer`} style={{ border:`3px solid` }}>
        <p className="id">{`# ${pokemon.id}`}</p>

        <img
          class="cardImg shadow-sm"
          src={`${pokemon.sprites.front_default}`}
          alt="Imagen Pokemon"
        />

        <div class="card-body" style={{ backgroundColor: `${pokemon.color}`}}>
          <p class="card-text">{pokemon.name}</p>
        </div>
      </li>
    
  );
};

export default Card;