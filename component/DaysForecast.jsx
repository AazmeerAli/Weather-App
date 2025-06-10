'use client'
import { WeatherContext } from '@/context/WeatherContext'
import { getConditionIcon } from '@/lib/getConditionIcon'
import { Icon } from '@iconify/react'
import React, { useContext } from 'react'

const getDayfromDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days[day]
}

const DaysForecast = () => {

    const { weatherData, setWeatherData, isDay, setIsDay } = useContext(WeatherContext)

    const data = [
        {
            time: 'Today',
            icon: weatherData?.days[0]?.conditions ? getConditionIcon(weatherData?.days[0]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
            condition: weatherData?.days[0]?.conditions,
            temp: weatherData?.days[0]?.temp,
        },
        {
            time: getDayfromDate(weatherData?.days[1]?.datetime) || 'Tue',
            icon: weatherData?.days[1]?.conditions ? getConditionIcon(weatherData?.days[1]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
            condition: weatherData?.days[1]?.conditions,
            temp: weatherData?.days[1]?.temp,
        },
        {
            time: getDayfromDate(weatherData?.days[2]?.datetime) || 'Wed',
            icon: weatherData?.days[2]?.conditions ? getConditionIcon(weatherData?.days[2]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
            condition: weatherData?.days[2]?.conditions,
            temp: weatherData?.days[2]?.temp,
        },
        {
            time: getDayfromDate(weatherData?.days[3]?.datetime) || 'Thu',
            icon: weatherData?.days[3]?.conditions ? getConditionIcon(weatherData?.days[3]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
            condition: weatherData?.days[3]?.conditions,
            temp: weatherData?.days[3]?.temp,
        },
        {
            time: getDayfromDate(weatherData?.days[4]?.datetime) || 'Fri',
            icon: weatherData?.days[4]?.conditions ? getConditionIcon(weatherData?.days[4]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
            condition: weatherData?.days[4]?.conditions,
            temp: weatherData?.days[4]?.temp,
        },
    ]


    return (
        <div className='h-full w-full rounded-md bg-gray-800 flex flex-col  text-gray-400 px-5 py-6 gap-6'>
            <h2 className='font-bold text-lg uppercase'>Today Forecast</h2>
            <div className='custom-day-forecast-scrollbar w-full flex flex-col overflow-y-auto'>
                {data.map((value, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center justify-center'
                    >
                        <div className='w-full flex justify-between items-center px-4 py-2'>
                            <h3 className='w-10 font-semibold text-nowrap'>{value.time}</h3>
                            <div className='flex items-center'>
                                <Icon
                                    icon={value.icon}
                                    className='text-7xl'
                                />
                                <p className='capitalize font-semibold'>
                                    {value.condition}
                                </p>
                            </div>
                            <p className='font-semibold'>
                                {/* {value.maxTemp}&deg;
                                /{' '}
                                <span className='text-gray-500'>
                                    {value.minTemp}&deg;
                                </span> */}
                                {value.temp ? (
                                    <span className='text-white'>
                                        {value?.temp}&deg;
                                    </span>
                                ) : (
                                    <span className='text-white'>
                                        N/A
                                    </span>
                                )}
                            </p>
                        </div>
                        {index !== data.length - 1 && (
                            <span className='w-full h-[2px] bg-gray-600 rounded'></span>
                        )}
                    </div>
                ))}
                <style jsx>{`
                       .custom-day-forecast-scrollbar::-webkit-scrollbar{
                        width: 4px;
                        margin: 10px;
                    }
                       .custom-day-forecast-scrollbar::-webkit-scrollbar-thumb {
                        background-color: #fff;
                        border-radius: 9999px;
                        cursor:pointer;
                    }
                       
                       .custom-day-forecast-scrollbar::-webkit-scrollbar-track {
                        background-color: #6b7280;
                        border-radius: 5px;
                    }
                    `}
                </style>
            </div>
        </div>
    )
}

export default DaysForecast
