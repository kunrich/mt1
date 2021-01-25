var express = require("express");
var app     = express();
var port    = process.env.PORT || 3000;
var request = require('request');

app.use(express.static('public'));
app.get("/",(req,res)=>{

var a1 = 'https://anibit.xyz';
request(a1, function (error, response, body) {
if (!error && response.statusCode == 200) {
res.send(body);
}
});	

});

app.listen(port);
