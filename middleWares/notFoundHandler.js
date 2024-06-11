const notFound = (req, res, next) => {
  const err = new Error(
    `Can't find ${req.originalUrl} on this server! Focus MAN!!`
  );
  err.status = 404;
  err.statusCode = 404;
  res.json(err);
};
module.exports = notFound;
