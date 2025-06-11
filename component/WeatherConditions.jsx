'use client'
import { WeatherContext } from '@/context/WeatherContext'
import { Icon } from '@iconify/react'
import React, { useContext } from 'react'

const Conditions = ({ value }) => (
  <div
    className='flex items-center gap-4'
  >
    <Icon
      icon={value.icon}
      className='w-10 h-10 text-white'
    />
    <div className='text-left'>
      <p className='font-semibold '>{value.name}</p>
      <p className='font-semibold text-white'>{value.value} {value.unit}</p>
    </div>
  </div>
)

const WeatherConditions = () => {

  const { weatherData, setWeatherData, isDay, setIsDay, weatherIndex, setWeatherIndex } = useContext(WeatherContext)
  const currentDay = weatherData?.days[weatherIndex]

  const data = [
    {
      name: 'Feels Like',
      value: currentDay?.feelslike || '0',
      unit: '°',
      icon: 'circum:temp-high',
    },
    {
      name: 'Humidity Level',
      value: currentDay?.humidity || '0',
      unit: '%',
      icon: 'ion:water',
    },
    {
      name: 'Clouds',
      value: currentDay?.cloudcover || '0',
      unit: '%',
      icon: 'bi:clouds-fill',
    },
    {
      name: 'Visibility',
      value: currentDay?.visibility || '0',
      unit: 'km',
      icon: 'material-symbols:visibility',
    },
    {
      name: 'Wind Speed',
      value: currentDay?.windspeed || '0',
      unit: 'km/h',
      icon: 'solar:wind-bold',
    },
    {
      name: 'Pressure',
      value: currentDay?.pressure || '0',
      unit: 'hPa',
      icon: 'lets-icons:pressure',
    },
  ]

  return (
    <div className='w-full h-full bg-gray-800 rounded-md text-gray-400 p-5 pb-8 flex flex-col gap-4'>
      <h2 className='font-bold text-lg uppercase'>
        Weather Conditions
      </h2>
      <div className='w-[70%] flex justify-center mx-auto'>
        <div className='w-1/3 flex items-center justify-center'>
          <div className='flex flex-col gap-6'>
            {
              data.slice(0, 2).map((value, index) => (
                <Conditions key={index} value={value} index={index} />
              ))
            }
          </div>
        </div>

        <div className='w-[2px] rounded-md bg-gray-600'></div>

        <div className='w-1/3 flex items-center justify-center'>
          <div className='flex flex-col gap-6'>
            {
              data.slice(2, 4).map((value, index) => (
                <Conditions key={index} value={value} index={index} />
              ))
            }
          </div>
        </div>

        <div className='w-[2px] rounded-md bg-gray-600'></div>

        <div className='w-1/3 flex items-center justify-center'>
          <div className='flex flex-col gap-6'>
            {
              data.slice(4, 6).map((value, index) => (
                <Conditions key={index} value={value} index={index} />
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default WeatherConditions
