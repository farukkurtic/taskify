# Taskify

Welcome to Taskify, a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This app empowers you to manage your tasks effectively, keeping you organized and on top of your to-do list.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Database Schema](#database-schema)
- [Demo](#demo)
- [Conclusion](#conclusion)

## Features

- **User Authentication:** Secure user registration and login using bcrypt for password hashing and react-cookie for token management.
- **Task Management:** Perform CRUD operations (Create, Read, Delete) on tasks, giving you full control over them.
- **Polished Styling:** Utilizes Bootstrap for enhanced styling and a sleek user interface.

## Technologies Used

- **Frontend:**
  - React.js for building a dynamic and interactive user interface.
  - Bootstrap for a distinct and captivating visual appearance.
  - Axios for making API requests to the backend.

- **Backend:**
  - Node.js and Express for creating a robust API server.
  - MongoDB with Mongoose for a flexible and scalable database solution.
  - Bcrypt for hashing passwords and ensuring secure authentication.
 
## Installation

  - Clone the repository

      ```bash
     git clone https://github.com/farukkurtic/mern-todo.git
     cd mern-todo

  - Install dependencies for both the frontend and the backend:
 
      ```bash
      cd client
      npm install
      
      cd ../server
      npm install

  - Configure the MongoDB connection:

      Update the server/src/index.js file with your MongoDB connection string.

  - Start the development server:
 
      - In the server/src directory:

        ```bash
        node index.js
      
      - In the client directory:
        
        ```bash
        npm start

  - Access the app in your browser:
  
      Open your browser and go to http://localhost:3000.

 ## Database Schema

   The app's MongoDB schema includes a User collection for user authentication and a Task collection for managing tasks. The Mongoose schema definitions can be found in the server/models directory.

## Demo

![2023-09-06 17-07-36 (online-video-cutter com)](https://github.com/farukkurtic/Taskify/assets/34779712/56ba62de-53bd-4c51-9d86-25c718f3c34d)


## Conclusion

Thank you for using Taskify! Stay productive and organized with your tasks using this simple yet powerful application. 🚀


    
