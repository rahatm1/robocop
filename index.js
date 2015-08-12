var express = require('express');
GLOBAL.app = express();
var bodyParser = require('body-parser');
GLOBAL.config = require('./config.json');
var server = app.listen(config.port, function () {
      console.log('My friends call me Murphy. You call me ...');
      console.log('Robocop.');
});
app.use(bodyParser.json());

GLOBAL.robocop = require('./src/robocop');
require('require-all')(__dirname + '/src/helpers');
require('require-all')(__dirname + '/' + config.tasks);
require('./src/home');
require('./src/hook');

