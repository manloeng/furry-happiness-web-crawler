const express = require('express');
const app = express();
const apiController = require('./controllers/apiController.js')

app.use(express.json());

app.get("/api", apiController)

module.exports = app;