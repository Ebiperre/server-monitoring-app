
const os = require('os');
const io = require('socket.io')();

const PORT = 3000;

function collectServerData() {
  const cpus = os.cpus();
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  return {
    cpus,
    totalMemory,
    usedMemory
  };
}

io.on('connection', (socket) => {
  console.log('Client connected');

  const interval = setInterval(() => {
    const serverData = collectServerData();
    socket.emit('serverData', serverData);
  }, 1000);

  socket.on('disconnect', () => {
    clearInterval(interval);
    console.log('Client disconnected');
  });
});

io.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});