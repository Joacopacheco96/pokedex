import React from "react";
import { useState } from "react";

import Database from '../../Database/Database.jsx'

const Index = () => {
  
const [database, setdatabase] = useState(Database)  
    
  
  
  
  return (

    <main>
                    <div className="NavContainer">
        <img className="pokeballIcon" src={"./images/Pokeball.png"} />
        <span className="title">Pokédex</span>
        <button className="sortButton" />
        <input className="input" type="text" placeholder="🔎 Buscar"></input>
      </div>

<ul className='list'>
            {database.map((item, index) => {
                return (
                <div key={index}>

      <div class="cardContainer shadow-sm">
        <img src={`./images/${item.name}.png`} alt='Imagen Pokemon'/>

        <div class="card-body">
          <p class="card-text">
            {item.name}
          </p>
        </div>
      </div>
                </div>
                )
            })}
        </ul>
    </main>
  );
};

export default Index;
