const express = require('express')
const next = require('next')

// const port = parseInt(process.env.PORT, 10) || 3000
const port = 3000
// const dev = process.env.NODE_ENV !== 'production'
const dev = '‍'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) {
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
    }
    console.log(`> Ready on http://localhost:${port}`)
  })
})
