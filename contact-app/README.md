# Full-Stack PERN Project: Contact List App

### Introduction

Let's make a contact list app! You've now learned how to create a full-stack app with a React frontend, Node/Express backend, and Postgres database (PERN). This project is to practice putting it all together by building a fairly simple app from start to finish.

For this project, you can reference previous lessons and find your own resources online. This should be good practice finding resources and getting the help you need to make your code work without step-by-step instructions.

You must use Express, React, and PostgreSQL. You can choose what other technologies and libraries you want to use as well as part of the project.

All code should be your own or _become your own_, i.e. you should understand what it's doing, even if it's a snippet from StackOverflow. If you get an idea from somewhere or someone, please add an attribution note in a comment.

Styling/CSS is not important for this assignment, but once the behavior is working, please feel free to make it look nice.

⚠️⚠️⚠️ _**Avoid searching “tutorial for how to make a contact list app” and following step by step instructions. Your final project will NOT have any tutorials, so get familiar with how things work together now!**_

### This project should show the following:
  |                                      Capable of...                                     |                                                    Comfortable with...                                                   |                                                  Skilled at Using...                                                  |
  |:--------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|
  |- creating tables<br>- joining tables<br>- searching for data in tables<br>- using CSS | - Prop<br>- State<br>- Callback functions<br>- CRUD operations<br>- .map()<br>- Creating routes<br>- Saving data to a DB | - Vite<br>- React<br>- JavaScript / NodeJs<br>- Express<br>- SQL<br>- PostgreSQL<br>- Jest<br>- React Testing Library |


#### Backend
- Use SQL to add some initial data to your database - a minimum of 3 contacts should be initially populated in your app.
- Your DB should have a table "contacts" with at least these columns:
  - Contact ID
  - Name
  - Email
  - Phone
  - Notes

#### Frontend.
Please make sure that your components in the React app have the following distribution:
- Home (App) - Parent
- contacts - Child - Renders a list with all your contacts.
- view-contact - child - Renders the info of ONE individual contact
- create-contact- child - Renders a form for the user to add a new contact

![Screenshoot](https://github.com/Yosolita1978/screenshoots/blob/main/week11/lo90b1.jpeg?raw=true)

#### Required Features:
- Include a top-level README
- Don't commit your node_modules file
- Must be clean and only include files related to this project
- Include a .gitignore
- A list with all your contacts
- A form so you can submit a new contact
  - a couple of **required** fields
  - a couple fields that **aren't required**
- An “edit” button in front of the contact name; with the functionality to update data
- A click option to see the individual contact detail page
- A test file to test your form component
- A delete button to delete an specific contact
- Error handling
  - Your form should use HTML input attributes to validate input and make entering data fast and easy
  - Show a user-visible error message to indicate what's wrong and how the user can fix it

## Technologies Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

* Frontend:
    * React
    * Vite
* Backend:
    * JavaScript / Node.js
    * Express.js
    * Nodemon (development)
    * Postgres SQL
* Additional Tools:
    * Jest / RTL
    * Postico 2
    
## Setup Instructions

  1. Project Cloning and Ownership

    * Clone this project repository to your local machine:

        ```bash
        git clone git@github.com:nianokia/techtonica-assignments.git
        ```

    * Navigate to the project directory:

        ```bash
        cd contact-app
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

    * This will install all the necessary packages for both the frontend (Vite and React) and backend (Express.js, cors, nodemon, and concurrently).

3. Create a .env file in the server folder.

4. There are two ways to restore the DB dump file the project already contains:
    * A- If you have postgres set up postgres with an User: 

        * Run the command ```psql -U <user> contacts -f db.sql```
        * Make sure that you have your Postgres password on hand. The psql console will ask for your password.

    * B- If your initial configuration of postgres doesn't require a User:

        * Run the command ```psql contacts -f db.sql```
        * Inside your server folder, open the file .env.example and copy the correct option for your configuration found there to your new .env file.
            * Your .env might look like:
                ```bash
                DATABASE_URI="postgresql://localhost/contacts"
                ```

5. For this template, the name of your db should be contacts.

    ⚠️ If you don't see an contacts db, you can create one. ⚠️
    * From the terminal, navigate to the psql command line with psql and type:
        ```sql
        CREATE DATABASE contacts;
        ``` 

6. Run the App in Browser

    * **Concurrently start Frontend & Backend:**
        * Navigate to the `server` directory:
            ```bash
            npm run dev
            ```

    The app should now be accessible in your web browser at the specified URL (usually `http://localhost:5173`).

### Resources

* [Vite Documentation](https://vitejs.dev/): (Refer to official documentation for setup specifics)

### License

MIT License

This project is open-source and licensed under the MIT License.

### About the Developer
Nia Wright is a software engineer who primarily works with HTML, CSS, Javascript, and React. Check out her other [projects](https://niawright.netlify.app/)!