require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const API = require('./API/index');

const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json());
app.use('/', API);

app.listen(port, () => console.log("listening on port 3005"));
