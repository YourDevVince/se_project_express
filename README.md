# WTWR (What to Wear?): Back End

The WTWR back-end project is focused on building a server for the WTWR web application.  
It provides an API that allows users to create, read, update, and delete clothing items, as well as like or dislike them.  
This project is part of a full-stack application where the server handles database operations, user management, and validation.

---

## 🧠 Tech Stack

- **Node.js** – JavaScript runtime for building the server
- **Express.js** – Web framework for handling routes and middleware
- **MongoDB** – NoSQL database for storing user and clothing item data
- **Mongoose** – ODM for MongoDB, handling schemas and data validation
- **ESLint** – Code quality and style enforcement
- **Prettier** – Code formatter for consistent syntax
- **Validator** – Library used to validate user input (e.g., URL fields)

---

## ⚙️ Functionality

- Create, retrieve, and delete clothing items
- Associate each clothing item with its creator (owner)
- Like and dislike items using user IDs
- Handle data validation for URLs and user input
- Return proper HTTP status codes and error messages
- Structure code following MVC principles (models, routes, controllers)

---

## 🚀 Running the Project

To start the server:

```bash
npm run start
```
