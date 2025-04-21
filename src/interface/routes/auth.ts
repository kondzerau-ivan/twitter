import { Router } from 'express';
import type { Request, Response } from 'express';

export const authRouter = Router();

authRouter.get('/', (req: Request, res: Response) => {
  res.json({});
});

authRouter.post('/', (req: Request, res: Response) => {
  res.json({});
});
