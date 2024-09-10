const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// create the get request for events in the endpoint '/api/events'
app.get('/api/events', async (req, res) => {
    try {
        const { rows: events } = await db.query('SELECT * FROM events');
        res.send(events);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the POST request
app.post('/api/events', async (req, res) => {
    try {
        const newEvent = {
            name: req.body.name,
            date: req.body.date,
            category: req.body.category,
            isFavorite: req.body.isFavorite
        };
        //console.log([newEvent.name, newEvent.date, newEvent.category, newEvent.isFavorite]);
        const result = await db.query(
            'INSERT INTO events(name, date, category, isFavorite) VALUES($1, $2, $3, $4) RETURNING *',
            [newEvent.name, newEvent.date, newEvent.category, newEvent.isFavorite],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// delete request for events
app.delete('/api/events/:eventID', async (req, res) => {
    try {
        const eventID = req.params.eventID;
        await db.query('DELETE FROM events WHERE id=$1', [eventID]);
        console.log("From the delete request-url", eventID);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

//A put request - Update an event 
app.put('/api/events/:eventID', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the event to be updated
    const eventID = req.params.eventID
    const updatedEvent = { id: req.body.id, name: req.body.name, date: req.body.date, category: req.body.category, isFavorite: req.body.isFavorite}
    console.log("In the server from the url - the event id", eventID);
    console.log("In the server, from the react - the event to be edited", updatedEvent);
    // UPDATE events SET date = "something" WHERE id="16";
    const query = `UPDATE events SET name=$1, date=$2, category=$3, isFavorite=$4 WHERE id=${eventID} RETURNING *`;
    const values = [updatedEvent.name, updatedEvent.date, updatedEvent.category, updatedEvent.isFavorite];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});