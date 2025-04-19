import express from 'express';
import { authRouter } from './interface/routes/auth.ts';
import { postsRouter } from './interface/routes/posts.ts';

const PORT = 3000;
const BASE_URL = '/api/v1';
const app = express();

app.use(express.json());
app.use(BASE_URL, authRouter);
app.use(BASE_URL, postsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
