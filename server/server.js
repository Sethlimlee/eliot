require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.get("/api/get", function(req, res) {
  axios
    .get("https://api.fortnitetracker.com/v1/profile/pc/SopaGrande", {
      headers: {
        "TRN-Api-Key": process.env.APIKey
      }
    })
    .then(response => {
      res.status(200).send(JSON.stringify(response.data.lifeTimeStats[11]));
    });
});

const port = 3005;

app.listen(port, () => console.log("listening on port 3005"));
