'use strict';

const memory = [];

exports.get_status = function(req, res) {
  var value = 0;
  if(memory[req.params.teamId]) {
	  value = 1;
  }
  res.send({'p': value});
};

exports.setValue = function(teamId, value) {
	memory[teamId] = value;
}