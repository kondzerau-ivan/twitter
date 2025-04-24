import { Router } from 'express';
import type { Request, Response } from 'express';

export const likesRouter = Router();

likesRouter.get('/', (req: Request, res: Response) => {
  res.json({});
});

likesRouter.post('/', (req: Request, res: Response) => {
  res.json({});
});

likesRouter.delete('/', (req: Request, res: Response) => {
  res.json({});
});
