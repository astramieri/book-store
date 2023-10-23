import express from "express";
import { PORT, mondogDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Book Store MERN Stack Tutorial");
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`); // backtick: ALT + 96
});

mongoose
  .connect(mondogDBURL)
  .then(() => {})
  .catch(() => {});
