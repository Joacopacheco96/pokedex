import React from "react";

import "../Home/Home.css";

const Card = ({ item, index }) => {
  return (
    <li className="cardContainer">
      <p className="id">{`# ${item.id}`}</p>

      <img
        class="cardImg shadow-sm"
        src={`/images/${item.name}.png`}
        alt="Imagen Pokemon"
      />

      <div class="card-body">
        <p class="card-text">{item.name}</p>
      </div>
    </li>
  );
};

export default Card;
