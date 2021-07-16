var Results = require('./Data/ResultData');

exports.results_list = function(req, res){
    res.json(Results.results);
};

