import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3030;

// have express app use middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/weather', async (req, res) => {
  const city = req.query.cityName;
  const apiKey = process.env.APIKEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
    }
  )
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
});