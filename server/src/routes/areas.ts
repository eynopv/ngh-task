import express, { Express, Router, Request, Response } from 'express';
import { getAreas } from '../includes/db';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.send(getAreas());
});

export default router;
