import React, { useState } from 'react'
import { capitalizeFirstLetter } from '../utils/utils'

const Search = ({ onSearch, suggestions }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
        setShowSuggestions(true)
        if (!event.target.value) {
            setShowSuggestions(false)
        }
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion)
        setShowSuggestions(false)
        onSearch(suggestion)
    }

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Buscar Pokémon..."
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                onFocus={() => searchTerm && setShowSuggestions(true)}
            />
            {showSuggestions && (
                <ul className="suggestions">
                    {suggestions.filter(name => name.toLowerCase().startsWith(searchTerm.toLowerCase()))
                        .map((name, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(name)}>
                                {capitalizeFirstLetter(name)}
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default Search
