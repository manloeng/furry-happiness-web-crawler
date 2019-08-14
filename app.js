const express = require('express');
const app = express();
const apiController = require('./controllers/apiController.js')

app.use(express.json());

app.post("/api", apiController)

module.exports = app;