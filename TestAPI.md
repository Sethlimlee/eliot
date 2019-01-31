app.get("/api/get", function(req, res) {
  axios
    .get("https://api.fortnitetracker.com/v1/profile/pc/Sheperd67", {
      headers: {
        "TRN-Api-Key": process.env.APIKey
      }
    })
    .then(response => {
      res.status(200).send(JSON.stringify(response.data.lifeTimeStats));
    });
});

[{address: "7182 N Pawnee Ct."
country: "United States"
id: "c47387ea-3280-4f83-af8f-643fd33f992c"
internalId: "AmbientHomeInternalID1234"
name: "AmbientHome"
ownerId: "5d73a87e-4081-4d54-a47b-ee7780991085"
status: "active"
type: "house"
zipCode: "84005"}, {…}, {…}, {…}, {…}, {…}, {…}]