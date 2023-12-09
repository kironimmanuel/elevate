import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import connectDB from "./db/connect.js";
import authenticateUser from "./middleware/auth.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import xss from "xss-clean";

// Option for entire application
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//   message: 'Too many requests were send, please try again in 15 minutes',
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })

dotenv.config();
const app = express();

// Routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev")); // POST /api/v1/auth/register 400 56.925 ms - 62
}

app.use(express.json());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
// app.use(limiter);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8080;
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
