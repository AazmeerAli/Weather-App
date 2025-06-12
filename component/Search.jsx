'use client'
import React, { useContext, useState } from 'react'
import { Icon } from '@iconify/react';
import { WeatherContext } from '@/context/WeatherContext';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const { weatherData, city, setCity } = useContext(WeatherContext)
    console.log(weatherData)

    const handleSearch = () => {
        setCity(searchTerm)
    }

    return (
        <div className='w-full flex gap-2  font-medium'>
            <input
                type="text"
                placeholder='Search Location'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full text-gray-400 placeholder:text-gray-400 focus:outline-0 focus:brightness-110 transition duration-300 bg-gray-800 rounded-md px-4'
            />
            <button
                onClick={handleSearch}
                className='text-gray-400 bg-gray-800 py-1 px-4 rounded-sm cursor-pointer hover:brightness-110 transition duration-300'
            >
                {/* Search */}
                <Icon
                    icon="ic:outline-search"
                    //  width="20"
                    className='text-2xl '
                />
            </button>
        </div>
    )
}

export default Search
