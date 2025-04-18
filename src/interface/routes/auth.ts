import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

router.get('/auth', (req: Request, res: Response) => {
  res.json({
    authenticated: false,
    message: "User is not logged in"
  });
});

router.post('/auth', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email === 'batman@gmail.com' && password === 'batman123') {
    res.status(200).json({
      authenticated: true,
      message: 'Authentication successful',
      user: {
        id: 1,
        email: email,
      },
      token: 'fake-jwt-token'
    })
  } else {
    res.status(401).json({
      authenticated: false,
      message: 'Invalid email or password'
    })
  }
});

export { router as authRouter };
