var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  //Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var pullRoutes = require('./api/routes/pullRoutes');
pullRoutes(app);

var updateRoutes = require('./api/routes/updateRoutes');
updateRoutes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Proxy handler server started on: ' + port);