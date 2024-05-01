import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import Forecast from "./forecast";
import Daily from "./dailyForecast";
import Wright from "./Wright";
import { AppContext } from "./provider";

export default function Weather() {
    const [data, setData] = useState("");
    const [daily, setDaily] = useState();
    const [searching, setSearching] = useState(false);

    const { newSearch, weatherData } = useContext(AppContext);
    const lon = weatherData?.coord?.lon;
    const lat = weatherData?.coord?.lat;
  
    const handleChange = (e) => {
        setData(e.target.value);
      };
    
      const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          newSearch(data);
          setData("");
          setSearching(true);
        }
      };
    const fetchDailyData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8f3cca8952adec446b886f89471d989a&units=metric`
        );
        setDaily(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      if (lat && lon) {
        fetchDailyData();
      }
    }, [lat, lon, weatherData]); // Add weatherData to the dependency array

    const getWeatherDescription = () => {
      if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
        return weatherData.weather[0].description;
      } else {
        return "Loading...";
      }
    };
  
    return (
      <>
        <div className="putcenre">
          <div className="weather">
          
            <div className="weather-left">
           
              <div className="head" >
                 <h3>Right Now in</h3>
                <input
                  type="text"
                  value={data}
                  className="input-field"
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder={` ${!weatherData ? "Loading..." : weatherData.name ? weatherData.name : "Search new places"}`}


                />
                <h3 className="h"> ,it's {getWeatherDescription()}</h3>
                
              </div>
           
             
              {daily && <Forecast daily={daily} />}
              {daily && <Daily daily={daily} />}
            </div>
            <Wright weatherData={weatherData} />
          </div>
        </div>
      </>
    );
  }
  