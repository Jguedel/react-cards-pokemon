import React, { useState } from "react";
import uuid from "react-uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxiosDex from "./hooks/useAxiousDex";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [name, setName] = useState("pikachu");
  console.log(name);
  const [pokemon, setPokemon] = useAxiosDex(
    "pokemon",
    `https://pokeapi.co/api/v2/pokemon/`
  );

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={setPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((cardData) => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
