import path from 'path';
import express, { Express, Request, Response, Router } from 'express';
import spectrumRouter from './src/routes/spectrum';
import areasRouter from './src/routes/areas';
import logger from './src/includes/logger';

const app: Express = express();
const staticPath = path.join(__dirname, '../../web/build');
const indexFilePath = path.join(staticPath, '/index.html');

function logRequests(req: Request, res: Response, next: Function) {
  const accessTo = `Access to ${req.method} ${req.url}`;
  const accessFrom = `from ${req.socket.remoteAddress} ${req.get('user-agent')}`;
  logger.http([accessTo, accessFrom].join(' '));
  next();
}

app.use('/', express.static(staticPath));

app.use(logRequests);

app.use('/spectrum', spectrumRouter);
app.use('/areas', areasRouter);

app.get('/', (req: Request, res: Response) => {
  return res.sendFile(indexFilePath);
});

const port: string = '3000';
app.listen(port, () => {
  console.log(`Starting api on port ${port}`);
});
