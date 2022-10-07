import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import connectDB from './db/connect.js';
import authenticateUser from './middleware/auth.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';
// With ES& modules, dirname is not accessible by default
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';

dotenv.config();
const app = express();

import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev')); // POST /api/v1/auth/register 400 56.925 ms - 62
}

app.use(express.json());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
// Option for entire application
// app.use(limiter)

// For deployment, we serve the production ready build folder
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

// Try all GET routes after the above routes have been tried
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

// 404 - only looking for routes that don't exist
app.use(notFoundMiddleware);
// Error handler is looking for errors occurring in the existing routes (must be after 404)
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port} 📡`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
