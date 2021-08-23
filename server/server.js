const express = require('express');
const app = express();
const exercises = require("./data/capstone.json");
const cors = require('cors');
const fs = require('fs');
const uniqid = require('uniqid');


app.use(cors());
app.use(express.json());

const getLogs = () => {
    const logData = fs.readFileSync('./data/logs.json');
    const parsedlogData = JSON.parse(logData);
    return parsedlogData;
};

app.get('/api/exercises', (req, res) => {
    if (req.query.category) {
        const filteredExercises = exercises.filter((exercise) => {
            return exercise.category === req.query.category
        })
        res.json(filteredExercises)
    } else {
        res.json(exercises);
    }
})

app.get('/api/logs', (req, res) => {
    const logs = getLogs();
    res.json(logs);
})

app.post('/api/logs', (req, res) => {
    const logs = getLogs();
    const newLog = {
        id: uniqid(),
        date: req.body.date,
        exercise: req.body.exercise,
        weight: req.body.weight,
        reps: req.body.reps,
        weight2: req.body.weight2,
        reps2: req.body.reps2,
        weight3: req.body.weight3,
        reps3: req.body.reps3,
        weight4: req.body.weight4,
        reps4: req.body.reps4,
    };

    logs.unshift(newLog);
    fs.writeFileSync('./data/logs.json', JSON.stringify(logs));
    res.json(logs);
});

app.delete('/api/delete/:id', (req, res) => {
    const logs = getLogs();
    let itemIndex = logs.findIndex(
        (log) => log.id == req.params.id
    );
    logs.splice(itemIndex, 1);
    fs.writeFileSync('./data/logs.json', JSON.stringify(logs));
    res.send(`${req.params.id}`);
});

app.listen(8080, () => {
    console.log("Express is up and running on port 8080");
})