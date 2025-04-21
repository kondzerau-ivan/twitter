import { Router } from 'express';
import type { Request, Response } from 'express';

export const postsRouter = Router();

postsRouter.get('/', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.post('/', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.get('/:postId', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.put('/:postId', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.delete('/:postId', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.get('/:postId/comments', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.post('/:postId/comments', (req: Request, res: Response) => {
  res.json({});
});
