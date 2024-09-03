import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer(function (req: any, res: any) {
    console.log((new Date()) + 'Received request for'+ req.url)
    res.end('Hello, World!')

});

const wss = new WebSocketServer(server);

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  socket.send("Hello, World! from server")
});

server.listen(8080, function () {
    console.log((new Date()) + `Server is listening on port 8080`)
})