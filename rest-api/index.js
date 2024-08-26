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
// eventually move sensitive information into .env folder

// make express use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// let urlencodedParser = bodyParser.urlencoded({ extended: false });


// ----------- READ route (get) : fetch data from collection -----------

// Homepage
app.get('/', (req, res) => {
    res.send("Welcome to my REST API! ---------------- Navigate to /api/manga to see the data for my favorite manga.");
    console.log("SUCCESS! Discover Nia's favorite manga series!");
});

// Manga List
app.get('/api/manga', (req, res) => {
    console.log("Detailed List of Nia's favorite manga");

    // get data from the database
    pool.query('SELECT * FROM manga', (err, results) => {
        if (err) {
            console.error(err);
        }

        // display all rows from database on the front end
        res.json(results.rows);
    });

    // After further research, the release isn't necessary in this project since I'm using pool.query and it automatically connects to the pool and then returns it back.
    // pool.release;
});


// ----------- CREATE route (post) : submit new data to collection -----------

app.post('/add-manga', async (req, res) => {
    console.log(req);

    // contain SQL command in a variable, interpolate user input
    const queryString = `INSERT INTO manga ("title", "author", "genre", "volumes", "yearpublished") VALUES (\'${req.body.title}\', \'${req.body.author}\', \'${req.body.genre}\', ${req.body.volumes}, ${req.body.yearPublished})`;

    pool.query(queryString, (err, results) => {
        if (err) {
            console.error(err);
        }
        res.json(results.rows[0]);
    });

    // pool.release;    
    res.send("Manga added");
});


// ----------- UPDATE route (put) : update in collection -----------

// add id to URL path to specify which row to update
app.put('/update-manga/:id', async (req, res) => {
    console.log("Update manga");

    // store the id parameter from route
    const { id } = req.params;

    // cleaner way to define req.body
    const { title, author, genre, volumes, yearPublished } = req.body;

    const queryString = `UPDATE manga SET title = $1, author = $2, genre = $3, volumes = $4, yearPublished = $5 WHERE id = ${id} RETURNING *`;

    try {
        await pool.query(queryString, [title, author, genre, volumes, yearPublished]);

        res.send(`The manga with id = ${id} has been updated`);
        console.log("Manga updated");
        // pool.release;
    } catch (err) {
        console.error(err);
    }
});


// ----------- DELETE route (delete) : delete in collection -----------

app.delete('/delete-manga/:id', async (req, res) => {
    console.log("Delete manga");
    const { id } = req.params;

    const queryString = `DELETE FROM manga WHERE id = ${id}`;

    pool.query(queryString, (err, results) => {
        if (err) {
            console.error(err);
        }
        
        res.send(`The manga with id = ${id} was deleted`);
        console.log("Manga deleted");
    });

    // pool.release;
});


// ----------- Listen to port -----------

let server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});