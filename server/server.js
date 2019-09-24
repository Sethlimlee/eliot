require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const API = require('./API/index');
const config = require('../src/config');

const app = express();
const { app: { port } } = config;

app.use(cors());
app.use(bodyParser.json());
app.use('/', API);

app.listen(port, () => console.log(`listening on port ${port}`));
