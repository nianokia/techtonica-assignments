import express from 'express';
import cors from "cors";
import manga from "./manga.js";


const app = express();
const PORT = 5000;

// configurate cors middleware... why? idk
app.use(cors());

// create route for CREATE (get)
app.get('/', (req, res) => {
    res.json(manga);
    console.log("SUCCESS!");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});