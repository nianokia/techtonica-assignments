import React, { useState } from "react";

export default function Weather() {
    const [weatherData, setWeatherData] = useState("");
    const [city, setCity] = useState("");

    const search = (city) => {
        const params = new URLSearchParams({ cityName: city });
        fetch(`http://localhost:3030/weather?${params}`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setCity(city);
                setWeatherData(weatherData);
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
            WeatherData : {weatherData}
        </>
    )
}