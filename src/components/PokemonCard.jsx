import { capitalizeFirstLetter } from "../utils/utils"

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="bg-primary/50 relative w-full border-2 border-gray-200 rounded-md shadow-md p-4">
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-0">
                <span className="text-opacity-10 text-text font-bold font-mono text-[9rem]">
                    #{pokemon.id}
                </span>
            </div>

            <div className="relative">
                <h3 className="text-3xl text-center font-bold font-mono text-text mb-2">
                    {capitalizeFirstLetter(pokemon.name)}
                </h3>
                <div className="flex justify-around items-center">
                    {Object.entries(pokemon.images).map(([key, url]) => (
                        <img
                            key={key}
                            src={url}
                            alt={`${pokemon.name} ${key.replace('_', ' ')}`}
                            className="w-20 h-20 lg:w-24 lg:h-24 my-2"
                        />
                    ))}
                </div>

                <div className="font-mono p-6">
                    <h4 className="text-md font-bold text-text mb-2">Stats:</h4>
                    {pokemon.stats.map((stat) => (
                        <div key={stat.name} className="mb-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-text">{capitalizeFirstLetter(stat.name)}:</span>
                                <span className="text-sm font-semibold text-text">{stat.value}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full">
                                <div className="bg-primary/70 h-2 rounded-full" style={{ width: `${Math.min(stat.value, 100)}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
