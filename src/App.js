import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import grassImage from './grass2.png';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  const fetchRandomPokemon = () => {
    let total_pokemons = 500;
    let id = Math.floor(Math.random() * (total_pokemons - 1 + 1) + 1);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then((resData) => {
        setPokemonData({ name: resData.name, url: resData.sprites.front_default });
      });
  };


  return (
    <div className='App'>
      <h1>Random Pokemon Encounter</h1>
      {pokemonData ? (
        <>
          <PokemonCard name={pokemonData.name} url={pokemonData.url} />
          <button onClick={() => setPokemonData(null)}>Search for more?</button>
        </>  
      ) : (
        <>
          <img src={grassImage} onClick={fetchRandomPokemon} className='grass' alt='grass' />
          <p>Who's that pokemon!?</p>
        </>
      )}
    </div>
  );
}

export default App;
