'use strict';
module.exports = function(app) {
  var controller = require('../controllers/updateController');

  app.route('/set/:teamId')
    .put(controller.set_status);
};