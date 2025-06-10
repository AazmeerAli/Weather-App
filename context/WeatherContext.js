'use client'
import { isDaytime } from '@/lib/isDaytime';
import { createContext, useState, useEffect } from 'react';

const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const WeatherContext = createContext()

export const WeatherProvider = (props) => {

    const [city, setCity] = useState('Karachi')
    const [weatherData, setWeatherData] = useState(null)
    const [currentLocalTime, setCurrentLocalTime] = useState('')
    const [isDay, setIsDay] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getWeatherData = async () => {

        const getFormattedDate = (date) => date.toISOString().split('T')[0];

        const today = new Date();
        const startDate = getFormattedDate(today);
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + 5);
        const endDate = getFormattedDate(futureDate);


        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=hours&key=${apiKey}&include=days`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setWeatherData(data);
            const localTime = new Intl.DateTimeFormat('en-US', {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZone: data?.timezone,
            }).format(new Date());
            const currentTime = localTime.split(' ')[0]
            setCurrentLocalTime(localTime)
            const result = isDaytime(data?.days[0]?.sunrise, data?.days[0]?.sunset, currentTime);
            setIsDay(result);
        }
        catch (error) {
            setError(error.message)
        }
    };


    useEffect(() => {
        // getWeatherData()
    }, [city])


    const contextValues = {
        city,
        setCity,
        weatherData,
        setWeatherData,
        currentLocalTime,
        setCurrentLocalTime,
        isDay,
        setIsDay,
        loading,
        setLoading,
        error,
        setError,
    }

    return (
        <WeatherContext.Provider value={contextValues}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;