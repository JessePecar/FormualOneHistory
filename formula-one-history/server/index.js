const express = require("express");

const PORT = process.env.PORT || 3001;

var resultsController = require('./Results/ResultsController');
var teamsController = require('./Teams/TeamsController');
const app = express();

app.get("/teams", teamsController.team_list);

app.get("/results", resultsController.results_list);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})