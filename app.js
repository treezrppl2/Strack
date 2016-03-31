var express = require('express'); var app = express();
var fetch = require('./routes/fetch');
var search = require('./routes/search');
var user = require('./routes/user');

app.use(function(req, res, next) { console.log(req.method + ' : ' + req.url); next();});

app.use('/fetch', fetch);
app.use('/search', search);
app.use('/user', user);

app.use(express.static('./public/'));
app.listen(8080, function(req, res, next) {
  console.log('Listening on: 8080...');
});
