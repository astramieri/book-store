import express from "express";
import { PORT, mondogDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Book Store MERN Stack Tutorial");
});

mongoose
  .connect(mondogDBURL)
  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`); // backtick: ALT + 96
    });
  })
  .catch((error) => {
    console.log(error);
  });
