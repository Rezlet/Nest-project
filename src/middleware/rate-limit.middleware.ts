// rate-limit.middleware.ts
import rateLimit from 'express-rate-limit';

export const rateLimitMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 100, // max 100 request / window
  message: 'Too many requests, please try again later.',
});
