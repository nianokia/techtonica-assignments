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

// create the get request for sightings in the endpoint '/api/sightings'
app.get('/api/sightings', async (req, res) => {
    try {
        const { rows: sightings } = await db.query(
            `SELECT sightings.sighting_id, sightings.individual, individuals.species, sightings.date_time, sightings.location, sightings.health, species.status_code FROM sightings 
            INNER JOIN individuals ON individuals.nickname = sightings.individual 
            INNER JOIN species ON individuals.species = species.common_name`
        );
        res.send(sightings);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the POST request
app.post('/api/create', async (req, res) => {
    try {
        const newSighting = {
            individual: req.body.individual,
            date_time: req.body.date_time,
            location: req.body.location,
            health: req.body.health,
            email: req.body.email,
            created_at: req.body.created_at,
            species: req.body.species,
            scientific_name: req.body.scientific_name,
            wild_population: req.body.wild_population,
            status_code: req.body.status_code
        };

        const searchResult = await db.query("SELECT * FROM individuals WHERE nickname = $1", [newSighting.individual]);
        if (searchResult.rowCount === 0) {
            console.log("hello from search result");
            const individualResult = await db.query('INSERT INTO individuals(nickname, species, created_at) VALUES($1, $2, $3) RETURNING *', [newSighting.individual, newSighting.species, newSighting.created_at]);
            console.log("Individual Result: ", individualResult.rows[0]);
        }

        const speciesResult = await db.query("SELECT * FROM species WHERE species.common_name = $1", [newSighting.species]);
        console.log("Species Result (empty): ", speciesResult);
        if (speciesResult.rowCount === 0) {
            console.log("hello from species result");
            const newSpecies = await db.query('INSERT INTO species(common_name, scientific_name, wild_population, status_code, created_at) VALUES($1, $2, $3, $4, $5) RETURNING *', [newSighting.species, newSighting.scientific_name, newSighting.wild_population, newSighting.status_code, newSighting.created_at]);
            console.log("Species Result: ", newSpecies.rows[0]);
        }

        const result = await db.query(
            'INSERT INTO sightings(individual, date_time, location, health, email, created_at) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
            [newSighting.individual, newSighting.date_time, newSighting.location, newSighting.health, newSighting.email, newSighting.created_at]
        );
        console.log("Sighting Results: ", result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// delete request for sightings
app.delete('/api/sightings/:sighting_id', async (req, res) => {
    try {
        const sighting_id = req.params.sighting_id;
        await db.query('DELETE FROM sightings WHERE sighting_id=$1', [sighting_id]);
        console.log("From the delete request-url", sighting_id);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

//A put request - Update a sighting 
app.put('/api/sightings/:individual_id', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the sighting to be updated
    const individual_id = req.params.individual_id;
    const updatedSighting = { 
        individual: req.body.individual,
        date_time: req.body.date_time,
        location: req.body.location,
        health: req.body.health,
        email: req.body.email,
        created_at: req.body.created_at,
        species: req.body.species,
        scientific_name: req.body.scientific_name,
        wild_population: req.body.wild_population,
        status_code: req.body.status_code
    };
    
    console.log("In the server from the url - the individual id", individual_id);
    console.log("In the server, from the react - the sighting to be edited", updatedSighting);

        const searchResult = await db.query("SELECT * FROM individuals WHERE nickname = $1", [updatedSighting.individual]);
        if (searchResult.rowCount === 0) {
            console.log("hello from updated search result");
            const updatedIndividual = await db.query('INSERT INTO individuals(nickname, species, created_at) VALUES($1, $2, $3) RETURNING *', [updatedSighting.individual, updatedSighting.species, updatedSighting.created_at]);
            console.log("Updated Individual : ", updatedIndividual.rows[0]);
        }

        const speciesResult = await db.query("SELECT * FROM species WHERE species.common_name = $1", [updatedSighting.species]);
        console.log("Species Result (empty): ", speciesResult);
        if (speciesResult.rowCount === 0) {
            console.log("hello from updated species result");
            const updatedSpecies = await db.query('INSERT INTO species(common_name, scientific_name, wild_population, status_code, created_at) VALUES($1, $2, $3, $4, $5) RETURNING *', [updatedSighting.species, updatedSighting.scientific_name, updatedSighting.wild_population, updatedSighting.status_code, updatedSighting.created_at]);
            console.log("Updated Species : ", updatedSpecies.rows[0]);
        }

    const query = `UPDATE sightings SET individual=$1, date_time=$2, location=$3, health=$4, email=$5, created_at=$6 WHERE sighting_id=${sighting_id} RETURNING *`;
    const values = [updatedSighting.individual, updatedSighting.date_time, updatedSighting.location, updatedSighting.health, updatedSighting.email, updatedSighting.created_at];
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