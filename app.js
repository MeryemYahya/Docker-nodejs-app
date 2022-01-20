var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://mongo:27017/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to database");
});

app.use(express.static('public'));
var route1 = require('./routes/route_1');
var route2 = require('./routes/route_2');
var route3 = require('./routes/route_3');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', route1);
app.use('/json', route2);
app.use('/db', route3);
app.listen(3000, () => console.log("Server started at port 3000"));

module.exports = app