import React from "react";

import Database from '../../Database/Database.jsx'

const Index = () => {
      
  return (

    <main>
      <div className="NavContainer">
        <img className="pokeballIcon" src={"./images/Pokeball.png"} alt="icon" />
        <span className="title">Pokédex</span>
        <button className="sortButton" />
      </div>
        <input className="input" type="text" placeholder="🔎 Buscar"></input>

      <ul className='list'>
            {Database.map((item, index) => {
                return (
      <div key={index}>

        <p>{item.id}</p>                  

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
