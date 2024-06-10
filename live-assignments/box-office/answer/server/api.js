const express = require("express");
const app = express();
const cors = require("cors");
const showings = require("./data/showings.json");

app.use(cors());

app.get("/api", (_, res, next) => {
  res.status(200).send({ status: "OK", message: "API up and running..." });
});

app.get("/api/shows/all-open", (_, res, next) => {
  res.status(200).send({ status: "OK", itemCount: showings.length, showings });
});

module.exports = app;
