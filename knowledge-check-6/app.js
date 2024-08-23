// updated the way to import packages (use import instead of require)
import express from "express";
import fetch from 'node-fetch';

const app = express();
const port = 3000;

// Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token
const oauthToken = 'UUH34GIN6L5R4HFU4PTL';

// Example route for fetching user details



// Example route for fetching event details



// Example route for fetching ticket class details



// Example route for fetching order details



// Example route for fetching venue details



// Example route for fetching organizer details



app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});


/*
Step 3: Create Your Express Routes
Set up routes for each of the following 5 Eventbrite API endpoints: users, events, ticket classes, orders, venues, and organizers.

Step 4: Start your app using node app.js

Step 5 [BONUS]: Connect to a Frontend
To connect your Express application to a frontend, you can use any frontend framework or library (e.g., React, Vue, Angular) to make HTTP requests to your Express routes.

If your frontend is in React, add a proxy value to your package.json file pointing to your Express server's URL. This tells the development server to proxy any unknown requests to your Express server.
*/