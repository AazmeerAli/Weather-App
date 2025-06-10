export const getConditionIcon = (condition, isDay) => {
    if (condition.includes('Thunderstorm')) return isDay ? 'meteocons:thunderstorms-day-overcast-fill' : 'meteocons:thunderstorms-night-overcast-fill';
    if (condition.includes('Rain')) return isDay ? 'meteocons:overcast-day-rain-fill' : 'meteocons:overcast-night-rain-fill';
    if (condition.includes('Snow')) return isDay ? 'meteocons:overcast-day-snow-fill' : 'meteocons:overcast-night-snow-fill';
    if (condition.includes('Sleet') || condition.includes('Freezing')) return isDay ? 'meteocons:overcast-day-sleet-fill' : 'meteocons:overcast-night-sleet-fill';
    if (condition.includes('Fog') || condition.includes('Mist') || condition.includes('Haze')) return isDay ? 'meteocons:overcast-day-haze-fill' : 'meteocons:overcast-night-haze-fill';
    if (condition.includes('Cloudy') || condition.includes('Overcast')) return isDay ? 'meteocons:overcast-day-fill' : 'meteocons:overcast-night-fill';
    if (condition.includes('Clear')) return isDay ? 'meteocons:clear-day-fill' : 'meteocons:clear-night-fill';
    if (condition.includes('Windy') || condition.includes('Breezy')) return 'meteocons:wind';
    return isDay ? 'meteocons:cloudy-day-fill' : 'meteocons:cloudy-night-fill';
};