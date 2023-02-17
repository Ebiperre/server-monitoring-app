const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const os = require('os');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 4000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

function emitServerData() {
  const cpus = os.cpus();
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  io.emit('serverData', { cpus, totalMemory, usedMemory });
}

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);
  setInterval(emitServerData, 1000);

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
