import express from 'express';
import cors from "cors";
// import manga from "./manga.js";

import pkg from "pg";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// configurate cors middleware... why? idk
app.use(cors());

// set up database connection
const { Pool } = pkg;

const pool = new Pool({
    user: 'tpl622_2',
    host: 'localhost',
    database: 'restapiproject',
    password: 'postgres',
    port: 5432,
})


// make express use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let urlencodedParser = bodyParser.urlencoded({ extended: false });


// create route for READ (get) : fetch data from collection
app.get('/', (req, res) => {
    // res.send displays on front end or the html
    res.send("Welcome to my REST API! ---------------- Navigate to /api/manga to see the data for my favorite manga.");
    console.log("SUCCESS!");
});

app.get('/api/manga', (req, res) => {
    console.log("Here is the list of manga");

    // res.json shows manga data in json format on frontend
    // res.json(manga);

    // get data from the database
    pool.query('SELECT * FROM manga', (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("We're connected to the database.");
        res.json(results.rows);
    });

    pool.release;
});


// create CREATE route (post) : submit new data to collection
app.post('/add-manga', async (req, res) => {

    const newManga = {
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        volumes: req.body.volumes,
        yearPublished: req.body.yearPublished
    };

    console.log(newManga);
    
    res.send({message: "New manga added"});
});


// create UPDATE route (put) : update in collection


// create DELETE route (delete) : delete in collection


// listen to port
let server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

// ALL THATS LEFT - make sure all crud operations work