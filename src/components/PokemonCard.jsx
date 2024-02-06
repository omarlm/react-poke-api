import { capitalizeFirstLetter } from "../utils/utils"

const PokemonCard = ({ pokemon }) => {
    console.log("🚀 ~ PokemonCard ~ pokemon:", pokemon)
    return (
        <div className="w-full border-2 border-gray-200 rounded-md shadow-md p-4">
            {pokemon.images && Object.entries(pokemon.images).map(([key, url]) =>
                url ? <img key={key} src={url} alt={`${pokemon.species.name} ${key}`} className="pokemon-image" /> : null
            )}
            <h3 className="pokemon-name text-lg font-bold text-gray-800 mb-2">{capitalizeFirstLetter(pokemon.species.name)}</h3>
            {/* Agrega aquí más información si es necesario */}
        </div>


    )
}

export default PokemonCard
