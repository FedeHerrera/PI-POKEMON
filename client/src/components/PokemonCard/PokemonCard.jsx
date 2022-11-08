import React from 'react';
import "./PokemonCard.css"
// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const PokemonCard = (props) => {
    return (
      <div className = "card">
      <img src={props.image} alt="Imagen del pokemon" id= "pokemonImage"/>
      <h3 id="name">{props.name}</h3>
      <p>Tipo: {props.type.map(t => t + " ")}</p>


  </div>
    );
};

export default PokemonCard;
 