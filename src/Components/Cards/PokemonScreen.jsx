import {React, useState} from "react";
import {useParams } from "react-router-dom";
import database from "../../Database/Database";


const PokemonScreen = () => {

  const params = useParams();
  const pokemonToRender=params.id;
  const newItem = database.filter((pokemon)=>{
    return pokemonToRender==pokemon.id    
  })
  const [item, setItem] = useState(newItem[0])

  console.log(database);
  
  
  return (
    <div>
      <h2 className="pokemonName">{item.name}</h2>
      <div
        className="imageContainer"
        style={{ backgroundColor: `${item.color}` }}
      >
        <img
          class="pokemonImage"
          src={`/images/${item.name}.png`}
          alt="imgPokemon"
        />
      </div>
      <div className="type">{item.type}</div>
      <h3>About</h3>
      <div className="weight">{item.weight}</div>
      <div className="moves">
        {item.primaryMove} {item.secondaryMove}
      </div>
      <div className="description">{item.description}</div>
      <div className="carrousel">
        <button className="nextPokemon"> Next </button>
      </div>
      <div>
        <h3>Base Stats</h3>
      </div>
      <span>
        <p>HP</p>
        <label for="file">{item.hp}</label>
        <progress id="file" max="100" value={item.hp}></progress>
      </span>

      <span>
        <p>ATK</p>
        <label for="file">{item.atk}</label>
        <progress id="file" max="100" value={item.atk}></progress>
      </span>

      <span>
        <p>DEF</p>
        <label for="file">{item.def}</label>
        <progress id="file" max="100" value={item.def}></progress>
      </span>

      <span>
        <p>SATK</p>
        <label for="file">{item.satk}</label>
        <progress id="file" max="100" value={item.satk}></progress>
      </span>

      <span>
        <p>SDEF</p>
        <label for="file">{item.sdef}</label>
        <progress id="file" max="100" value={item.sdef}></progress>
      </span>

      <span>
        <p>SPD</p>
        <label for="file">{item.spd}</label>
        <progress id="file" max="100" value={item.spd}></progress>
      </span>
    </div>
  );
};

export default PokemonScreen;
