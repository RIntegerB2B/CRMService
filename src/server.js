var express = require('express'),
    app = express(),
    port = process.env.PORT || 3021,
    bodyParser = require('body-parser');


var cors = require('cors');
var routes=require('./route');

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(cors());
routes.loadRoutes(app);
app.listen(port);

var mongoDbConfig = require('./config/mongoDatabase.config');
var mongoose = require('mongoose');

mongoose.connect(mongoDbConfig.url, {useNewUrlParser: true});

mongoose.connection.on('error', function () {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database");
});

app.get('/test', function (req, res) {
    res.send("Success!");
});

console.log('RInteger CRM Service started on: ' + port);

