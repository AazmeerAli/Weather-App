'use client'
import { WeatherContext } from '@/context/WeatherContext'
import { getConditionIcon } from '@/lib/getConditionIcon'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useContext } from 'react'
import CloudySvg from '@/app/assets/svgs/overcast.svg'

const getDayfromDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days[day]
}

const getDayData = (weatherData, index, defaultDayName, isDay) => {
    const currentDay = weatherData?.days[index]
    const dayName = getDayfromDate(currentDay?.datetime)
    const icon = currentDay?.conditions ? getConditionIcon(currentDay?.conditions || '', isDay) : CloudySvg
    const condition = currentDay?.conditions
    const temperature = currentDay?.temp

    return {
        time: dayName || defaultDayName,
        icon: icon,
        condition: condition,
        temp: temperature,
    }
}

const DaysForecast = () => {

    const { weatherData, setWeatherData, isDay, setIsDay, weatherIndex, setWeatherIndex } = useContext(WeatherContext)

    // const data = [
    //     {
    //         time: 'Today',
    //         icon: weatherData?.days[0]?.conditions ? getConditionIcon(weatherData?.days[0]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
    //         condition: weatherData?.days[0]?.conditions,
    //         temp: weatherData?.days[0]?.temp,
    //     },  
    //     {
    //         time: getDayfromDate(weatherData?.days[1]?.datetime) || 'Tue',
    //         icon: weatherData?.days[1]?.conditions ? getConditionIcon(weatherData?.days[1]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
    //         condition: weatherData?.days[1]?.conditions,
    //         temp: weatherData?.days[1]?.temp,
    //     },
    //     {
    //         time: getDayfromDate(weatherData?.days[2]?.datetime) || 'Wed',
    //         icon: weatherData?.days[2]?.conditions ? getConditionIcon(weatherData?.days[2]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
    //         condition: weatherData?.days[2]?.conditions,
    //         temp: weatherData?.days[2]?.temp,
    //     },
    //     {
    //         time: getDayfromDate(weatherData?.days[3]?.datetime) || 'Thu',
    //         icon: weatherData?.days[3]?.conditions ? getConditionIcon(weatherData?.days[3]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
    //         condition: weatherData?.days[3]?.conditions,
    //         temp: weatherData?.days[3]?.temp,
    //     },
    //     {
    //         time: getDayfromDate(weatherData?.days[4]?.datetime) || 'Fri',
    //         icon: weatherData?.days[4]?.conditions ? getConditionIcon(weatherData?.days[4]?.conditions || '', isDay) : 'meteocons:cloudy-fill',
    //         condition: weatherData?.days[4]?.conditions,
    //         temp: weatherData?.days[4]?.temp,
    //     },
    // ]

    const data = [
        getDayData(weatherData, 0, 'Today', weatherIndex !== 0 ? null : isDay),
        getDayData(weatherData, 1, 'Tue', weatherIndex !== 1 ? null : isDay),
        getDayData(weatherData, 2, 'Wed', weatherIndex !== 2 ? null : isDay),
        getDayData(weatherData, 3, 'Thu', weatherIndex !== 3 ? null : isDay),
        getDayData(weatherData, 4, 'Fri', weatherIndex !== 4 ? null : isDay),
    ]


    return (
        <div className='h-full w-full rounded-md bg-gray-800 flex flex-col text-gray-400 px-3.5 py-5 sm:p-5 xl:p-6 2xl:p-7 gap-6'>
            <h2 className='font-bold text-lg uppercase'>5 Days Forecast</h2>
            <div className='h-full custom-day-forecast-scrollbar flex flex-col overflow-x-auto'>
                {data.map((value, index) => (
                    <div
                        key={index}
                        className={`min-w-xs h-20 lg:h-full flex flex-col items-center justify-center `}
                    >
                        <div
                            className={` w-full h-full flex items-center relative px-4 my-2  rounded-xl gap-4 cursor-pointer ${weatherIndex === index ? 'bg-gray-700' : ''}`}
                            onClick={() => setWeatherIndex(index)}
                        >
                            {/* Left-aligned time */}
                            <h3 className='w-16 text-left font-semibold text-nowrap'>
                                {value.time}
                            </h3>

                            {/* Center-aligned icon + condition */}
                            <div className='absolute left-1/2 -translate-x-1/2 flex items-center  gap-2 text-center'>
                                <Image
                                    src={value.icon}
                                    alt={value?.condition}
                                    width={50}
                                    height={50}
                                    className='w-20'
                                />
                                <p className='capitalize font-semibold text-sm'>
                                    {value.condition ? value.condition : 'N/A'}
                                </p>
                            </div>

                            {/* Right-aligned temp */}
                            <p className='ml-auto font-semibold text-white'>
                                {value.temp ? `${value.temp}°` : 'N/A'}
                            </p>
                        </div>

                        {index !== data.length - 1 && (
                            <span className='w-full h-[2px] bg-gray-600 rounded'></span>
                        )}
                    </div>
                ))}
                <style jsx>{`
                       .custom-day-forecast-scrollbar::-webkit-scrollbar{
                        height: 4px;
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
