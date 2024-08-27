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
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});