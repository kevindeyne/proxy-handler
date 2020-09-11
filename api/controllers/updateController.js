'use strict';

var pullController = require('../controllers/pullController');

var env = process.env.NODE_ENV || 'development';
var config = require('../config')[env];

exports.set_status = function(req, res) {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({"Error": "Auth failed"});
    }
	
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    
    const authenticated = (config.credentials.username === username && config.credentials.password === password);
	
    if (!authenticated) {
        return res.status(401).json({"Error": "Auth failed"});
    }
	
    pullController.setValue(req.params.teamId, true);
    res.send({'updated': true});
};
