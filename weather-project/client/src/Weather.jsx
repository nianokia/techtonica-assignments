import React, { useState } from "react";

export default function Weather() {
    const [weatherData, setWeatherData] = useState("");
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
                    name: dataResults.name,
                    temperature: dataResults.main.temp,
                    description: dataResults.weather[0].description,
                    humidity: dataResults.main.humidity,
                    wind: dataResults.wind.speed,
                    icon: dataResults.weather[0].icon,
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
        <>
            <h2>Hello</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter a city...' onChange={onChange} value={city}/>
                <input type="submit" value="Submit" />
            </form>
            <p>
                WeatherData : {weatherData.name}
            </p>
        </>
    )
}