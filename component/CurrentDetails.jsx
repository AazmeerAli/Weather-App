'use client'
import { WeatherContext } from '@/context/WeatherContext';
import { getConditionIcon } from '@/lib/getConditionIcon';
import { isDaytime } from '@/lib/isDaytime';
import { Icon } from '@iconify/react';
import React, { useContext } from 'react'

const CurrentDetails = () => {

    const { weatherData, setWeatherData, isDay, setIsDay } = useContext(WeatherContext)

    const cityName = weatherData?.address
    const humidity = weatherData?.days[0]?.humidity
    const currentTemp = weatherData?.days[0]?.temp

    const condition=weatherData?.days[0]?.conditions||''
    const icon = getConditionIcon(condition, isDay)

    return (
        <div className='h-full text-white flex items-center justify-around'>
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className='font-bold text-4xl'>{weatherData?.address}</h1>
                    <p className='text-gray-400'>Humidity Level: {humidity ? `${humidity}%` : 'N/A'}</p>
                </div>
                <p className='font-bold text-4xl'>{currentTemp ? `${currentTemp}°` : 'N/A'}</p>
            </div>
            <div>
                <Icon
                    icon={icon}
                    className='text-[200px]'
                />
            </div>
        </div>
    )
}

export default CurrentDetails
