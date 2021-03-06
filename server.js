const express = require('express');
const http = require('http')
const path = require('path');

const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/learn2018-fe'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200, function() {
  console.log('Listening on port ' + this.address().port); //Listening on port 8888
});
