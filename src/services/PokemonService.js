const API_BASE_URL = 'https://pokeapi.co/api/v2'

const getPokemons = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/pokemon?limit=1000`)

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()

        // Extraer los nombres de los Pokémon de la respuesta
        const names = data.results.map((pokemon) => pokemon.name)

        // Devuelve un array de nombres de Pokémon
        return names
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
        throw error
    }
}



const getPokemon = async (name) => {
    try {
        // Obtener los detalles básicos del Pokémon
        const response = await fetch(`${API_BASE_URL}/pokemon/${name}`)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const pokemonDetails = await response.json()

        const sprites = pokemonDetails.sprites

        const pokemonImages = {
            frontDefault: sprites.front_default,
            backDefault: sprites.back_default,
            frontShiny: sprites.front_shiny,
            backShiny: sprites.back_shiny,
        }
        const speciesResponse = await fetch(pokemonDetails.species.url)
        if (!speciesResponse.ok) {
            throw new Error(`Error: ${speciesResponse.status}`)
        }
        const speciesDetails = await speciesResponse.json()

        const evolutionResponse = await fetch(speciesDetails.evolution_chain.url)
        if (!evolutionResponse.ok) {
            throw new Error(`Error: ${evolutionResponse.status}`)
        }
        const evolutionDetails = await evolutionResponse.json()

        const evolutionNames = getEvolutions(evolutionDetails.chain)

        const pokemonData = {
            details: pokemonDetails,
            species: speciesDetails,
            evolutions: evolutionNames,
            images: pokemonImages,
        }

        return pokemonData
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
        throw error
    }
}


const getEvolutions = (evolutionNode) => {
    let names = [evolutionNode.species.name]
    evolutionNode.evolves_to.forEach(evolvesNode => {
        names = names.concat(getEvolutions(evolvesNode))
    })
    return names
}

export { getPokemons, getPokemon, getEvolutions }