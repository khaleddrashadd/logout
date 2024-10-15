import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000', // allow to server to accept request from different origin
    methods: 'GET,PUT,POST,DELETE,PATCH',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
    maxAge: 86400,
    optionsSuccessStatus: 200,
    preflightContinue: false, // to enable preflight request
  })
);

app.get('/api/login', (req, res) => {
  res.cookie('token', 'khaled', {
    secure: true,
    httpOnly: true,
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  res.json({ message: 'logged in' });
});

app.get('/api/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'logged out' });
});

const port = 3500;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
