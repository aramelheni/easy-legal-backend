const http = require('http');
const socketIO = require('socket.io');

async function hostSocketServer(expressApp){
    server = http.createServer(expressApp);
    return socketIO(server);
}

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle chat events
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
