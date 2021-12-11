var express = require('Express');
var app = express();

var admin = require('./router_things.js');

//both index.js and things.js should be in same directory
app.use('/admin', admin);

app.use('/student', admin);

app.listen(3000);