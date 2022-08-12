import React from "react";

const Cards = ({ item, index }) => {
  return (
    <div>
      <li className="cardContainer" key={index}>
        <p className="id">{`# ${item.id}`}</p>

        <img
          class="cardImg shadow-sm"
          src={`./images/${item.name}.png`}
          alt="Imagen Pokemon"
        />

        <div class="card-body">
          <p class="card-text">{item.name}</p>
        </div>
      </li>
    </div>
  );
};

export default Cards;
