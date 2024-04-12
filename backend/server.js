const express = require("express");
require("dotenv").config({ path: "./config.env" });
const notesRoute = require("./routes/notes");
const mongoose = require("mongoose");

const app = express();

// Middeware
app.use(express.json());
app.use("/api/v1/notes", notesRoute);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    console.log("Database is connected.");

    app.listen(process.env.PORT, (req, res) => {
      console.log(`The app is running on port ${process.env.PORT}.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
