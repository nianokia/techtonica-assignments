import express from 'express';
import cors from 'cors';

const app = express();
const port = 4070;

// have the express app use middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/trivia', async (req, res) => {
    const trivia = req.query;

    const url = `https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple`;

    await fetch(url)
    .then((res) => res.json())
    .then((data) => {
        res.send({ data });
    })
    .catch((err) => {
        console.log(err);
    })
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port} (at Port: ${port})`)
})