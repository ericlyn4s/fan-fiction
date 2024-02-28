# 🎬 Tale Spin

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Dependencies](#dependencies)
- [SQL Query](#sql-query)
- [.env Example](#env-example)
- [How to Run](#how-to-run)
- [Demo Video](#demo-video)
- [Live Link](#live-link)

## Description:

Tale Spin is a collaborative web application, serving as a fan-fiction forum, that allows users to sign up and sign in to the platform. Once logged in, users can share their movie review stories and interact with others by liking and commenting on stories shared by fellow users. The platform aims to provide a space for movie enthusiasts to connect, share their thoughts, and engage in discussions about their favorite films.

## Features:

- _User Authentication_: Users can create an account and securely log in using bcrypt for password hashing.
- _Story Sharing_: Registered users can share their movie review stories on the platform, while non-registered users can only view the reviews.
- _Interactivity_: Users can like and comment on stories shared by other users, fostering engagement and discussion.
- _Database Management_: The application utilizes MySQL as the relational database management system, managed through Sequelize ORM. The database schema includes tables for users, stories, likes, and comments.
- _Session Management_: Express-session middleware is used for session management, providing a seamless and secure user experience.
- _Environment Variables_: Sensitive database credentials are stored securely using environment variables defined in a .env file.
- _Bootstrap for Styling_: We used Bootstrap 5 for styling elements of the user interface.

## Dependencies:

The following dependencies were utilized in the development of Tale Spin:

- `bcrypt`: For password hashing and authentication.
- `connect-session-sequelize`: Middleware for managing sessions with Sequelize.
- `dotenv`: To load environment variables from a .env file.
- `express-handlebars`: The template engine for rendering dynamic HTML content.
- `express-session`: Middleware for managing sessions in Express.
- `handlebars` : The templating language for building HTML templates.
- `sequelize`: The promise-based ORM for Node.js, supporting MySQL.

## SQL Query:

```sql
-- Drop the database if it already exists
DROP DATABASE IF EXISTS stories_db;
-- Create a new database
CREATE DATABASE stories_db;
```

## .env Example:

```env
DB_NAME='stories_db'
DB_USER='your_db_username'
DB_PASSWORD='your_db_password'
SECRET='your_secret_key'
DB_HOST='localhost'
```

Feel free to explore our platform and share your fan fiction with fellow users!

## How to Run

To run Tale Spin, follow these steps: 🏃 

1. **Create SQL Database**: Execute the provided [SQL query](#sql-query) to create the necessary database.
2. **Install Dependencies**: Run `npm install` to install all project dependencies.

3. **Set up Environment Variables**: Create a `.env` file in the root directory of the project and follow the structure provided in the [.env Example](#env-example) section below.

4. **Run Development Server**: If you're in a development environment, run `npm run dev` to start the server with `nodemon` for automatic reloading on file changes.

5. **Start Production Server**: For `production`, run `npm start` to start the server.

6. **Seed Data (Optional)**: If needed, run `npm run seed` to seed the database with initial data.

## Demo video

https://github.com/ericlyn4s/tale-spin/assets/147503829/69bd0241-f231-4602-84f0-2ac2fd4db2a4


## Live Link

Explore the live version of Tale Spin [here!](https://tale-spin-7c174798f8bd.herokuapp.com/) 👀
