# 🌦️ Next.js Weather App

A modern weather application built with **Next.js**, powered by the **Visual Crossing Weather API**.  
It provides accurate, detailed forecasts for the current day and the next 4 days — with rich weather insights and global location search.

---

## 🔍 Features

- 📍 **Default Weather**: Shows New York’s weather on initial load.
- 🔎 **Search Functionality**: Search any location (e.g. “Russia”) and view location name in **local language** (e.g. Russian).
- 📅 **5-Day Forecast**: Displays weather cards for:
  - Current day
  - Next 4 days
- 👆 **Day Selection**: Click on any of the 5 days to see **detailed weather data**, including:
  - 🌡️ Temperature
  - 💧 Humidity
  - 🌬️ Wind Speed
  - 🌫️ Visibility
  - 🌥️ Cloud Coverage
  - 🌡️ Feels Like Temperature
  - 🧭 Pressure
- 🕒 **Hourly Forecast**: For selected day, view **24-hour forecast** (every 3 hours):
  - 12 AM, 3 AM, 6 AM, 9 AM, 12 PM, 3 PM, 6 PM, 9 PM

---

## 🔗 API Used

- [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: JavaScript
- **API**: RESTful (Visual Crossing)
- **Styling**: Tailwind CSS

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/AazmeerAli/Weather-App.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add your API Key

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_visual_crossing_api_key
```

### 4. Run the App
```bash
npm run dev
```
