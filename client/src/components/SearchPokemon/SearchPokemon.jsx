import React from 'react';
import { getPokemons, clearDetails } from '../../actions';
import { useParams } from "react-router-dom";
import { useEffect } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
import "./SearchPokemon.css" 


  const SearchPokemon = () => {
    let { name } = useParams(); 
    name = name.toLowerCase()
      const dispatch = useDispatch()
      const pokemon = useSelector(state => state.pokemonsName)
      useEffect(()=>{
        dispatch(getPokemons(name))
    
        return ()=> dispatch(clearDetails())
      }, [])
      if (pokemon.name !== name){
          return (
            <div id ="notfound">
            <h4>EL POKEMON INGRESADO NO EXISTE</h4>
            </div>
          )
      }
      return (
        <div id = "details">
          <img id='pokemonImg' src={pokemon.image} alt="Pokemon"/>
          <h1 id = "name">{pokemon.name}</h1>
          <div id = "stats">
          <h3>Ataque: {pokemon.attack}</h3>
          <h3>Defensa: {pokemon.defense}</h3>
          <h3>Vida: {pokemon.hp}</h3>
          <h3>Velocidad: {pokemon.speed}</h3>
          <h3>Peso: {pokemon.weight}</h3>
          <h3>Altura: {pokemon.height}</h3>
          <h3>Tipo/s: {pokemon.type}</h3>
          </div>
        </div>
      );
  };

  export default SearchPokemon;
