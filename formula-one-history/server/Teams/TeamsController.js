var Teams = require('./Data/Teams.js')

exports.team_list = function(res, req){
    res.json(Teams.teams_list);
}