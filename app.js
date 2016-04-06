var express = require('express'); var app = express();
var findUser = require('./modules/findUser.js');
var fetch = require('./routes/fetch');
var search = require('./routes/search');
var user = require('./routes/user');
var port = process.env.PORT || 8080;

app.use(findUser);
app.use(function(req, res, next) {
  console.log(req.method + ' : ' + req.user + ' : ' + req.url);
  next();
});

app.use('/fetch', fetch);
app.use('/search', search);
app.use('/user', user);

app.use(express.static('./public/'));
app.listen(port, function(req, res, next) {
  console.log('Listening on: ' + port + '...');
});
