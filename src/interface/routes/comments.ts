import { Router } from 'express';
import type { Request, Response } from 'express';
import { likesRouter } from './likes.js';

export const commentsRouter = Router();

commentsRouter.get('/:commentId', (req: Request, res: Response) => {
  res.json({});
});

commentsRouter.put('/:commentId', (req: Request, res: Response) => {
  res.json({});
});

commentsRouter.delete('/:commentId', (req: Request, res: Response) => {
  res.json({});
});

commentsRouter.use('/:commentId/likes', likesRouter);
