'use strict';

var pullController = require('../controllers/pullController');

exports.set_status = function(req, res) {
	console.log("Setting value for " + req.params.teamId);
	pullController.setValue(req.params.teamId, true);
	res.send({'updated': true});
};