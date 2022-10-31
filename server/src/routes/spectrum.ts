import express, { Express, Router, Request, Response } from 'express';
import { getSpectrumInfo, getSpectrumByArea } from '../includes/db';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const spectrumInfo = getSpectrumInfo();
  return res.send(spectrumInfo);
});

router.get('/:area', (req: Request, res: Response) => {
  const spectrum = getSpectrumByArea(Number(req.params.area));

  if (!spectrum) {
    const statusCode = 404;
    const statusMessage = 'Not Found';
    return res.status(statusCode).send({ error: { code: statusCode, message: statusMessage }});
  }

  return res.send(spectrum);
});

export default router;
