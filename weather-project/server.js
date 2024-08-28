import express from 'express';
const app = express();
const port = 3000;
import 'dotenv/config';

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get(('/weather', (req, res) => {
    const city = req.query.cityNmae;
    const apiKey = process.env.APIKEY;
    const params = new URLSearchParams({
        q: req.query.cityName,
        appid: process.env.APIKEY,
        units: "imperial"
    });
    const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.send({ data });
        })
        .catch((err) => {
            console.log(err);
        })
}));

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
});