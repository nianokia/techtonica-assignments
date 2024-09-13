# Animal Tracking App
## Features

* Implement data fetching from a database using a GET request (Trivia API).
* Parse and display retrieved JSON data in the React frontend.
* Utilize React components, props, and state to manage game data.
* Track user answers and display win/lose messages based on performance.

## Demo
![demo](link)

## Technologies Used

* Frontend:
    * JavaScript
    * React
    * Vite
* Backend:
    * JavaScript
    * Express.js
    * Nodemon (development)
    * Postgres SQL
* Additional Tools:
    * Node.js
    * Postman (API testing)

## Setup Instructions

1. Project Cloning and Ownership

    * Clone this project repository to your local machine:

        ```bash
        git clone git@github.com:nianokia/techtonica-assignments.git
        ```

    * Navigate to the project directory:

        ```bash
        cd animal-tracker
        ```

    * Remove the existing git repository (optional, to establish local ownership):

        ```bash
        rm -rf .git
        ```

    * Initialize a new git repository for your local project:

        ```bash
        git init
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

3. There are two ways to restore the DB dump file the project already contains:
    * A- If you have postgres set up postgres with an User: 

        * just run the command psql -U postgres techtonica -f db.sql. Make sure that you have your Postgres password on hand. The psql console will ask for your password.

    * B- If your initial configuration of postgres doesn't require a User: just run the command psql techtonica -f db.sql

        * Inside your server folder, open the file .env.example and copy the correct option for your configuration found there to your new .env file.

Here is what your .env might look like:
```bash
DATABASE_URI="postgresql://localhost/techtonica"
```

For this template, the name of your db should be animal_tracker.

⚠️ If you don't see an animal_tracker db, you can create one. 
* From the terminal, navigate to the psql command line with psql and type:
    ```sql
    create database animal_tracker;
    ``` 

3. Run the App in Browser

    * **Concurrently start Frontend & Backend:**
        * Navigate to the `server` directory:
            ```bash
            npm run dev
            ```

    The app should now be accessible in your web browser at the specified URL (usually `http://localhost:5173`).


### Implementation Details

* The `server.js` file will handle the Express server setup and fetch data from database.
* React components will be created in the `client` directory to manage the app interface, form display, user submission, and sightings list.
* Data fetched from the database will be parsed and displayed in the React components.

### Resources

* Vite Documentation: (Refer to official documentation for setup specifics)

### License

MIT License

This project is open-source and licensed under the MIT License.