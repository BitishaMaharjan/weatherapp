import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [searchData, newSearch] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async (latitude, longitude) => {
            const apiKey = 'c7520d047b9718d36704366b19b1eea8'; // Replace 'YOUR_API_KEY' with your actual API key
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            try {
                const response = await axios.get(url);
                const data = response.data;
                setWeatherData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        const getLocationAndFetchWeather = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        fetchWeatherData(latitude, longitude);
                    },
                    (error) => {
                        setError(error.message);
                        setLoading(false);
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
                setLoading(false);
            }
        };

        getLocationAndFetchWeather();
    }, []);

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=8f3cca8952adec446b886f89471d989a&units=metric`
    async function searchDataFun(){
        try{
       const response= await axios.get(url)
       setWeatherData(response.data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        if(searchData){
            searchDataFun()
        }
    },[searchData])

    
    return (
        <AppContext.Provider value={{ newSearch,url, weatherData, error, loading,  }}>
            {children}
        </AppContext.Provider>
    );
}
