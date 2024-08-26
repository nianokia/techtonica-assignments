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
    console.log(req);
    const queryString = `INSERT INTO manga ("title", "author", "genre", "volumes", "yearpublished") VALUES (\'${req.body.title}\', \'${req.body.author}\', \'${req.body.genre}\', ${req.body.volumes}, ${req.body.yearPublished})`;

    // get data from the database
    pool.query(queryString, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Adding a manga to the database.");
        res.json(results.rows[0]);
    });

    pool.release;
    
    res.send({message: "New manga added"});
});


// create UPDATE route (put) : update in collection
app.put('/update-manga/:id', async (req, res) => {
    console.log("Update manga");
    const { id } = req.params;
    const { title, author, genre, volumes, yearPublished } = req.body;

    const queryString = `UPDATE manga SET title = $1, author = $2, genre = $3, volumes = $4, yearPublished = $5 WHERE id = ${id} RETURNING *`;

    try {
        const updatedManga = await pool.query(queryString, [title, author, genre, volumes, yearPublished]);

        // var data;
        //  // get data from the database
        // pool.query(queryString, async (err, results) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     console.log("We've updated the database.");
        //     // res.json(results.rows);
        //     data = await results.rows;
        // }, [title, author, genre, volumes, yearPublished]);

        res.send(`The manga with id = ${id} has been updated`);
        pool.release;
    } catch (err) {
        res.send("Error: ", err);
    }
    
});


// create DELETE route (delete) : delete in collection
app.delete('/delete-manga/:id', async (req, res) => {
    console.log("Delete manga");

     // get data from the database
    pool.query('DELETE FROM manga WHERE id=15', (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Deleting a manga from the database.");
        res.json(results.rows);
    });

    pool.release;
});

// listen to port
let server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

// ALL THATS LEFT - make sure all crud operations work