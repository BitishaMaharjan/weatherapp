import React, { useContext, useState, useEffect } from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { AppContext } from "./provider";


export default function Wright() {
  const date = new Date();
  const [weather, setWeather] = useState(null);
  const { weatherData } = useContext(AppContext);
  
  useEffect(() => {
    setWeather(weatherData);
  }, [weatherData]);

  if (!weather) {
    return <div>No weather data available.</div>;
  }

  const temperature = weather?.main?.temp;
  const feelsLike = weather?.main?.feels_like;
  const humidity = weather?.main?.humidity;
  const windSpeed = weather?.wind?.speed;
  const tempMax = weather?.main?.temp_max;
  const tempMin = weather?.main?.temp_min;
  const name = weather?.name;
  const sunriseTime = new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunsetTime = new Date(weather?.sys?.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <>
    
    
    <div className="main-div">
      <div className="weather-right">
        <div className="today">
          <TiWeatherPartlySunny className="wlogo farmer-motion" />
          <h1 className="h11">Today</h1>
          <h1 className="dare">{date.toLocaleDateString()}</h1>
          <h1 className="temp">{temperature}°C</h1>
        </div>
        <div className="main">
          <h1 className="placeNAME">{name}</h1>
          <div className="tempdet">
            <div className="boxL">
              <div className="boxwa">
                <FaTemperatureHigh className="tI" />
                <h1>
                  Real feel:
                  <span>
                    <b>{feelsLike}</b>
                  </span>
                </h1>
              </div>
              <div className="boxwa">
                <WiHumidity className="tI" />
                <h1>
                  Humidity:
                  <span>
                    <b>{humidity}%</b>
                  </span>
                </h1>
              </div>
              <div className="boxwa">
                <FiWind className="tI" />
                <h1>
                  Wind:{" "}
                  <span>
                    <b>{windSpeed}km/h</b>
                  </span>
                </h1>
              </div>
            </div>
            <div className="boxr">
              <div className="boxwa">
                <BsFillSunriseFill className="tI" />
                <h1>
                  Rise:{" "}
                  <span>
                    <b>{sunriseTime}</b>
                  </span>
                </h1>
              </div>
              <div className="boxwa">
                <BsFillSunsetFill className="tI" />
                <h1>
                  Set :
                  <span>
                    <b>{sunsetTime}</b>
                  </span>
                </h1>
              </div>
              <div className="boxwa">
                <AiOutlineArrowUp className="tI" />
                <h1>
                  High:{" "}
                  <span>
                    <b>{tempMax}°C</b>
                  </span>
                </h1>
              </div>
              <div className="boxwa">
                <AiOutlineArrowDown className="tI" />
                <h1>
                  Low:{" "}
                  <span>
                    <b>{tempMin}°C</b>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
