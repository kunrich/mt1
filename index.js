var express = require('express');
var request = require('request');

var app = express();
app.use(express.json());


app.get('/', (req, res) => {
if(req.query.url){
var str1 = Buffer.from(req.query.url, 'base64').toString('utf-8');

		
request(str1, function (error, response, body) {
if(!error && response.statusCode == 200){
		console.log("ok request 2...");
		var t1='<div id="player"><script>contents';
		var t2=';</script></div>';
		var b1=body.substring(body.search(t1),body.search(t2)).substr(t1.length+2);
		var b2=b1.substring(0,b1.length-2);
		var b3=b2.split("','");

request.post({
url: 'https://player.marimo.me/demo/s/'+b3[1]+'/',
body: 'v='+b3[0]+'&r='+b3[2],
headers: {
'Referer': str1,
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}, function(error1, response1, body1){
if(!error1 && response1.statusCode == 200){
res.send(body1);
}else{
res.send("Error post: "+response1.statusCode);	
}
});


}else{
res.send("Error get: "+response.statusCode);	
}
})	


}
});


var port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port${port}...`) );