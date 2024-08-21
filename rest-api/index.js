import express from 'express';
import cors from "cors";
import manga from "./manga.js";


const app = express();
const PORT = 5000;

// configurate cors middleware... why? idk
app.use(cors());

// create route for CREATE (get)
app.get('/', (req, res) => {
    res.json("Welcome to my REST API");
    console.log("SUCCESS!");
});

app.get('/manga', (req, res) => {
    res.json(manga);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});