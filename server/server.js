const envVars = require('./config/envVars');
const http = require('http');
const app = require('./app');

const server = createServer(app);

server.listen(envVars.port);

server.on('listening', () => {
  console.log(`server is running at 127.0.0.1:${envVariables.port}`);
});

server.on('error', (err) => {
  if (err.syscall !== 'listen') {
    throw err;
  }

  switch (err.code) {
    case 'EACCESS':
      console.error(`Port ${envVariables.port} requires elavated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`Port ${envVariables.port} is already in use`);
      process.exit(1);
    default:
      throw err;
  }
});
