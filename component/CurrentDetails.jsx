'use client'
import { Icon } from '@iconify/react';
import React from 'react'

const getConditionIcon = (condition) => {
    if (condition.includes('Thunderstorm')) return 'thunder.svg';
    if (condition.includes('Rain')) return 'rain.svg';
    if (condition.includes('Snow')) return 'snow.svg';
    if (condition.includes('Sleet') || condition.includes('Freezing')) return 'ice.svg';
    if (condition.includes('Fog') || condition.includes('Mist') || condition.includes('Haze')) return 'fog.svg';
    if (condition.includes('Cloudy') || condition.includes('Overcast')) return 'cloudy.svg';
    if (condition.includes('Clear')) return 'clear.svg';
    if (condition.includes('Windy') || condition.includes('Breezy')) return 'wind.svg';
    return 'default.svg';
};

const CurrentDetails = () => {
    return (
        <div className='h-full text-white flex items-center justify-around'>
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className='font-bold text-4xl'>Karachi</h1>
                    <p className='text-gray-400'>Humidity Level: 65%</p>
                </div>
                <p className='font-bold text-4xl'>29&deg;</p>
            </div>
            <div>
                <Icon
                    icon='meteocons:overcast-day-rain-fill'
                    className='text-[200px]'
                />
            </div>
        </div>
    )
}

export default CurrentDetails
