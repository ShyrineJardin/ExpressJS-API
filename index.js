let http = require('http')

http.createServer(function (req,res){
	console.log(req.url)
	console.log(req.method)

	if(req.url === "/" && req.method === "GET"){
		res.writeHead(200,{'Content-Type': 'text/plain'});
		res.end('Server is running at port 4000')
	}
}).listen(4000);
console.log(`Server Running on Localhost: 4000`)