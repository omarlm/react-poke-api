import React, { useState } from 'react'
import { capitalizeFirstLetter } from '../utils/utils'

const Search = ({ onSearch, suggestions }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [isInteractingWithSuggestions, setIsInteractingWithSuggestions] = useState(false)

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
        setShowSuggestions(true)
        if (!event.target.value) {
            setShowSuggestions(false)
        }
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm('')
        setShowSuggestions(false)
        onSearch(suggestion)
    }

    return (
        <div className="max-w relative my-6">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden border border-accent-10">
                <div className="grid place-items-center h-full w-12 text-text/60">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    className="peer h-full w-full outline-none text-base font-mono text-[#041517]"
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search Pokémon..."
                    onBlur={() => !isInteractingWithSuggestions && setShowSuggestions(false)}
                    onFocus={() => searchTerm && setShowSuggestions(true)}
                />
            </div>
            {showSuggestions && (
                <ul
                    className="absolute z-10 text-[#041517] font-bold w-full bg-white mt-1 rounded-lg shadow-lg"
                    onMouseEnter={() => setIsInteractingWithSuggestions(true)}
                    onMouseLeave={() => setIsInteractingWithSuggestions(false)}
                    onBlur={() => setShowSuggestions(false)}
                >
                    {suggestions.filter(name => name.toLowerCase().startsWith(searchTerm.toLowerCase()))
                        .map((name, index) => (
                            <li key={index} className="font-mono p-2 hover:bg-gray-100 hover:cursor-pointer w-full" onClick={() => handleSuggestionClick(name)}>
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

