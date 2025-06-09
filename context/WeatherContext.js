'use client'
import { createContext, useState, useEffect } from 'react';

const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const WeatherContext = createContext()

export const WeatherProvider = (props) => {

    const [city, setCity] = useState('New York')
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getWeatherData = async () => {
        const getFormattedDate = (date) => date.toISOString().split('T')[0];
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - 5);
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 5);

        const startDate = getFormattedDate(pastDate);
        const endDate = getFormattedDate(futureDate);

        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=hours&key=${apiKey}&include=days`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setWeatherData(data);
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