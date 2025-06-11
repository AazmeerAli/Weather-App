export const getConditionIcon = (condition, isDay) => {
  condition = condition.toLowerCase();
console.log(condition)
  if (condition.includes('thunderstorm')) {
    return isDay ? 'meteocons:thunderstorms-day-overcast-fill' : 'meteocons:thunderstorms-night-overcast-fill';
  } else if (condition.includes('rain')) {
    return isDay ? 'meteocons:overcast-day-rain-fill' : 'meteocons:overcast-night-rain-fill';
  } else if (condition.includes('snow')) {
    return isDay ? 'meteocons:overcast-day-snow-fill' : 'meteocons:overcast-night-snow-fill';
  } else if (condition.includes('sleet') || condition.includes('freezing')) {
    return isDay ? 'meteocons:overcast-day-sleet-fill' : 'meteocons:overcast-night-sleet-fill';
  } else if (condition.includes('fog') || condition.includes('mist') || condition.includes('haze')) {
    return isDay ? 'meteocons:overcast-day-haze-fill' : 'meteocons:overcast-night-haze-fill';
  } else if (condition.includes('windy') || condition.includes('breezy')) {
    return 'meteocons:wind';
  } else if (condition.includes('cloudy') || condition.includes('overcast')) {
    return isDay ? 'meteocons:overcast-day-fill' : 'meteocons:overcast-night-fill';
  } else if (condition.includes('clear')) {
    return isDay ? 'meteocons:clear-day-fill' : 'meteocons:clear-night-fill';
  } else {
    return isDay ? 'meteocons:partly-cloudy-day-fill' : 'meteocons:partly-cloudy-night-fill';
  }
};
