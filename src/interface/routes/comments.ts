import { Router } from 'express';
import type { Request, Response } from 'express';

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

commentsRouter.get('/:commentId/likes', (req: Request, res: Response) => {
  res.json({});
});

commentsRouter.post('/:commentId/likes', (req: Request, res: Response) => {
  res.json({});
});

commentsRouter.delete('/:commentId/likes', (req: Request, res: Response) => {
  res.json({});
});
