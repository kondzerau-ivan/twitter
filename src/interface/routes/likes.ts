import { Router } from 'express';
import type { Request, Response } from 'express';

export const likesRouter = Router();

likesRouter.get('/posts/:postId/likes', (req: Request, res: Response) => {
  res.json({"likes": "post"});
});

likesRouter.post('/posts/:postId/likes', (req: Request, res: Response) => {
  res.json({});
});

likesRouter.delete('/posts/:postId/likes', (req: Request, res: Response) => {
  res.json({});
});

likesRouter.get('/comments/:commentId/likes', (req: Request, res: Response) => {
  res.json({"likes": "comments"});
});

likesRouter.post('/comments/:commentId/likes', (req: Request, res: Response) => {
  res.json({});
});

likesRouter.delete('/comments/:commentId/likes', (req: Request, res: Response) => {
  res.json({});
});
