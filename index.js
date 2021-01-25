var express = require("express");
var app     = express();
var port    = process.env.PORT || 3000;
var request = require('request');

app.use(express.static('public'));
app.get("/",(req,res)=>{
if(req.query.url){
var str1 = Buffer.from(req.query.url, 'base64').toString('utf-8');
request(str1, function (error, response, body) {
if (!error && response.statusCode == 200) {
res.send(body);
}
});	
}
});

app.listen(port);
