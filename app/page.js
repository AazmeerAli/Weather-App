'use client'
import Image from "next/image";
import Search from "@/component/Search";
import CurrentDetails from "@/component/CurrentDetails";
import WeatherPage from "@/component/WeatherPage";
import HoursForecast from "@/component/HoursForecast";
import DaysForecast from "@/component/DaysForecast";
import WeatherConditions from "@/component/WeatherConditions";
import Head from "next/head";
import Footer from "@/component/Footer";

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
    <div className="w-full  bg-slate-900 py-4 px-4 md:px-6 ">
      <div className="w-full h-full max-w-[1600px] mx-auto flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-3/5 xl:w-2/3 flex flex-col justify-center">
            <div className="h-full flex flex-col justify-center gap-4">
              <Search />
              <CurrentDetails />
            </div>
            <HoursForecast />
          </div>
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <DaysForecast />
          </div>
        </div>
        <div className="w-full ">
          <WeatherConditions />
        </div>
        <Footer/>
      </div>
    </div>
  );
}
