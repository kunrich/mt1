var express = require("express");
var app     = express();
var port    = process.env.PORT || 3000;
var request = require('request');

app.use(express.static('public'));
app.get("/",(req,res)=>{
if(req.query.url){
var str1 = Buffer.from(req.query.url, 'base64').toString('utf-8');
request({
url:str1,
headers: {
'Referer': str1,
'Accept': 'text/html, */*; q=0.01',
'sec-ch-ua': '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
'sec-ch-ua-mobile': '?0',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
'X-Requested-With': 'XMLHttpRequest'
}
}, function (error, response, body) {
if (!error && response.statusCode == 200) {
res.send(body);
}
});	
}
});

app.listen(port);
