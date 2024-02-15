const API_BASE_URL = 'https://pokeapi.co/api/v2'

// Función genérica para hacer llamadas a la API
const fetchAPI = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
    }
    return response.json()
}

const getPokemons = async () => {
    try {
        const data = await fetchAPI(`${API_BASE_URL}/pokemon?limit=1025`)
        return data.results.map(pokemon => pokemon.name)
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
        throw error
    }
}

const getPokemon = async (name) => {
    try {
        const pokemonDetails = await fetchAPI(`${API_BASE_URL}/pokemon/${name}`)
        const speciesDetails = await fetchAPI(pokemonDetails.species.url)
        const evolutionDetails = await fetchAPI(speciesDetails.evolution_chain.url)

        const evolutionNames = getEvolutions(evolutionDetails.chain)

        const imageKeys = ['front_default', 'back_default', 'front_shiny', 'back_shiny'];

        // Filtrar solo las imágenes deseadas
        const filteredSprites = imageKeys.reduce((acc, key) => {
            if (pokemonDetails.sprites[key]) {
                acc[key] = pokemonDetails.sprites[key];
            }
            return acc;
        }, {});

        return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            stats: pokemonDetails.stats.map(stat => ({
                name: stat.stat.name,
                value: stat.base_stat
            })),
            species: speciesDetails.name,
            evolutions: evolutionNames,
            images: filteredSprites
        }
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

// Exportaciones si estás usando módulos
export { getPokemons, getPokemon, getEvolutions }
