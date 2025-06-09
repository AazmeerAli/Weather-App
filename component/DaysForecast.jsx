import { Icon } from '@iconify/react'
import React from 'react'

const DaysForecast = () => {

    const data = [
        {
            time: 'Today',
            icon: 'meteocons:partly-cloudy-day-fill',
            condition: 'clouds',
            minTemp: '20',
            maxTemp: '30',
        },
        {
            time: 'Wed',
            icon: 'meteocons:partly-cloudy-day-fill',
            condition: 'clouds',
            minTemp: '20',
            maxTemp: '30',
        },
        {
            time: 'Thu',
            icon: 'meteocons:partly-cloudy-day-fill',
            condition: 'clouds',
            minTemp: '20',
            maxTemp: '30',
        },
        {
            time: 'Fri',
            icon: 'meteocons:partly-cloudy-day-fill',
            condition: 'clouds',
            minTemp: '20',
            maxTemp: '30',
        },
        {
            time: 'Sat',
            icon: 'meteocons:partly-cloudy-day-fill',
            condition: 'clouds',
            minTemp: '20',
            maxTemp: '30',
        },
    ]


    return (
        <div className='max-h-full w-full rounded-md bg-gray-800 flex flex-col  text-gray-400 px-5 py-6 gap-6'>
            <h2 className='font-bold text-xl'>Today Forecast</h2>
            <div className='custom-day-forecast-scrollbar w-full flex flex-col overflow-y-scroll pr-6'>
                {data.map((value, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center justify-center'
                    >
                        <div className='flex justify-center items-center px-4 py-2'>
                            <h3 className='font-semibold text-nowrap'>{value.time}</h3>
                            <Icon
                                icon={value.icon}
                                className='text-7xl'
                            />
                            <p className='font-semibold'>
                                {value.maxTemp}&deg;
                                /{' '}
                                <span className='text-gray-500'>
                                {value.minTemp}&deg;
                                </span>
                            </p>
                        </div>
                        {index !== data.length - 1 && (
                            <span className='w-full h-[2px] bg-gray-500 rounded'></span>
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
