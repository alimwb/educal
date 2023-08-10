const express = require('express')
const next = require('next')
const swaggerUI = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('fs');
const { envVars } = require('./built/config/envVars');
const { authRouter, userRouter, courseRouter, cartRouter } = require('./built/routers')
const { createNotFoundErr } = require('./built/helpers/errors/createNotFoundErr');
const { errorHandler } = require('./built/helpers/errors/errorHandler');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// const port = parseInt(process.env.PORT, 10) || 3000
const port = envVars.port;
// const dev = process.env.NODE_ENV !== 'production'
const dev = '‍'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(async () => {
  let docFile = fs.readFileSync('./swaggerDoc.yaml', 'utf-8');
  const swaggerDoc = YAML.parse(docFile);
  const server = express()
  docFile = null; // memory saving

  await mongoose.connect(envVars.dbUri);

  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(cookieParser(envVars.cookieSecert));
  server.use(cors({
    origin: envVars.environment === 'dev' ? 'http://localhost:3000' : '',
  }));

  server.use(`/api/v1/docs`, swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  server.use(`/api/v1/auth`, authRouter);
  server.use('/api/v1/user', userRouter);
  server.use('/api/v1/course', courseRouter);
  server.use('/api/v1/cart', cartRouter);

  // handle errors
  server.use('/api/*', createNotFoundErr);
  server.use('/api/*', errorHandler);

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
