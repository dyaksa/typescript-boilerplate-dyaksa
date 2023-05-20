import express from 'express';
import config from './config';

async function startServer() {
  const app: express.Application = express();

  app
    .listen(config.port, () =>
      console.log(`Server is running on port ${config.port}`)
    )
    .on('error', (err) => {
      console.error(err.message);
      process.exit(1);
    });
}

startServer();
