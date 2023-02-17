const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
	res.send('Server is up and running');
});

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

function emitServerData() {
    const cpus = os.cpus();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
  
    io.emit('serverData', { cpus, totalMemory, usedMemory });
  }