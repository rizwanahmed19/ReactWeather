var express = require('express');

//create your app
var app = express();
const PORT = process.env.PORT || 5050;

app.use(function(req, res, next){
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});
app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express app is up on port ' + PORT);
});