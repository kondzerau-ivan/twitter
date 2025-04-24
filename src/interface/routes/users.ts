import { Router } from 'express';
import type { Request, Response } from 'express';

export const usersRouter = Router();

usersRouter.get('/:userId', (req: Request, res: Response) => {
  res.json({});
});

usersRouter.get('/:userId/posts', (req: Request, res: Response) => {
  res.json({});
});

usersRouter.get('/:userId/comments', (req: Request, res: Response) => {
  res.json({});
});

usersRouter.get('/:userId/followers', (req: Request, res: Response) => {
  res.json({});
});

usersRouter.post('/:userId/followers', (req: Request, res: Response) => {
  res.json({});
});

usersRouter.delete('/:userId/followers', (req: Request, res: Response) => {
  res.json({});
});
