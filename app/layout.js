import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';
import WeatherProvider from "@/context/WeatherContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
  variable: '--font-poppins',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Weather App - Aazmeer Ali",
  description: "Stay prepared with accurate, real-time weather updates. Get forecasts, temperatures, and conditions for your location — all in a clean, fast, and responsive weather app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <WeatherProvider>
        {children}
        </WeatherProvider>
      </body>
    </html>
  );
}
