const os = require('os');
const io = require('socket.io')();

const PORT = 4000;

// Collects data about the server's CPUs and memory usage
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

// Sends server data to clients every second
io.on('connection', function(socket){
  console.log('Client connected');

  const interval = setInterval(() => {
    const serverData = collectServerData();
    socket.emit('serverData', serverData);
  }, 1000);

  socket.on('disconnect', function() {
    clearInterval(interval);
    console.log('Client disconnected');
  });
});

// Starts the server and handles errors
try {
  io.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
} catch (err) {
  console.error(`Error starting server: ${err.message}`);
}

// Gracefully shuts down the server on SIGINT signal
process.on('SIGINT', () => {
  console.log('Server shutting down');
  io.close(() => {
    console.log('Server stopped');
    process.exit();
  });
});
