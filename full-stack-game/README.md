# Project Objectives

* Implement data fetching from an external API using a GET request (Trivia API).
* Parse and display retrieved JSON data in the React frontend.
* Utilize React components, props, and state to manage game data.
* Track user answers and display win/lose messages based on performance.

## Technologies Used

* Frontend:
    * JavaScript
    * React
    * Vite
    * Fetch API
* Backend:
    * JavaScript
    * Express.js
    * Nodemon (development)
* Additional Tools:
    * Node.js
    * Postman (API testing)

## Prerequisites

* Basic knowledge of JavaScript, React, and Node.js
* Familiarity with Express.js and the Fetch API

## Setup Instructions

1. Project Cloning and Ownership

    * Clone this project repository to your local machine:

        ```bash
        git clone git@github.com:nianokia/techtonica-assignments.git
        ```

    * Navigate to the project directory:

        ```bash
        cd full-stack-trivia-game
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

    **For both the client (frontend) and server (backend) directories:**
        * Navigate to the respective directory:
            * `cd client`
            * `cd server` (after completing client setup)
        * Install required dependencies:

            ```bash
            npm install
            ```

            This will install all the necessary packages for both the frontend (Vite and React) and backend (Express.js, cors, and nodemon).

3. Start the Game

    * **Backend:**
        * Navigate to the `server` directory:
            ```bash
            cd server
            ```
        * Start the Express server:
            ```bash
            node server.js
            ```
    * **Frontend:**
        * Navigate to the `client` directory:
            ```bash
            cd client
            ```
        * Start the development server:
            ```bash
            npm run dev
            ```

    The game should now be accessible in your web browser at the specified URL (usually `http://localhost:3000`).

### Project Structure

full-stack-trivia-game/
├── client/  └── ... (React application files)
└── server/
└── server.js


## Implementation Details

* The `server.js` file will handle the Express server setup and utilize the Fetch API to retrieve data from the Trivia API.
* React components will be created in the `client` directory to manage the game interface, question display, user interaction, and win/lose logic.
* Data fetched from the API will be parsed and displayed in the React components.
* React's state management will be used to track user answers and game progress.

### Resources

* Trivia API: [https://opentdb.com/](https://opentdb.com/)
* FreeCodeCamp Game Tutorial (For reference, uses create-react-app): [https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react-and-typescript/](https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react-and-typescript/)   

* Vite Documentation: (Refer to official documentation for setup specifics)

### Contributing

Feel free to fork the project and contribute your improvements!

### License

MIT License

This project is open-source and licensed under the MIT License.