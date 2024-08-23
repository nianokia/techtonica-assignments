/*
Step 3: Create Your Express Routes
Set up routes for each of the following 5 Eventbrite API endpoints: users, events, ticket classes, orders, venues, and organizers.

Step 4: Start your app using node app.js

Step 5 [BONUS]: Connect to a Frontend
To connect your Express application to a frontend, you can use any frontend framework or library (e.g., React, Vue, Angular) to make HTTP requests to your Express routes.

If your frontend is in React, add a proxy value to your package.json file pointing to your Express server's URL. This tells the development server to proxy any unknown requests to your Express server.
*/


// updated the way to import packages (use import instead of require)
import express from "express";
import fetch from 'node-fetch';

const app = express();
const port = 3000;

// Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token
const oauthToken = 'UUH34GIN6L5R4HFU4PTL';

// Example route for fetching user details
app.get('/user-details', async (res, req) => {
    console.log("Fetching user details");

    const data = await fetch(`https://www.eventbriteapi.com/v3/users/me/?token=${oauthToken}`);
    const userDetails = await data.json();
    
    res.res.send(`The user's name is ${userDetails.name}.`);
});

const event_id = 895344959877;

// Example route for fetching event details
app.get('/event-details', async (res, req) => {
    console.log("Fetching event details");

    const data = await fetch(`https://www.eventbriteapi.com/v3/events/${event_id}/?token=${oauthToken}`);
    const eventDetails = await data.json();

    res.res.send(`Event Name: ${eventDetails.name.text} -- Description: ${eventDetails.summary}`);
});


// Example route for fetching ticket class details
app.get('/event-ticket-classes', async (res, req) => {
    console.log("Fetching event ticket class details.");

    const data = await fetch(`https://www.eventbriteapi.com/v3/events/${event_id}/ticket_classes/?token=${oauthToken}`);
    const ticketClasses = await data.json();

    res.res.send(`Ticket Classes: ${ticketClasses.ticket_classes[0].name}`);
});


// Example route for fetching venue details
app.get('/event-venue', async (res, req) => {
    console.log("Fetching event details");

    const data = await fetch(`https://www.eventbriteapi.com/v3/events/895344959877/?token=${oauthToken}`);
    const venue = await data.json();

    res.res.send(`Venue ID: ${venue.venue_id}`);
});


// Example route for fetching organizer details
app.get('/organizer-details', async (res, req) => {
    console.log("Fetching organizer details");

    const data = await fetch(`https://www.eventbriteapi.com/v3/events/${event_id}/?token=${oauthToken}`);
    const organizer = await data.json();

    res.res.send(`Organizer ID: ${organizer.organizer_id}`);
});


app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
