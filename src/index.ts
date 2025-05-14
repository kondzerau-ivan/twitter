import express from 'express';
import { authRouter } from './interface/routes/auth';
import { postsRouter } from './interface/routes/posts';
import { usersRouter } from './interface/routes/users';
import { commentsRouter } from './interface/routes/comments';
import { sequelizeInstance } from './config';

const PORT = 3000;
const BASE_URL = '/api/v1';
const app = express();

app.use(express.json());
app.use(`${BASE_URL}/auth`, authRouter);
app.use(`${BASE_URL}/users`, usersRouter);
app.use(`${BASE_URL}/posts`, postsRouter);
app.use(`${BASE_URL}/comments`, commentsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

try {
  await sequelizeInstance.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
