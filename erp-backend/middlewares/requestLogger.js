const logger = require('../config/logger');

const errorMiddleware = (
  error,
  req,
  res,
  next
) => {
  const statusCode =
    error.statusCode || 500;

  logger.error({
    message: error.message,
    stack: error.stack,
    method: req.method,
    url: req.originalUrl,
  });

  return res.status(statusCode).json({
    success: false,
    message: error.message,
    errors: error.errors || [],
  });
};

module.exports = errorMiddleware;