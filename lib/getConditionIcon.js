import Wind from '@/app/assets/svgs/wind.svg'
import Hurricane from '@/app/assets/svgs/hurricane.svg'

import Thunderstorm from '@/app/assets/svgs/thunderstorms-overcast.svg'
import ThunderstormDay from '@/app/assets/svgs/thunderstorms-day-overcast.svg'
import ThunderstormNight from '@/app/assets/svgs/thunderstorms-night-overcast.svg'

import Rain from '@/app/assets/svgs/overcast-rain.svg'
import RainDay from '@/app/assets/svgs/overcast-rain-day.svg'
import RainNight from '@/app/assets/svgs/overcast-rain-night.svg'

import Snow from '@/app/assets/svgs/overcast-snow.svg'
import SnowDay from '@/app/assets/svgs/overcast-snow-day.svg'
import SnowNight from '@/app/assets/svgs/overcast-snow-night.svg'

import Sleet from '@/app/assets/svgs/overcast-sleet.svg'
import SleetDay from '@/app/assets/svgs/overcast-sleet-day.svg'
import SleetNight from '@/app/assets/svgs/overcast-sleet-night.svg'

import Fog from '@/app/assets/svgs/overcast-fog.svg'
import FogDay from '@/app/assets/svgs/overcast-fog-day.svg'
import FogNight from '@/app/assets/svgs/overcast-fog-night.svg'

import Cloudy from '@/app/assets/svgs/overcast.svg'
import CloudyDay from '@/app/assets/svgs/overcast-day.svg'
import CloudyNight from '@/app/assets/svgs/overcast-night.svg'

import ClearDay from '@/app/assets/svgs/clear-day.svg'
import ClearNight from '@/app/assets/svgs/clear-night.svg'

import Drizzle from '@/app/assets/svgs/overcast-drizzle.svg'
import DrizzleDay from '@/app/assets/svgs/overcast-drizzle-day.svg'
import DrizzleNight from '@/app/assets/svgs/overcast-drizzle-night.svg'

import Hail from '@/app/assets/svgs/overcast-hail.svg'
import HailDay from '@/app/assets/svgs/overcast-hail-day.svg'
import HailNight from '@/app/assets/svgs/overcast-hail-night.svg'

import Smoke from '@/app/assets/svgs/overcast-smoke.svg'
import SmokeDay from '@/app/assets/svgs/overcast-smoke-day.svg'
import SmokeNight from '@/app/assets/svgs/overcast-smoke-night.svg'


export const getConditionIcon = (condition, isDay) => {
  condition = condition.toLowerCase();

  const weatherMap = [
    {
      keywords: ['hurricane', 'cyclone', 'tornado', 'typhoon'],
      result: () => Hurricane,
    },
    {
      keywords: ['hail', 'hailstorm'],
      result: () => isDay === true ? HailDay : isDay === false ? HailNight : Hail,
    },
    {
      keywords: ['thunderstorm', 'lightning', 'storm'],
      result: () => isDay === true ? ThunderstormDay : isDay === false ? ThunderstormNight : Thunderstorm,
    },
    {
      keywords: ['heavy rain', 'rain showers'],
      result: () => isDay === true ? RainDay : isDay === false ? RainNight : Rain,
    },
    {
      keywords: ['drizzle', 'light rain', 'sprinkle', 'light showers'],
      result: () => isDay === true ? DrizzleDay : isDay === false ? DrizzleNight : Drizzle,
    },
    {
      keywords: ['rain', 'showers'],
      result: () => isDay === true ? RainDay : isDay === false ? RainNight : Rain,
    },
    {
      keywords: ['snow'],
      result: () => isDay === true ? SnowDay : isDay === false ? SnowNight : Snow,
    },
    {
      keywords: ['sleet', 'freezing', 'freezing rain', 'ice pellets', 'wintry mix'],
      result: () => isDay === true ? SleetDay : isDay === false ? SleetNight : Sleet,
    },
    {
      keywords: ['fog', 'mist', 'haze'],
      result: () => isDay === true ? FogDay : isDay === false ? FogNight : Fog,
    },
    {
      keywords: ['smoke', 'dust', 'sand', 'ash'],
      result: () => isDay === true ? SmokeDay : isDay === false ? SmokeNight : Smoke,
    },
    {
      keywords: ['windy', 'breezy'],
      result: () => Wind,
    },
    {
      keywords: ['cloudy', 'overcast'],
      result: () => isDay === true ? CloudyDay : isDay === false ? CloudyNight : Cloudy,
    },
    {
      keywords: ['clear', 'sunny'],
      result: () => isDay === true ? ClearDay : isDay === false ? ClearNight : ClearDay, // fallback to ClearDay
    },
  ];


  for (const entry of weatherMap) {
    if (entry.keywords.some(keyword => condition.includes(keyword))) {
      return entry.result();
    }
  }

  // Default fallback
  return isDay === true ? CloudyDay : isDay === false ? CloudyNight : Cloudy;
};


// export const getConditionIcon = (condition, isDay) => {
//   condition = condition.toLowerCase();

//   if (condition.includes('thunderstorm')) {
//     return isDay ? 'meteocons:thunderstorms-day-overcast-fill' : 'meteocons:thunderstorms-night-overcast-fill';
//   } else if (condition.includes('rain')) {
//     return isDay ? 'meteocons:overcast-day-rain-fill' : 'meteocons:overcast-night-rain-fill';
//   } else if (condition.includes('snow')) {
//     return isDay ? 'meteocons:overcast-day-snow-fill' : 'meteocons:overcast-night-snow-fill';
//   } else if (condition.includes('sleet') || condition.includes('freezing')) {
//     return isDay ? 'meteocons:overcast-day-sleet-fill' : 'meteocons:overcast-night-sleet-fill';
//   } else if (condition.includes('fog') || condition.includes('mist') || condition.includes('haze')) {
//     return isDay ? 'meteocons:overcast-day-haze-fill' : 'meteocons:overcast-night-haze-fill';
//   } else if (condition.includes('windy') || condition.includes('breezy')) {
//     return 'meteocons:wind';
//   } else if (condition.includes('cloudy') || condition.includes('overcast')) {
//     return isDay ? 'meteocons:overcast-day-fill' : 'meteocons:overcast-night-fill';
//   } else if (condition.includes('clear')) {
//     return isDay ? 'meteocons:clear-day-fill' : 'meteocons:clear-night-fill';
//   } else {
//     return isDay ? 'meteocons:partly-cloudy-day-fill' : 'meteocons:partly-cloudy-night-fill';
//   }
// };
