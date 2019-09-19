const express = require('express')
const axios = require('axios')
const router = express.Router()

//~~~~~~~~~~~~~~// Get All Plants //~~~~~~~~~~~~~~//
router.route('/get/:token')
    .get((req, res) => {
        const { token } = req.params;
        axios
            .get("https://eliot.azure-api.net/servicecatalog/api/v2.0/plants", {
                headers: {
                    "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
                    Authorization: "Bearer " + token
                }
            })
            .then(response => {
                res.status(200).send(JSON.stringify(response.data));
            });
    })
    .delete((req, res) => {
        const { token, id } = req.params;
        axios
            .delete(
                `https://eliot.azure-api.net/servicecatalog/api/v2.0/plants/${id}`,
                {
                    headers: {
                        "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
                        Authorization: "Bearer " + token
                    }
                }
            )
            .then(response => {
                axios
                    .get("https://eliot.azure-api.net/servicecatalog/api/v2.0/plants", {
                        headers: {
                            "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
                            Authorization: "Bearer " + token
                        }
                    })
                    .then(response => {
                        res.status(200).send(JSON.stringify(response.data));
                    });
            });
    })


//~~~~~~~~~~~~~~// Delete Plant //~~~~~~~~~~~~~~//
// app.delete("/api/deletePlant/:id/:token", function (req, res) {
//     const { token, id } = req.params;
//     axios
//         .delete(
//             `https://eliot.azure-api.net/servicecatalog/api/v2.0/plants/${id}`,
//             {
//                 headers: {
//                     "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
//                     Authorization: "Bearer " + token
//                 }
//             }
//         )
//         .then(response => {
//             axios
//                 .get("https://eliot.azure-api.net/servicecatalog/api/v2.0/plants", {
//                     headers: {
//                         "Ocp-Apim-Subscription-Key": process.env.SUB_KEY,
//                         Authorization: "Bearer " + token
//                     }
//                 })
//                 .then(response => {
//                     res.status(200).send(JSON.stringify(response.data));
//                 });
//         });
// });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

module.exports = router;