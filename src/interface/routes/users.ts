import { Router } from 'express';
import type { Request, Response } from 'express';

export const usersRouter = Router();

usersRouter.get('/users/:userId', (req: Request, res: Response) => {
  res.json({});
});

usersRouter.get('/users/:userId/posts', (req: Request, res: Response) => {
  res.json({});
});

usersRouter.get('/users/:userId/comments', (req: Request, res: Response) => {
  res.json({});
});

usersRouter.get('/users/:userId/followers', (req: Request, res: Response) => {
  res.json({"followers": 666});
});

usersRouter.post('/users/:userId/followers', (req: Request, res: Response) => {
  res.json({});
});

usersRouter.delete('/users/:userId/followers', (req: Request, res: Response) => {
  res.json({});
});
