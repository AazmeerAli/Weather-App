import { Icon } from '@iconify/react'
import React from 'react'

const HoursForecast = () => {

    const data = [
        {
            time: '12:00 PM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
        {
            time: '01:00 AM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
        {
            time: '02:00 AM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
        {
            time: '03:00 AM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
        {
            time: '04:00 AM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
        {
            time: '04:00 AM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
        {
            time: '04:00 AM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
        {
            time: '04:00 AM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
        {
            time: '04:00 AM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
        {
            time: '04:00 AM',
            icon: 'meteocons:partly-cloudy-day-fill',
            temperature: '30',
        },
    ]

    return (
        <div className=' w-full rounded-md bg-gray-800 flex flex-col  text-gray-400 p-5 gap-6'>
            <h2 className='font-bold text-lg uppercase'>Today Forecast</h2>
            <div className='custom-hour-forecast-scrollbar w-full flex overflow-x-scroll pb-6'>
                {data.map((value, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-center'
                    >
                        <div className='flex flex-col justify-center items-center px-4 py-2'>
                            <h3 className='font-semibold text-nowrap'>{value.time}</h3>
                            <Icon
                                icon={value.icon}
                                className='text-7xl'
                            />
                            <p className='font-semibold'>{value.temperature}&deg;</p>
                        </div>
                        {index !== data.length - 1 && (
                            <span className='h-full w-[2px] bg-gray-600 rounded'></span>
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
