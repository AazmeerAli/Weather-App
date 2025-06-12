import { WeatherContext } from '@/context/WeatherContext';
import { getConditionIcon } from '@/lib/getConditionIcon';
import { isDaytime } from '@/lib/isDaytime';
import { Icon } from '@iconify/react'
import Image from 'next/image';
import React, { useContext, useMemo, useState } from 'react'
import CloudySvg from '@/app/assets/svgs/overcast.svg'

function convertTo12Hour(timeString) {
    const [hour, minute] = timeString.split(":");
    const date = new Date();
    date.setHours(hour, minute);
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

function formatWeatherData(weatherData, weatherIndex, hourIndex, defaultTime) {
    const hourData = weatherData?.days[weatherIndex]?.hours[hourIndex];

    return {
        time: hourData?.datetime
            ? convertTo12Hour(hourData.datetime)
            : defaultTime,

        icon: hourData?.conditions
            ? getConditionIcon(
                hourData.conditions,
                isDaytime(
                    weatherData?.days[weatherIndex]?.sunrise,
                    weatherData?.days[weatherIndex]?.sunset,
                    hourData?.datetime
                )
            )
            : CloudySvg,
        condition: hourData?.conditions,
        temperature: hourData?.temp || 'N/A',
    };
}


const HoursForecast = () => {

    const { weatherData, setWeatherData, weatherIndex, setWeatherIndex } = useContext(WeatherContext)

    const dayFinder = (sunrise, sunset, currentTime) => {
        const result = isDaytime(sunrise, sunset, currentTime);
    }



    // const data = useMemo(() => [
    //     {
    //         time: weatherData?.days[0]?.hours[0]?.datetime ? convertTo12Hour(weatherData?.days[0]?.hours[0]?.datetime || '') : '12:00 AM',
    //         icon: weatherData?.days[weatherIndex]?.hours[0]?.conditions ? getConditionIcon(weatherData?.days[weatherIndex]?.hours[0]?.conditions || '', isDaytime(weatherData?.days[weatherIndex]?.sunrise, weatherData?.days[weatherIndex]?.sunset, weatherData?.days[weatherIndex]?.hours[0]?.datetime)) : 'meteocons:partly-cloudy-day-fill',
    //         temperature: weatherData?.days[weatherIndex]?.hours[0]?.temp || 'N/A',
    //     },
    //     {
    //         time: '03:00 AM',
    //         icon: weatherData?.days[weatherIndex]?.hours[3]?.conditions ? getConditionIcon(weatherData?.days[weatherIndex]?.hours[3]?.conditions || '', isDaytime(weatherData?.days[weatherIndex]?.sunrise, weatherData?.days[weatherIndex]?.sunset, weatherData?.days[weatherIndex]?.hours[3]?.datetime)) : 'meteocons:partly-cloudy-day-fill',
    //         temperature: weatherData?.days[weatherIndex]?.hours[3]?.temp || 'N/A',
    //     },
    //     {
    //         time: '06:00 AM',
    //         icon: weatherData?.days[weatherIndex]?.hours[6]?.conditions ? getConditionIcon(weatherData?.days[weatherIndex]?.hours[6]?.conditions || '', isDaytime(weatherData?.days[weatherIndex]?.sunrise, weatherData?.days[weatherIndex]?.sunset, weatherData?.days[weatherIndex]?.hours[6]?.datetime)) : 'meteocons:partly-cloudy-day-fill',
    //         temperature: weatherData?.days[weatherIndex]?.hours[6]?.temp || 'N/A',
    //     },
    //     {
    //         time: '09:00 AM',
    //         icon: weatherData?.days[weatherIndex]?.hours[9]?.conditions ? getConditionIcon(weatherData?.days[weatherIndex]?.hours[9]?.conditions || '', isDaytime(weatherData?.days[weatherIndex]?.sunrise, weatherData?.days[weatherIndex]?.sunset, weatherData?.days[weatherIndex]?.hours[9]?.datetime)) : 'meteocons:partly-cloudy-day-fill',
    //         temperature: weatherData?.days[weatherIndex]?.hours[9]?.temp || 'N/A',
    //     },
    //     {
    //         time: '12:00 PM',
    //         icon: weatherData?.days[weatherIndex]?.hours[12]?.conditions ? getConditionIcon(weatherData?.days[weatherIndex]?.hours[12]?.conditions || '', isDaytime(weatherData?.days[weatherIndex]?.sunrise, weatherData?.days[weatherIndex]?.sunset, weatherData?.days[weatherIndex]?.hours[12]?.datetime)) : 'meteocons:partly-cloudy-day-fill',
    //         temperature: weatherData?.days[weatherIndex]?.hours[12]?.temp || 'N/A',
    //     },
    //     {
    //         time: '03:00 PM',
    //         icon: weatherData?.days[weatherIndex]?.hours[15]?.conditions ? getConditionIcon(weatherData?.days[weatherIndex]?.hours[15]?.conditions || '', isDaytime(weatherData?.days[weatherIndex]?.sunrise, weatherData?.days[weatherIndex]?.sunset, weatherData?.days[weatherIndex]?.hours[15]?.datetime)) : 'meteocons:partly-cloudy-day-fill',
    //         temperature: weatherData?.days[weatherIndex]?.hours[15]?.temp || 'N/A',
    //     },
    //     {
    //         time: '06:00 PM',
    //         icon: weatherData?.days[weatherIndex]?.hours[18]?.conditions ? getConditionIcon(weatherData?.days[weatherIndex]?.hours[18]?.conditions || '', isDaytime(weatherData?.days[weatherIndex]?.sunrise, weatherData?.days[weatherIndex]?.sunset, weatherData?.days[weatherIndex]?.hours[18]?.datetime)) : 'meteocons:partly-cloudy-day-fill',
    //         temperature: weatherData?.days[weatherIndex]?.hours[18]?.temp || 'N/A',
    //     },
    //     {
    //         time: '09:00 PM',
    //         icon: weatherData?.days[weatherIndex]?.hours[21]?.conditions ? getConditionIcon(weatherData?.days[weatherIndex]?.hours[21]?.conditions || '', isDaytime(weatherData?.days[weatherIndex]?.sunrise, weatherData?.days[weatherIndex]?.sunset, weatherData?.days[weatherIndex]?.hours[21]?.datetime)) : 'meteocons:partly-cloudy-day-fill',
    //         temperature: weatherData?.days[weatherIndex]?.hours[21]?.temp || 'N/A',
    //     },
    // ], [weatherData, weatherIndex])


    const data = useMemo(() => [
        formatWeatherData(weatherData, weatherIndex, 0, '12:00 AM'),
        formatWeatherData(weatherData, weatherIndex, 3, '3:00 AM'),
        formatWeatherData(weatherData, weatherIndex, 6, '6:00 AM'),
        formatWeatherData(weatherData, weatherIndex, 9, '9:00 AM'),
        formatWeatherData(weatherData, weatherIndex, 12, '12:00 PM'),
        formatWeatherData(weatherData, weatherIndex, 15, '3:00 PM'),
        formatWeatherData(weatherData, weatherIndex, 18, '6:00 PM'),
        formatWeatherData(weatherData, weatherIndex, 21, '9:00 PM'),
    ], [weatherData, weatherIndex])

    return (
        <div className=' w-full rounded-md bg-gray-800 flex flex-col  text-gray-400 px-3.5 py-5 sm:p-5 xl:p-6 2xl:p-7 gap-6'>
            <h2 className='font-bold text-lg uppercase'>Today Forecast</h2>
            <div className='w-full custom-hour-forecast-scrollbar flex overflow-x-auto pb-6'>
                {data.map((value, index) => (
                    <div
                        key={index}
                        className='w-full flex items-center justify-around relative py-2 px-4 sm:px-6'
                    >
                        <div className='flex flex-col justify-stretch items-center'>
                            <h3 className='font-semibold text-nowrap'>{value.time}</h3>
                            <Image
                                src={value?.icon}
                                alt={value?.condition}
                                width={50}
                                height={50}
                                className='w-16'
                            />
                            {weatherData?.days[weatherIndex] ? (
                                <p className='font-semibold'>{value.temperature}&deg;</p>
                            ) : (
                                <p className='font-semibold'>{value.temperature}</p>
                            )}
                        </div>
                        {index !== data.length - 1 && (
                            <span className='absolute right-0 h-full w-[2px] bg-gray-600 rounded'></span>
                        )}
                    </div>
                ))}
                <style jsx>{`
                   .custom-hour-forecast-scrollbar::-webkit-scrollbar{
                    height: 4px;
                    margin: 10px;
                }
                   .custom-hour-forecast-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #fff;
                    border-radius: 9999px;
                    cursor:pointer;
                }
                   
                   .custom-hour-forecast-scrollbar::-webkit-scrollbar-track {
                    background-color: #6b7280;
                    border-radius: 5px;
                }
                `}
                </style>
            </div>
        </div>
    )
}

export default HoursForecast
