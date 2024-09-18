const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
	var path = request.url;
	fs.readFile(__dirname + '/app' + path, function(err, data) {
		if (!err) {
			if (path.endsWith('.css')) {
				response.writeHead(200, {"Content-Type":"text/css"});
			} else if (path.endsWith('.js')) {
				response.writeHead(200, {"Content-Type":"application/javascript"});
			} else {
				response.writeHead(200, {"Content-Type":"text/html"});
			}
			response.write(data);
			response.end();
		} else {
			console.error(arguments);
			response.writeHead(404, {"Content-Type":"text/html"});
			response.write("<h1>404 - Not Found</h1>");
			response.end();
		}
	});
}).listen(8081);
