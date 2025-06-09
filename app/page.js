'use client'
import Image from "next/image";
import Search from "@/component/Search";
import CurrentDetails from "@/component/CurrentDetails";
import WeatherPage from "@/component/WeatherPage";
import HoursForecast from "@/component/HoursForecast";
import DaysForecast from "@/component/DaysForecast";
import WeatherConditions from "@/component/WeatherConditions";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-3 grid-rows-2 bg-slate-900 py-4 px-6 gap-4">
      <div className="h-full flex flex-col items-stretch col-span-2 row-span-1">
        {/* <div className="h-full"> */}
        <Search />
        <CurrentDetails />
        {/* </div> */}
        {/* <WeatherPage/> */}
      </div>
      <div className="col-span-2 row-span-1">
        <HoursForecast />
      </div>
      <div className="h-full col-span-1 col-start-3 col-end-4 row-span-1 row-start-1 row-end-2 ">
        <DaysForecast />
        
        {/* <WeatherConditions /> */}
      </div>
    </div>
  );
}
