# WTWR (What to Wear?): Back End

The WTWR back-end project powers the API for the WTWR web application.  
It supports user authentication, user profiles, and clothing item management (including likes).  
This server handles database operations, request validation, and logging.

---

## 🧠 Tech Stack

- **Node.js** – JavaScript runtime for building the server
- **Express.js** – Web framework for routes and middleware
- **MongoDB** – NoSQL database for storing user and clothing item data
- **Mongoose** – ODM for MongoDB schemas and models
- **JWT (jsonwebtoken)** – Token-based authentication for protected routes
- **bcryptjs** – Password hashing
- **celebrate / Joi** – Request validation middleware (body/params)
- **validator** – Stricter validation for URL fields (avatar, imageUrl)
- **winston + express-winston** – Request and error logging
- **ESLint** – Code quality and style enforcement
- **Prettier** – Code formatter for consistent syntax

---

## ⚙️ Functionality

### Users & Auth

- Create user accounts (signup)
- Login with email/password and receive a JWT (signin)
- Get the current logged-in user (`GET /users/me`)
- Update user profile (`PATCH /users/me`)

### Clothing Items

- Create and retrieve clothing items
- Delete clothing items (typically owner-only)
- Like and dislike items

### Validation, Errors, and Logs

- Validate request bodies and route params using **celebrate/Joi**
- Validate avatar and item image URLs using **validator.isURL()**
- Centralized error handling with correct HTTP status codes
- Log requests to `request.log` and errors to `error.log`

---

## 🚀 Running the Project

### Install dependencies

```bash
npm install
```

### Start the server

npm install

```bash
npm run dev
```

## Links

- Frontend repo [HERE](https://github.com/YourDevVince/se_project_react/)

- Deployed Domain: [https://wtwrrn.blinklab.com/](https://wtwrrn.blinklab.com/)

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1m9f9j9EzgvAXo4v4pJ8LNwVW7S1TSDpa/view?usp=sharing/), where I describe my
project and some challenges I faced while building it.
