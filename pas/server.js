var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

mongoose = require('mongoose')
User = require('./api/models/userModel')
bodyParser = require('body-parser')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/journal'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userRoutes');
routes(app);


app.listen(port);

console.log('listening to port: ' + port);
