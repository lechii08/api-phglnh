exports.errorHandler = (next, message, status = 1000) => {
  const error = new Error(message);
  error.status = status;
  next(error);
};
