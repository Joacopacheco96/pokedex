import React from "react";

import "../../Stylessheets/styles.css";

const Index = () => {
  return (
    <main>
      <div>
        <img className="pokeballIcon" src={"./images/Pokeball.png"} />
        <span className="title">Pokédex</span>
        <button className="sortButton" />
        <input className="input" type="text" placeholder="🔎 Buscar"></input>
      </div>
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Thumbnail
          </text>
        </svg>

        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
