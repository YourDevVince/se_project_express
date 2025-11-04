const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes");
const { MONGODB_URI, JWT_SECRET } = require("./utils/config"); // JWT_SECRET used in auth later

const app = express();
const PORT = process.env.PORT || 3001;

const DB_URI = MONGODB_URI || "mongodb://127.0.0.1:27017/wtwr_db";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", mainRouter);


mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });