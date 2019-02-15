require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.use(bodyParser.json());

//~~~~~~~~~~~~~~// Get All Plants //~~~~~~~~~~~~~~//
app.get("/api/get/:token", function(req, res) {
  const { token } = req.params;
  axios
    .get("https://eliotqa.azure-api.net/servicecatalog/api/v2.0/plants", {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
        Authorization: "Bearer " + token
      }
    })
    .then(response => {
      res.status(200).send(JSON.stringify(response.data));
    });
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//~~~~~~~~~~~~~~// Delete Plant //~~~~~~~~~~~~~~//
app.delete("/api/deletePlant/:id/:token", function(req, res) {
  const { token, id } = req.params;
  axios
    .delete(
      `https://eliotqa.azure-api.net/servicecatalog/api/v2.0/plants/${id}`,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
          Authorization: "Bearer " + token
        }
      }
    )
    .then(response => {
      axios
        .get("https://eliotqa.azure-api.net/servicecatalog/api/v2.0/plants", {
          headers: {
            "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          res.status(200).send(JSON.stringify(response.data));
        });
    });
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const port = 3005;

app.listen(port, () => console.log("listening on port 3005"));
