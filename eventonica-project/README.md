# 📅 Eventonica
An app that displays different Techtonica events and allows the user to see all upcoming events and <u>add, edit, or delete an event</u>. 
The user can also <u>search for an event</u> by title.

## Features

* Implement data fetching from a database using a GET request.
* Parse and display retrieved JSON data in the React frontend.
* Utilize React components, props, and state to manage event data.
* Track user edits and additions
* Search events based on title and display qualifying events.

## Technologies Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

* Frontend:
    * React
    * Vite
* Backend:
    * JavaScript
    * Express.js
    * Nodemon (development)
    * Postgres SQL
* Additional Tools:
    * Node.js

## Demo
![demo](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZoaHZzbGYwYmhwcTFxNzJlaDQxczZzdzNicWd6Y2cyMXFlZHYwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z6SAPdHuR2AERxiFqV/giphy.gif)


## Setup Instructions

1. Project Cloning and Ownership

    * Clone this project repository to your local machine:

        ```bash
        git clone git@github.com:nianokia/techtonica-assignments.git
        ```

    * Navigate to the project directory:

        ```bash
        cd eventonica_project
        ```

    * Remove the existing git repository (optional, to establish local ownership):

        ```bash
        rm -rf .git
        ```

2. Install Dependencies

    * **For both the client (frontend) and server (backend) directories:**
        * Navigate to the respective directory:
            * `cd client`
            * `cd server` (after completing client setup)
        * Install required dependencies:

            ```bash
            npm install
            ```

    * This will install all the necessary packages for both the frontend (Vite and React) and backend (Express.js, cors, and nodemon).

3. Create a .env file in the server folder.

4. There are two ways to restore the DB dump file the project already contains:
    * A- If you have postgres set up postgres with an User: 

        * Run the command ```psql -U <user> techtonica -f db.sql```
        * Make sure that you have your Postgres password on hand. The psql console will ask for your password.

    * B- If your initial configuration of postgres doesn't require a User:

        * Run the command ```psql techtonica -f db.sql```
        * Inside your server folder, open the file .env.example and copy the correct option for your configuration found there to your new .env file.
            * Your .env might look like:
                ```bash
                DATABASE_URI="postgresql://localhost/techtonica"
                ```


5. For this template, the name of your db should be techtonica.

    ⚠️ If you don't see an techtonica db, you can create one. ⚠️
    * From the terminal, navigate to the psql command line with psql and type:
        ```sql
        create database techtonica;
        ``` 

6. Run the App in Browser

    * **Concurrently start Frontend & Backend:**
        * Navigate to the `server` directory:
            ```bash
            npm run dev
            ```

    The app should now be accessible in your web browser at the specified URL (usually `http://localhost:5173`).


### Implementation Details

* The `server.js` file will handle the Express server setup and fetch data from database.
* React components will be created in the `client` directory to manage the app interface, form displays, event submission, and list of events.
* Data fetched from the database will be parsed and displayed in the React components.

## Future Implementations
* Display favorite icon to showcase whether the event was favorited or not
* Add custom styling

### Resources

* [Vite Documentation](https://vitejs.dev/): (Refer to official documentation for setup specifics)

### License

MIT License

This project is open-source and licensed under the MIT License.

### About the Developer
Nia Wright is a software engineer who primarily works with HTML, CSS, Javascript, and React. Check out her other [projects](https://niawright.netlify.app/)!