import React from "react";

import '../Cards/Card.css'

const Card = ({item}) => {
  return (
    
      <li className={`cardContainer`} style={{ border:`3px solid ${item.color}` }}>
        <p className="id" style={{ color: `${item.color}` }}>{`# ${item.id}`}</p>

        <img
          class="cardImg shadow-sm"
          src={`./images/${item.name}.png`}
          alt="Imagen Pokemon"
        />

        <div class="card-body" style={{ backgroundColor: `${item.color}`}}>
          <p class="card-text">{item.name}</p>
        </div>
      </li>
    
  );
};

export default Card;