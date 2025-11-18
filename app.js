const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", mainRouter);

// githubs test rejected me using const { MONGODB_URI } = require("./utils/config");
// so I hardcoded the MongoDB connection string here
mongoose
  .connect("mongodb://localhost:27017/wtwr_db") 
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