import { Router } from 'express';
import type { Request, Response } from 'express';

export const authRouter = Router();

authRouter.get('/auth', (req: Request, res: Response) => {
  res.json({});
});

authRouter.post('/auth', (req: Request, res: Response) => {
  res.json({});
});
