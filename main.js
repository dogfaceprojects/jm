const http = require('http');
const request = require('request');
const exec = require('child_process').exec;
const  args = ["http 501"];

function startNgrok () {
exec(`./ngrok ${args}`)
};

startNgrok ();

//yeah 

http.createServer(function(req, res) {

res.end("MONEKYS");

}).listen(501);
