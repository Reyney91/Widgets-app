import { useEffect, useState } from "react";

import { weatherService } from "../api/weather.service";

interface WeatherInterface {
  cloud: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}

const citiesMap = [
  "Ekaterinburg",
  "London",
  "Paris",
  "Moscow",
  "Rome",
  "Tokyo",
  "Dubai",
  "Bangkok",
];

export const WeatherWidget = () => {
  const [selectedCity, setSelectedCity] = useState("Ekaterinburg");
  const [weather, setWeather] = useState<WeatherInterface>();

  useEffect(() => {
    weatherService.getByCity(selectedCity).then((res) => {
      setWeather(res.current);
    });
  }, [selectedCity]);

  return (
    <div className="weather-widget">
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="select"
      >
        {citiesMap.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <div>
        <div className="weather-widget__info">
          <div>
            <img
              className="weather-widget__info__image"
              src={`https:${weather?.condition.icon}`}
              alt="Иконка погоды"
            />
          </div>
          <div className="weather-widget__info__text">
            <p>
              <span>{weather?.temp_c} °C</span>, {weather?.condition.text}
            </p>
            <p>Чувствуется как: {weather?.feelslike_c} °C</p>
            <p>{weather?.cloud}% облачности</p>
          </div>
        </div>
      </div>
    </div>
  );
};
