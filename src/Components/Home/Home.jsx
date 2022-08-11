import React from "react";
import { useState } from "react";

import Database from '../../Database/Database.jsx'

import './Home.css'

const Home = () => {

const [input, setInput] = useState('')
const handleInput = (e) => {
  setInput(e.target.value);}

const [order, setorder] = useState(true)

const sortByName = () =>{
  Database.name.sort()
}

  return (

    <main>
      <div className="navContainer">
        <div className="subContainer">
        <img className="pokeballIcon" src={"./images/Pokeball.png"} alt="icon" />
        <span className="title">Pokédex</span>
        </div>
        <button className="sortButton">Sort</button>
      </div>
      <input className="input" type="text" onChange={handleInput} placeholder="🔎 Buscar"></input>

      
      <ul className='list'>
            {Database.map((item, index) => {
                if (item.name.includes(`${input}`)) {
                  
                  return (
                    <div className="cardContainer" key={index}>

        <p className="id">{`# ${item.id}`}</p>                  

          <img class="cardImg shadow-sm" src={`./images/${item.name}.png`} alt='Imagen Pokemon'/>

          <div class="card-body">
            <p class="card-text">
              {item.name}
            </p>
          
          </div>
      </div>
                )
              }
            })}
            sortByName;
        </ul>
    </main>
  );
};
export default Home;