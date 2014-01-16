var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
  var readStream = fs.createReadStream(process.argv[2]).pipe(response)

  readStream.on('error', function(err) {
    response.end(err);
  });
  
}).listen(8000)

