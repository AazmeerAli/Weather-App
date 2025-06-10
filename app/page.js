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
    // <div className=" grid grid-cols-3 grid-rows-3 bg-slate-900 py-4 px-6 gap-4">
    //   <div className=" flex flex-col col-span-2 row-span-1">
    //     {/* <div className="h-full"> */}
    //     <Search />
    //     <CurrentDetails />
    //     {/* </div> */}
    //     {/* <WeatherPage/> */}
    //   </div>
    //   <div className=" col-span-2 row-span-1">
    //     <HoursForecast />
    //   </div>
    //   <div className=" col-span-1 col-start-3 col-end-4 row-span-2 row-start-1 row-end-3 ">
    //     <DaysForecast />

    //   </div>
    //   <div className=" col-span-3">
    //     <WeatherConditions />
    //   </div>
    // </div>
    <div className="w-full flex flex-col bg-slate-900 py-4 px-6 gap-4">
      <div className="flex gap-4">
        <div className="w-2/3 flex flex-col justify-between ">
          <div className="flex flex-col justify-center gap-4">
            <Search />
            <CurrentDetails />
          </div>
          <HoursForecast />
        </div>
        <div className="w-1/3">
          <DaysForecast />
        </div>
      </div>
      <div className="w-full ">
        <WeatherConditions />
      </div>
    </div>
  );
}
