'use strict';
module.exports = function(app) {
  var controller = require('../controllers/pullController');

  app.route('/status/:teamId')
    .get(controller.get_status);
};