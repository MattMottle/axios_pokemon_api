import './App.css';
import React, { useEffect, useState } from "react"
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            setPokemonList(response.data.results);
          })
        .catch((err) => console.log(err));
          }, [])
  
  return (
    <div className="App">
      <h1>Pokemon</h1>
        {pokemonList.length > 0 && (
          <ul>
            {pokemonList.map((pokemon, index) => {
              return <li key={ index }>{ pokemon.name }</li>
            })
          }
          </ul>
        )} : <h1>No Pokemon in List</h1>
    </div>
  );
}

export default App;
