var express = require("express");
var path = require('path');

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/css*')));

app.get('/', function(req, res){
    res.render('Home.html');
});

app.listen(44302);
console.log('Express server started');