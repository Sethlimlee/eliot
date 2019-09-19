const express = require('express')
const axios = require('axios')
const router = express.Router()

//~~~~~~~~~~~~~~// Send Command //~~~~~~~~~~~~~~//
router.post("/sendCommand/:id/:token", function (req, res) {
    const { token, id } = req.params;
    // console.log("made it to command server");
    // console.log(id);
    console.log(token);
    var data = {
        command: {
            state: "on"
        }
    };
    axios
        .post(
            `https://eliot.azure-api.net/devicemanagement/api/v2.0/modules/${id}/commands/on`,
            data,
            {
                headers: {
                    "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
                    Authorization: "Bearer " + token
                }
            }
        )
        .then(response => {
            console.log(response.data);
            res.status(200).send();
        });
});

module.exports = router;
