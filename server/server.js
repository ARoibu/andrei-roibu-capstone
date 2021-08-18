const express = require('express');
const app = express();
const exercises = require("./data/capstone.json")

app.get('/api/exercises', (req, res) => {
    res.json(exercises);
})

app.listen(8080, () => {
    console.log("Express is up and running on port 8080")
})