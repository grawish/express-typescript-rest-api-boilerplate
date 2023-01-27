import { type Request, type Response } from 'express';

import createError = require('http-errors');

const errorHandler = (err: any, req: Request, res: Response): void => {
  console.error(err);
  // if the error is safe to expose to client
  if (err.expose !== null && err.expose !== undefined) {
    res.status(err.status ?? 500).send(err);
  } else {
    res.status(500).send(createError.InternalServerError());
  }
};

export default errorHandler;
