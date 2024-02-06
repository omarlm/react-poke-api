import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import PokemonCard from './components/PokemonCard'
import './App.css'
import { getPokemons, getPokemon } from './services/PokemonService'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const loadPokemonNames = async () => {
      try {
        // Realiza una llamada a la API o carga los nombres desde algún origen de datos
        const pokemonNames = await getPokemons() // Reemplaza esto con tu lógica real
        setSuggestions(pokemonNames)
      } catch (error) {
        console.error("Error cargando nombres de Pokémon:", error)
      }
    }

    // Llama a la función para cargar los nombres al montar el componente
    loadPokemonNames()
  }, [])

  const handleSearch = async (pokemon) => {
    if (!pokemon) return

    try {
      setLoading(true)
      setError(null)
      const pokemons = await getPokemon(pokemon)
      setData(pokemons)

    } catch (error) {
      setError(error.message)
      setData([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Search onSearch={handleSearch} suggestions={suggestions} />
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {data &&
        <PokemonCard pokemon={data} />
      }
    </>
  )
}

export default App
