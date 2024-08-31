import React, { useState } from "react";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ isLoaded: false });
    const [city, setCity] = useState("");

    const search = (city) => {
        const params = new URLSearchParams({ cityName: city });
        fetch(`http://localhost:3030/weather?${params}`)
            .then((response) => response.json())
            .then((result) => {
                let dataResults = result.data;
                console.log(dataResults);
                setCity(city);
                setWeatherData({
                    isLoaded: true,
                    name: dataResults.name,
                    temperature: Math.round(dataResults.main.temp),
                    description: dataResults.weather[0].description,
                    humidity: dataResults.main.humidity,
                    icon: dataResults.weather[0].icon,
                    wind: Math.round(dataResults.wind.speed),
                    iconUrl: `https://openweathermap.org/img/wn/${dataResults.weather[0].icon}@2x.png`,
                    timezone: dataResults.timezone,
                });
            }
        );
    }

    const onChange = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        search(city);
    }

    return (
        <div className="Weather">
             <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter a city...' onChange={onChange} value={city} id="searchBar"/>
                <input type="submit" value="➜" id="submit" />
            </form>
            <p>
                {
                    weatherData.isLoaded ? (
                        <div>
                            <h2>{weatherData.name}</h2>
                            <h3>{weatherData.temperature}ºF</h3>
                            <img src={weatherData.iconUrl} alt={weatherData.description} />
                            <h4>{weatherData.description}</h4>
                            <p>Humidity: {weatherData.humidity}%</p>
                            <p>Wind: {weatherData.wind} mph</p>
                        </div>
                    ) : null
                }
            </p>
        </div>
    )
}