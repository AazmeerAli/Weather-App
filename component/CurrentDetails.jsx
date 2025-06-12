'use client'
import { WeatherContext } from '@/context/WeatherContext';
import { getConditionIcon } from '@/lib/getConditionIcon';
import { isDaytime } from '@/lib/isDaytime';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useContext } from 'react'

const CurrentDetails = () => {

    const { weatherData, setWeatherData, isDay, setIsDay, weatherIndex, setWeatherIndex, error } = useContext(WeatherContext)

    const cityName = weatherData?.resolvedAddress
    const humidity = weatherData?.days[weatherIndex]?.humidity
    const currentTemp = weatherData?.days[weatherIndex]?.temp

    const condition = weatherData?.days[weatherIndex]?.conditions || ''
    const icon = getConditionIcon(condition, isDay)

    return (
        <div className='w-[90%]  h-full mx-auto text-white flex flex-col md:flex-row items-center justify-around py-14 '>
            <div className="w-full flex flex-col sm:flex-row md:flex-col sm:justify-between gap-8 text-left">
                <div>
                    <h1 className='text-left capitalize font-bold text-4xl'>{cityName ? cityName : 'City Name'}</h1>
                    <p className='text-gray-400'>Humidity Level: {humidity ? `${humidity}%` : 'N/A'}</p>
                </div>
                <p className='font-bold text-4xl'>{currentTemp ? `${currentTemp}°` : 'N/A'}</p>
                {
                   error && (
                        <p className='text-red-500'>{error}</p>
                    )
                }
            </div>
            <div>
                <Image
                    src={icon}
                    alt={condition}
                    width={50}
                    height={50}
                    className='w-[200px]'
                />
            </div>
        </div>
    )
}

export default CurrentDetails
