import { Router } from 'express';
import type { Request, Response } from 'express';

export const postsRouter = Router();

postsRouter.get('/posts', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.get('/posts/:postId', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.post('/posts', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.put('/posts/:postId', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.delete('/posts/:postId', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.get('/posts/:postId/likes', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.post('/posts/:postId/likes', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.delete('/posts/:postId/likes', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.get('/posts/:postId/comments', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.get('/posts/:postId/comments/:commentId', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.post('/posts/:postId/comments', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.put('/posts/:postId/comments/:commentId', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.delete('/posts/:postId/comments/:commentId', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.get('/posts/:postId/comments/:commentId/likes', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.post('/posts/:postId/comments/:commentId/likes', (req: Request, res: Response) => {
  res.json({});
});

postsRouter.delete('/posts/:postId/comments/:commentId/likes', (req: Request, res: Response) => {
  res.json({});
});
