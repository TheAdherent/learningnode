var net = require('net')
var moment = require('moment')

var server = net.createServer(function(socket){
        data = moment().format('YYYY[-]MM[-]DD HH:mm')
        data.toString()
        socket.end(data + '\n')
})
server.listen(8000)
