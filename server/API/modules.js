const express = require('express')
const axios = require('axios')
const router = express.Router()

//~~~~~~~~~~~~~~// Get Modules //~~~~~~~~~~~~~~//
router.get("/getModules/:id/:token", function (req, res) {
    const { token, id } = req.params;
    console.log("made it to server");
    axios
        .get(
            `https://eliot.azure-api.net/servicecatalog/api/v2.0/plants/${id}/modules`,
            {
                headers: {
                    "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
                    Authorization: "Bearer " + token
                }
            }
        )
        .then(response => {
            console.log("response received");
            res.status(200).send(JSON.stringify(response.data));
        });
});

module.exports = router;