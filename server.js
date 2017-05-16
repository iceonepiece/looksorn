

var wordcut = require("wordcut");
wordcut.init();

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.json({ status: 'Looksorn is running' });
});

app.post('/cut', function(req, res){
  var words = wordcut.cutIntoArray(req.body.text);
  res.json({ words });
});

app.listen(5000, function(){
  console.log('Looksorn is running');
});
